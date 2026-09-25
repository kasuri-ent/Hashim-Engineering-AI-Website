import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  X, Send, Sparkles, Mic, MicOff, MessageSquare, 
  User, Phone, CheckCircle2, Volume2, 
  Loader2, Radio, Square
} from 'lucide-react';

interface GeminiSolarAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'chat' | 'voice';
  isVoiceActivationEnabled?: boolean;
  onToggleVoiceActivation?: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  time: string;
}

export const GeminiSolarAssistant: React.FC<GeminiSolarAssistantProps> = ({
  isOpen,
  onClose,
  initialMode = 'chat',
  isVoiceActivationEnabled = false,
  onToggleVoiceActivation,
}) => {
  const [mode, setMode] = useState<'chat' | 'voice'>(initialMode);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      text: 'Assalam-o-Alaikum! I am your Hashim Engineering Solar AI Advisor powered by Gemini. Ask me about solar system sizing, electricity bill offset, NEPRA net metering tariffs (LESCO/IESCO/FESCO/MEPCO), or estimated ROI.',
      time: 'Just now',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [liveSpeechTranscript, setLiveSpeechTranscript] = useState('');
  const [voiceStatusText, setVoiceStatusText] = useState('Tap below to start speaking');
  const [, setSpeechSupported] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Stop speaking helper (defined with useCallback before any effects)
  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        // ignore
      }
    }
    setIsSpeaking(false);
  }, []);

  // Stop listening helper (defined with useCallback before any effects)
  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
    }
    setIsListening(false);
  }, []);

  // Speech Synthesis (Read aloud)
  const speakText = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    try {
      window.speechSynthesis.cancel();

      // Clean markdown symbols for natural vocalization
      const cleanText = text
        .replace(/[*#_~`]/g, '')
        .replace(/\n+/g, '. ')
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Prefer English voice or natural voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Alex'))
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      currentUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      setIsSpeaking(false);
    }
  }, []);

  // Send message to server Gemini endpoint
  const handleSendMessage = useCallback(async (textToSend?: string, isVoiceSource = false) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    stopSpeaking();
    stopListening();

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);
    setVoiceStatusText('Analyzing engineering parameters & calculating response...');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      const replyText = data.reply || 'Assalam-o-Alaikum. Our solar engineering team is ready to assist you. Please reach out via WhatsApp at +92 334 4319157.';

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setVoiceStatusText('Response ready.');

      // If in voice mode or invoked via voice, speak the reply aloud
      if (mode === 'voice' || isVoiceSource) {
        speakText(replyText);
      }
    } catch (_error) {
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: 'Assalam-o-Alaikum! Hashim Engineering provides certified PEC-licensed solar installations across Pakistan. Standard on-grid systems pay for themselves within 2.4 to 2.8 years, offsetting up to 90% of your electricity bill with NEPRA net metering. For an exact site survey & itemized BOQ quote, please contact our engineers on WhatsApp at +92 334 4319157.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, fallbackMsg]);
      setVoiceStatusText('Response ready.');

      if (mode === 'voice' || isVoiceSource) {
        speakText(fallbackMsg.text);
      }
    } finally {
      setIsLoading(false);
    }
  }, [inputMessage, isLoading, messages, mode, speakText, stopListening, stopSpeaking]);

  // Real Web Speech API Listening
  const startListening = useCallback(() => {
    stopSpeaking();
    if (typeof window === 'undefined') return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceStatusText('Voice recognition not supported in this browser. Please use text chat.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setLiveSpeechTranscript('');
        setVoiceStatusText('Listening... Please speak your solar question now.');
      };

      recognition.onresult = (event: any) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        const currentText = final || interim;
        setLiveSpeechTranscript(currentText);

        if (final) {
          setVoiceStatusText(`Heard: "${final}"`);
          handleSendMessage(final, true);
        }
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setVoiceStatusText('Microphone access was denied. Please allow microphone permissions.');
        } else if (event.error === 'no-speech') {
          setVoiceStatusText('No speech detected. Tap microphone and try again.');
        } else {
          setVoiceStatusText(`Voice input ready. Tap to try again.`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (_err) {
      setIsListening(false);
      setVoiceStatusText('Could not access microphone. Tap to retry.');
    }
  }, [handleSendMessage, stopSpeaking]);

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
      setVoiceStatusText('Voice input stopped. Tap to speak again.');
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  const handleClose = useCallback(() => {
    stopSpeaking();
    stopListening();
    onClose();
  }, [onClose, stopListening, stopSpeaking]);

  // Effects
  useEffect(() => {
    if (isOpen) {
      const targetMode = initialMode || 'chat';
      setMode(targetMode);
      if (targetMode === 'voice') {
        const timer = setTimeout(() => {
          startListening();
        }, 300);
        return () => clearTimeout(timer);
      }
    } else {
      stopSpeaking();
      stopListening();
    }
  }, [isOpen, initialMode, startListening, stopListening, stopSpeaking]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setSpeechSupported(false);
      }
    }
  }, []);

  // Cleanup on unmount or close
  useEffect(() => {
    return () => {
      stopSpeaking();
      stopListening();
    };
  }, [stopListening, stopSpeaking]);

  // Quick prompt questions
  const quickQuestions = [
    'What is the payback period for 10 kW solar in Pakistan?',
    'How does NEPRA net metering work with DISCOs?',
    'What is the difference between On-Grid and Hybrid systems?',
    'How many panels are needed for a 65,000 PKR monthly bill?',
    'What solar array is required for a 15 HP tube well?',
  ];

  // Return null when closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#111726] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-modal-title"
      >
        {/* Sleek AI Gradient Header with small icons */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-violet-950/70 via-indigo-950/70 to-slate-900 border-b border-indigo-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 p-0.5 shadow-md flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="assistant-modal-title" className="text-sm font-bold text-white font-display">
                  Hashim Solar AI Advisor
                </h3>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                  Gemini 3.8
                </span>
              </div>
              <p className="text-[11px] text-indigo-200/80">
                Real-Time Voice &amp; Chat Engineering Consultant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Auto Voice Activation Toggle */}
            {onToggleVoiceActivation && (
              <button
                type="button"
                onClick={onToggleVoiceActivation}
                className={`hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-semibold transition-all border ${
                  isVoiceActivationEnabled
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-300 border-slate-700/60'
                }`}
                title={
                  isVoiceActivationEnabled
                    ? 'Voice-Activation is ON: Widget automatically triggers voice mode on click. Click to toggle OFF.'
                    : 'Voice-Activation is OFF: Click to enable auto-trigger in voice mode on click.'
                }
                aria-pressed={isVoiceActivationEnabled}
              >
                <Mic className={`w-3 h-3 ${isVoiceActivationEnabled ? 'text-emerald-400 animate-pulse' : 'text-slate-400'}`} />
                <span>Auto-Voice:</span>
                <span className={isVoiceActivationEnabled ? 'text-emerald-300 font-bold' : 'text-slate-400 font-normal'}>
                  {isVoiceActivationEnabled ? 'ON' : 'OFF'}
                </span>
              </button>
            )}

            {/* Mode Toggle */}
            <div className="flex bg-slate-900/90 rounded-lg p-0.5 border border-indigo-900/40">
              <button
                type="button"
                onClick={() => {
                  stopListening();
                  setMode('chat');
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1 transition-all ${
                  mode === 'chat'
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <MessageSquare className="w-3 h-3 text-cyan-300" />
                <span>Chat</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('voice');
                  startListening();
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1 transition-all ${
                  mode === 'voice'
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Mic className="w-3 h-3 text-emerald-400" />
                <span>Voice</span>
              </button>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mode 1: Voice AI Assistance */}
        {mode === 'voice' ? (
          <div className="p-6 sm:p-8 flex flex-col items-center justify-between text-center flex-1 min-h-[380px] overflow-y-auto space-y-6">
            
            {/* Status Banner */}
            <div className="w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                {isListening ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-400 font-semibold">Microphone Active</span>
                  </>
                ) : isSpeaking ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span className="text-cyan-300 font-semibold">Speaking Answer...</span>
                  </>
                ) : isLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 text-violet-400 animate-spin" />
                    <span className="text-violet-300">Consulting Gemini Solar AI...</span>
                  </>
                ) : (
                  <>
                    <Radio className="w-3.5 h-3.5 text-slate-400" />
                    <span>Voice Consultation Ready</span>
                  </>
                )}
              </div>
            </div>

            {/* Central Voice Orb & Animation */}
            <div className="relative my-2">
              <button
                type="button"
                onClick={toggleListening}
                className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isListening
                    ? 'bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 shadow-2xl shadow-cyan-500/40 ring-4 ring-cyan-400/50 scale-105'
                    : isSpeaking
                    ? 'bg-gradient-to-tr from-cyan-600 to-emerald-600 shadow-2xl shadow-emerald-500/40 ring-4 ring-emerald-400/50 animate-pulse'
                    : 'bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-slate-600'
                }`}
                title={isListening ? 'Click to stop listening' : 'Click to start speaking'}
              >
                {isListening ? (
                  <Mic className="w-10 h-10 text-white animate-bounce" />
                ) : isSpeaking ? (
                  <Volume2 className="w-10 h-10 text-white" />
                ) : (
                  <Mic className="w-10 h-10 text-cyan-400" />
                )}
              </button>

              {/* Radial soundwave rings when active */}
              {isListening && (
                <div className="absolute inset-0 -m-3 rounded-full border-2 border-cyan-400/30 animate-ping pointer-events-none" />
              )}
            </div>

            {/* Live Transcript or Status Description */}
            <div className="max-w-md w-full space-y-2">
              <p className="text-xs sm:text-sm font-medium text-white min-h-[40px] px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                {liveSpeechTranscript ? (
                  <span className="text-cyan-300 font-mono italic">"{liveSpeechTranscript}"</span>
                ) : (
                  <span className="text-slate-300">{voiceStatusText}</span>
                )}
              </p>
              <p className="text-[11px] text-slate-400">
                Ask naturally in English or Urdu: e.g., "What system size do I need for Rs. 50,000 monthly bill?"
              </p>
            </div>

            {/* Voice Control Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={toggleListening}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-all ${
                  isListening
                    ? 'bg-rose-600 hover:bg-rose-700 text-white'
                    : 'bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white'
                }`}
              >
                {isListening ? (
                  <>
                    <MicOff className="w-3.5 h-3.5" />
                    <span>Stop Recording</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-3.5 h-3.5 text-cyan-200" />
                    <span>Tap to Speak</span>
                  </>
                )}
              </button>

              {isSpeaking && (
                <button
                  type="button"
                  onClick={stopSpeaking}
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <Square className="w-3 h-3 text-rose-400" />
                  <span>Stop Audio</span>
                </button>
              )}

              {/* View Spoken Answer in Chat */}
              <button
                type="button"
                onClick={() => setMode('chat')}
                className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cyan-300" />
                <span>Read Full Answer</span>
              </button>
            </div>

          </div>
        ) : (
          /* Mode 2: Chat Mode */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[380px]">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                    m.role === 'user' 
                      ? 'bg-slate-700 text-white' 
                      : 'bg-gradient-to-tr from-violet-600 to-cyan-500 text-white'
                  }`}>
                    {m.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5 text-white" />}
                  </div>

                  <div className={`p-3 rounded-xl max-w-[85%] text-xs leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#c51e28] text-white rounded-tr-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none shadow-sm'
                  }`}>
                    <div className="whitespace-pre-wrap">{m.text}</div>
                    <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/10 text-[9px] text-slate-400">
                      <span>{m.time}</span>
                      {m.role === 'assistant' && (
                        <button
                          type="button"
                          onClick={() => speakText(m.text)}
                          className="hover:text-cyan-300 flex items-center gap-1 transition-colors"
                          title="Listen to this response"
                        >
                          <Volume2 className="w-2.5 h-2.5" />
                          <span>Listen</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing / Loading Indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-violet-600 to-cyan-500 text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-white animate-spin" />
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs rounded-tl-none flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                    <span>Consulting Gemini Solar Engineering engine...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/40">
              <span className="text-[10px] text-slate-400 block mb-1.5 font-medium">
                Quick Questions:
              </span>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    disabled={isLoading}
                    className="shrink-0 text-[10px] px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-indigo-900/40 text-slate-300 hover:text-white transition-colors disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form with Send and Mic buttons */}
            <div className="p-3 border-t border-slate-800 bg-slate-900/90">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about 10 kW cost, ROI, LESCO net metering, tube wells..."
                  disabled={isLoading}
                  className="flex-1 bg-[#0b0f17] border border-slate-700 text-xs text-white rounded-lg px-3 py-2.5 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
                />

                {/* Quick Mic trigger in chat */}
                <button
                  type="button"
                  onClick={() => {
                    setMode('voice');
                    startListening();
                  }}
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-indigo-900/50 rounded-lg transition-colors"
                  title="Speak your question"
                  aria-label="Speak your question"
                >
                  <Mic className="w-3.5 h-3.5" />
                </button>

                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="p-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-lg transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>
        )}

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            PEC &amp; NEPRA Verified Sizing Data
          </span>
          <a
            href="https://wa.me/923344319157"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline flex items-center gap-1 font-medium"
          >
            <Phone className="w-3 h-3" />
            <span>WhatsApp: +92 334 4319157</span>
          </a>
        </div>

      </div>
    </div>
  );
};
