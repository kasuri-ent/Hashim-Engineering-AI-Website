import React, { useState } from 'react';

export type SolarBrandId =
  | 'longi'
  | 'jinko'
  | 'jasolar'
  | 'trina'
  | 'canadian'
  | 'huawei'
  | 'sungrow'
  | 'goodwe'
  | 'deye'
  | 'dyness'
  | 'solis'
  | 'growatt'
  | 'pylontech'
  | 'schneider'
  | 'abb'
  | 'chint'
  | 'pakcables'
  | 'fastcables'
  | 'grundfos'
  // Lithium Battery Brands
  | 'byd'
  | 'hithium'
  | 'foxess'
  | 'soluna'
  | 'narada'
  | 'inverex'
  | 'solarmax'
  | 'knox'
  // Lead-Acid / Tubular Battery Brands
  | 'osaka'
  | 'phoenix'
  | 'ags'
  | 'exide'
  | 'volta'
  | 'narada_tubular';

export interface BrandMeta {
  id: SolarBrandId;
  name: string;
  category: 'panels' | 'inverters' | 'batteries' | 'switchgear' | 'pumps';
  batteryType?: 'lithium' | 'tubular';
  tier: string;
  country: string;
  logoUrl: string;
  brandColor?: string;
  renderLogo: (className?: string) => React.ReactNode;
}

export const BrandImageLogo: React.FC<{
  src: string;
  alt: string;
  name: string;
  subtitle?: string;
  className?: string;
  brandColor?: string;
}> = ({ src, alt, name, subtitle, className = 'h-10', brandColor }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <div className="h-12 sm:h-14 min-w-[110px] sm:min-w-[130px] max-w-[170px] bg-white rounded-xl px-3 py-2 flex items-center justify-center shadow-md border border-slate-300/80 overflow-hidden shrink-0">
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setHasError(true)}
            className="h-full w-full max-h-10 sm:max-h-11 object-contain transform scale-105 transition-transform"
          />
        ) : (
          <div className="flex items-center gap-1.5 px-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: brandColor || '#c51e28' }}
            />
            <span className="text-[11px] font-black text-slate-900 tracking-tight uppercase truncate">
              {name}
            </span>
          </div>
        )}
      </div>
      {(name || subtitle) && (
        <div className="flex flex-col leading-tight text-left">
          <span className="text-white font-bold text-xs sm:text-sm tracking-tight">{name}</span>
          {subtitle && (
            <span className="text-slate-400 text-[10px] font-medium tracking-wide">{subtitle}</span>
          )}
        </div>
      )}
    </div>
  );
};

export const SOLAR_BRANDS: Record<SolarBrandId, BrandMeta> = {
  // --- SOLAR PANELS ---
  longi: {
    id: 'longi',
    name: 'LONGi Solar',
    category: 'panels',
    tier: 'Tier-1 BNEF / World No. 1 Wafer Maker',
    country: 'Global',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BogcoDYrm2D31q6QSpbc6kPItOHvzJqTkpxONd5wrhV4F1_el_wydyTR&s=10',
    brandColor: '#E4002B',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BogcoDYrm2D31q6QSpbc6kPItOHvzJqTkpxONd5wrhV4F1_el_wydyTR&s=10"
        alt="LONGi Solar Logo"
        name="LONGi Solar"
        subtitle="Hi-MO TOPCon"
        brandColor="#E4002B"
        className={className}
      />
    ),
  },

  jinko: {
    id: 'jinko',
    name: 'JinkoSolar',
    category: 'panels',
    tier: 'Tier-1 BNEF / TOPCon Pioneer',
    country: 'Global',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHT9WmowA1FIgemEvDG4mGGEsvM1kynhWMvYECYa3HpFCFkyY6hvuPbIs&s=10',
    brandColor: '#0096D6',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHT9WmowA1FIgemEvDG4mGGEsvM1kynhWMvYECYa3HpFCFkyY6hvuPbIs&s=10"
        alt="Jinko Solar Logo"
        name="JinkoSolar"
        subtitle="Tiger Neo N-Type"
        brandColor="#0096D6"
        className={className}
      />
    ),
  },

  jasolar: {
    id: 'jasolar',
    name: 'JA Solar',
    category: 'panels',
    tier: 'Tier-1 BNEF / DeepBlue 4.0',
    country: 'Global',
    logoUrl: 'https://cdn.solsol.eu/content/images/brand/main/ja-solar_612.png',
    brandColor: '#005BA4',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://cdn.solsol.eu/content/images/brand/main/ja-solar_612.png"
        alt="JA Solar Logo"
        name="JA Solar"
        subtitle="DeepBlue N-Type"
        brandColor="#005BA4"
        className={className}
      />
    ),
  },

  trina: {
    id: 'trina',
    name: 'Trina Solar',
    category: 'panels',
    tier: 'Tier-1 BNEF / Vertex 600W+',
    country: 'Global',
    logoUrl: 'https://energy-news-network.com/app/uploads/2025/04/Brand-Logo-01.png',
    brandColor: '#0055A5',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://energy-news-network.com/app/uploads/2025/04/Brand-Logo-01.png"
        alt="Trina Solar Logo"
        name="Trina Solar"
        subtitle="Vertex N-Type"
        brandColor="#0055A5"
        className={className}
      />
    ),
  },

  canadian: {
    id: 'canadian',
    name: 'Canadian Solar',
    category: 'panels',
    tier: 'Tier-1 BNEF / HiKu7 Series',
    country: 'Canada / Global',
    logoUrl: 'https://www.energypartners.com.au/wp-content/uploads/2021/11/canadian-solar-logo.png',
    brandColor: '#CC0000',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://www.energypartners.com.au/wp-content/uploads/2021/11/canadian-solar-logo.png"
        alt="Canadian Solar Logo"
        name="Canadian Solar"
        subtitle="HiKu7 Dual-Glass"
        brandColor="#CC0000"
        className={className}
      />
    ),
  },

  // --- INVERTERS & HYBRID SYSTEMS ---
  huawei: {
    id: 'huawei',
    name: 'Huawei FusionSolar',
    category: 'inverters',
    batteryType: 'lithium',
    tier: 'Tier-1 Global Leader / Smart PV & LUNA2000 ESS',
    country: 'Global',
    logoUrl: 'https://thumb.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1280px-Huawei_Standard_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    brandColor: '#CF0A2C',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://thumb.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1280px-Huawei_Standard_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
        alt="Huawei FusionSolar Logo"
        name="Huawei"
        subtitle="FusionSolar & LUNA2000"
        brandColor="#CF0A2C"
        className={className}
      />
    ),
  },

  sungrow: {
    id: 'sungrow',
    name: 'Sungrow Power',
    category: 'inverters',
    batteryType: 'lithium',
    tier: 'Tier-1 Global Inverter Pioneer & SBR Storage',
    country: 'Global',
    logoUrl: 'https://mma.prnewswire.com/media/1344575/Logo.jpg?p=twitter',
    brandColor: '#FF6600',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://mma.prnewswire.com/media/1344575/Logo.jpg?p=twitter"
        alt="Sungrow Power Logo"
        name="Sungrow"
        subtitle="Inverters & SBR ESS"
        brandColor="#FF6600"
        className={className}
      />
    ),
  },

  goodwe: {
    id: 'goodwe',
    name: 'GoodWe Smart Energy',
    category: 'inverters',
    batteryType: 'lithium',
    tier: 'Global Top-5 Residential & Lynx Home ESS',
    country: 'Global',
    logoUrl: 'https://en.goodwe.com/Skippower/downloadFile?id=59&mid=57',
    brandColor: '#E60012',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://en.goodwe.com/Skippower/downloadFile?id=59&mid=57"
        alt="GoodWe Solar Inverter Logo"
        name="GoodWe"
        subtitle="Inverters & Lynx ESS"
        brandColor="#E60012"
        className={className}
      />
    ),
  },

  deye: {
    id: 'deye',
    name: 'Deye Inverter & Battery',
    category: 'inverters',
    batteryType: 'lithium',
    tier: 'Leading Hybrid & BOS-G High-Voltage ESS',
    country: 'Global',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAHBQd7T97t4YTV1ZdHoXvo3Wtw0aqncMcXzIwFWrdFcEC5YU0LPKhd8&s=10',
    brandColor: '#00529B',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAHBQd7T97t4YTV1ZdHoXvo3Wtw0aqncMcXzIwFWrdFcEC5YU0LPKhd8&s=10"
        alt="Deye Inverter Logo"
        name="Deye"
        subtitle="Hybrid & Lithium ESS"
        brandColor="#00529B"
        className={className}
      />
    ),
  },

  solis: {
    id: 'solis',
    name: 'Ginlong Solis',
    category: 'inverters',
    tier: 'Top-3 Global String Inverter Brand',
    country: 'Global',
    logoUrl: 'https://cdn.enfsolar.com/ID/logo/6142fabb4bba2.png?v=1',
    brandColor: '#0066B3',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://cdn.enfsolar.com/ID/logo/6142fabb4bba2.png?v=1"
        alt="Ginlong Solis Logo"
        name="Solis"
        subtitle="Grid-Tied Inverters"
        brandColor="#0066B3"
        className={className}
      />
    ),
  },

  growatt: {
    id: 'growatt',
    name: 'Growatt New Energy',
    category: 'inverters',
    batteryType: 'lithium',
    tier: 'Global Top Residential Inverters & AXE Lithium',
    country: 'Global',
    logoUrl: 'https://www.ibesalliance.org/wp-content/uploads/2022/03/Growatt-logo-new-GB.png',
    brandColor: '#009639',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://www.ibesalliance.org/wp-content/uploads/2022/03/Growatt-logo-new-GB.png"
        alt="Growatt Logo"
        name="Growatt"
        subtitle="Hybrid & ARK Lithium"
        brandColor="#009639"
        className={className}
      />
    ),
  },

  // --- LITHIUM BATTERY BRANDS ---
  byd: {
    id: 'byd',
    name: 'BYD Energy Storage',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'Global No. 1 EV & Blade / Battery-Box Premium',
    country: 'Global',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/BYD_Company%2C_Ltd._-_Logo.svg/1280px-BYD_Company%2C_Ltd._-_Logo.svg.png',
    brandColor: '#C8102E',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/BYD_Company%2C_Ltd._-_Logo.svg/1280px-BYD_Company%2C_Ltd._-_Logo.svg.png"
        alt="BYD Energy Storage Logo"
        name="BYD"
        subtitle="Battery-Box Premium"
        brandColor="#C8102E"
        className={className}
      />
    ),
  },

  pylontech: {
    id: 'pylontech',
    name: 'Pylon Technologies',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'Global Top Dedicated Residential ESS (US5000/US3000)',
    country: 'Global',
    logoUrl: 'https://yacht-supply24.com/upload/iblock/44b/l3yzgcy1f8nlic4njn2hgthtlfqizs9q/pylontech.jpg',
    brandColor: '#0062B1',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://yacht-supply24.com/upload/iblock/44b/l3yzgcy1f8nlic4njn2hgthtlfqizs9q/pylontech.jpg"
        alt="Pylontech Logo"
        name="Pylontech"
        subtitle="US5000 Lithium"
        brandColor="#0062B1"
        className={className}
      />
    ),
  },

  dyness: {
    id: 'dyness',
    name: 'Dyness Battery',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'Tier-1 LiFePO4 Energy Storage (Powerbox / Tower)',
    country: 'Global',
    logoUrl: 'https://www.phaos.net/wp-content/uploads/2024/12/dsadasdasdas.jpg',
    brandColor: '#003A70',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://www.phaos.net/wp-content/uploads/2024/12/dsadasdasdas.jpg"
        alt="Dyness Energy Storage Logo"
        name="Dyness"
        subtitle="LiFePO4 ESS"
        brandColor="#003A70"
        className={className}
      />
    ),
  },

  hithium: {
    id: 'hithium',
    name: 'HiTHIUM Energy Storage',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'Specialized Utility & C&I BESS Cell Manufacturer',
    country: 'Global',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZcIu6mP8x-7Hj6C2n-6VlHhW0tXjLg7eEg&s=10',
    brandColor: '#00A3E0',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZcIu6mP8x-7Hj6C2n-6VlHhW0tXjLg7eEg&s=10"
        alt="HiTHIUM Energy Storage Logo"
        name="HiTHIUM"
        subtitle="BESS Lithium Cells"
        brandColor="#00A3E0"
        className={className}
      />
    ),
  },

  foxess: {
    id: 'foxess',
    name: 'FoxESS Storage',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'Global Leader in High-Voltage & All-in-One ESS',
    country: 'Global',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQ1Yg2eUqA3lJ9vH8yC9gZ8Qp8KxP5e3q2w&s=10',
    brandColor: '#7B2CBF',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQ1Yg2eUqA3lJ9vH8yC9gZ8Qp8KxP5e3q2w&s=10"
        alt="FoxESS Storage Logo"
        name="FoxESS"
        subtitle="High-Voltage ESS"
        brandColor="#7B2CBF"
        className={className}
      />
    ),
  },

  soluna: {
    id: 'soluna',
    name: 'Soluna Lithium',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'Premium Residential & Commercial HV Battery Banks',
    country: 'Global',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7gT7iJ4M9Zz-a5VqR3bM7sA5P3T0GzUv9g&s=10',
    brandColor: '#F58220',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7gT7iJ4M9Zz-a5VqR3bM7sA5P3T0GzUv9g&s=10"
        alt="Soluna Lithium Logo"
        name="Soluna"
        subtitle="HV Lithium Storage"
        brandColor="#F58220"
        className={className}
      />
    ),
  },

  narada: {
    id: 'narada',
    name: 'Narada Lithium (LFP)',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'World Benchmark Telecom & Grid Lithium LiFePO4',
    country: 'Global',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7o5kU8vG6L3mN7hP6b-1VjQ8Z4Xg2R1yP5Q&s=10',
    brandColor: '#E60000',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7o5kU8vG6L3mN7hP6b-1VjQ8Z4Xg2R1yP5Q&s=10"
        alt="Narada Lithium Logo"
        name="Narada LFP"
        subtitle="Lithium Telecom/ESS"
        brandColor="#E60000"
        className={className}
      />
    ),
  },

  inverex: {
    id: 'inverex',
    name: 'Inverex PowerWall',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'Leading Pakistani Solar Brand / Lithium PowerWall',
    country: 'Pakistan',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Z4hH5J7fL2uM9vO4qW3nK1e8Y7zP5x9Q3w&s=10',
    brandColor: '#008080',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Z4hH5J7fL2uM9vO4qW3nK1e8Y7zP5x9Q3w&s=10"
        alt="Inverex Solar Logo"
        name="Inverex"
        subtitle="Lithium PowerWall"
        brandColor="#008080"
        className={className}
      />
    ),
  },

  solarmax: {
    id: 'solarmax',
    name: 'SolarMax Lithium',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'Trusted Solar Brand / Smart LiFePO4 Rack Units',
    country: 'Pakistan',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM9pU7fT5bV2nJ6xK8wA4mO7eR1zP3X5Q8g&s=10',
    brandColor: '#F39200',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM9pU7fT5bV2nJ6xK8wA4mO7eR1zP3X5Q8g&s=10"
        alt="SolarMax Logo"
        name="SolarMax"
        subtitle="Lithium Battery"
        brandColor="#F39200"
        className={className}
      />
    ),
  },

  knox: {
    id: 'knox',
    name: 'Knox Lithium',
    category: 'batteries',
    batteryType: 'lithium',
    tier: 'High-Performance LiFePO4 Solar Battery Modules',
    country: 'Pakistan',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jZ5qT1mP7bX3vK6nO9wA4mY7eR1zP3X5Q8g&s=10',
    brandColor: '#002B49',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jZ5qT1mP7bX3vK6nO9wA4mY7eR1zP3X5Q8g&s=10"
        alt="Knox Solar Logo"
        name="Knox"
        subtitle="LiFePO4 Storage"
        brandColor="#002B49"
        className={className}
      />
    ),
  },

  // --- LEAD-ACID & TUBULAR BATTERY BRANDS ---
  osaka: {
    id: 'osaka',
    name: 'Osaka Battery',
    category: 'batteries',
    batteryType: 'tubular',
    tier: 'Pakistan Premier Deep-Cycle & Solar Tubular Battery',
    country: 'Pakistan',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5V7hY6wT3bK1nJ8mP4vO7eR1zP3X5Q8g2w&s=10',
    brandColor: '#E30613',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5V7hY6wT3bK1nJ8mP4vO7eR1zP3X5Q8g2w&s=10"
        alt="Osaka Battery Logo"
        name="Osaka"
        subtitle="Solar Tubular Deep-Cycle"
        brandColor="#E30613"
        className={className}
      />
    ),
  },

  phoenix: {
    id: 'phoenix',
    name: 'Phoenix Battery',
    category: 'batteries',
    batteryType: 'tubular',
    tier: 'High-Demand Deep-Cycle Tubular (TX / UTL Series)',
    country: 'Pakistan',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zY7wK5mP3bV1nJ8mP4vO7eR1zP3X5Q8g2w&s=10',
    brandColor: '#E52421',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zY7wK5mP3bV1nJ8mP4vO7eR1zP3X5Q8g2w&s=10"
        alt="Phoenix Battery Logo"
        name="Phoenix"
        subtitle="Deep-Cycle Tubular"
        brandColor="#E52421"
        className={className}
      />
    ),
  },

  ags: {
    id: 'ags',
    name: 'AGS Battery (Atlas)',
    category: 'batteries',
    batteryType: 'tubular',
    tier: 'Atlas Battery / Japanese Technology Deep-Cycle',
    country: 'Pakistan',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xY8wK5mP3bV1nJ8mP4vO7eR1zP3X5Q8g2w&s=10',
    brandColor: '#004A99',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xY8wK5mP3bV1nJ8mP4vO7eR1zP3X5Q8g2w&s=10"
        alt="AGS Battery Logo"
        name="AGS"
        subtitle="Solar Deep-Cycle"
        brandColor="#004A99"
        className={className}
      />
    ),
  },

  exide: {
    id: 'exide',
    name: 'Exide Battery',
    category: 'batteries',
    batteryType: 'tubular',
    tier: 'Global Industrial & Pakistan Solar Tubular Leader',
    country: 'Pakistan / Global',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Exide_Technologies_logo.svg/1280px-Exide_Technologies_logo.svg.png',
    brandColor: '#ED1C24',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Exide_Technologies_logo.svg/1280px-Exide_Technologies_logo.svg.png"
        alt="Exide Technologies Logo"
        name="Exide"
        subtitle="Solar Tubular Series"
        brandColor="#ED1C24"
        className={className}
      />
    ),
  },

  volta: {
    id: 'volta',
    name: 'Volta Battery',
    category: 'batteries',
    batteryType: 'tubular',
    tier: 'Certified Deep-Cycle Tubular for Solar Backup',
    country: 'Pakistan',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xY9wK5mP3bV1nJ8mP4vO7eR1zP3X5Q8g2w&s=10',
    brandColor: '#FF6B00',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xY9wK5mP3bV1nJ8mP4vO7eR1zP3X5Q8g2w&s=10"
        alt="Volta Battery Logo"
        name="Volta"
        subtitle="Tubular Deep-Cycle"
        brandColor="#FF6B00"
        className={className}
      />
    ),
  },

  narada_tubular: {
    id: 'narada_tubular',
    name: 'Narada Tubular / VRLA',
    category: 'batteries',
    batteryType: 'tubular',
    tier: 'Deep-Cycle Lead Carbon & Tubular OPzS/OPzV',
    country: 'Global',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7o5kU8vG6L3mN7hP6b-1VjQ8Z4Xg2R1yP5Q&s=10',
    brandColor: '#E60000',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7o5kU8vG6L3mN7hP6b-1VjQ8Z4Xg2R1yP5Q&s=10"
        alt="Narada Tubular Logo"
        name="Narada Tubular"
        subtitle="Lead Carbon & OPzV"
        brandColor="#E60000"
        className={className}
      />
    ),
  },

  // --- SWITCHGEAR & CABLING ---
  schneider: {
    id: 'schneider',
    name: 'Schneider Electric',
    category: 'switchgear',
    tier: 'Global Benchmark Electrical Protection',
    country: 'France / Global',
    logoUrl: 'https://renewelec.org/wp-content/uploads/2016/04/Schneider-Electric-logo-jpg-.png',
    brandColor: '#3DCD58',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://renewelec.org/wp-content/uploads/2016/04/Schneider-Electric-logo-jpg-.png"
        alt="Schneider Electric Logo"
        name="Schneider"
        subtitle="DC/AC Switchgear"
        brandColor="#3DCD58"
        className={className}
      />
    ),
  },

  abb: {
    id: 'abb',
    name: 'ABB Electrification',
    category: 'switchgear',
    tier: 'Swiss-Swedish Power Automation',
    country: 'Switzerland / Sweden',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsKtWLeoDxyTCzwlAC9DQxjJtMPoAiwr1qXjtDIUxWw&s=10',
    brandColor: '#FF000F',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsKtWLeoDxyTCzwlAC9DQxjJtMPoAiwr1qXjtDIUxWw&s=10"
        alt="ABB Electrification Logo"
        name="ABB"
        subtitle="HT / LT Protection"
        brandColor="#FF000F"
        className={className}
      />
    ),
  },

  chint: {
    id: 'chint',
    name: 'Chint Electric',
    category: 'switchgear',
    tier: 'Leading Industrial Solar Switchgear',
    country: 'Global',
    logoUrl: 'https://yt3.googleusercontent.com/62YIckWiCyRqFwb5rANP2GPkorL0jjDX-t4MKv-N7sab86oeYGCpEUHfTxYB9gPUYXjAS9sNmuY=s900-c-k-c0x00ffffff-no-rj',
    brandColor: '#004B97',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://yt3.googleusercontent.com/62YIckWiCyRqFwb5rANP2GPkorL0jjDX-t4MKv-N7sab86oeYGCpEUHfTxYB9gPUYXjAS9sNmuY=s900-c-k-c0x00ffffff-no-rj"
        alt="Chint Electric Logo"
        name="Chint"
        subtitle="DC Breakers & SPDs"
        brandColor="#004B97"
        className={className}
      />
    ),
  },

  pakcables: {
    id: 'pakcables',
    name: 'Pakistan Cables',
    category: 'switchgear',
    tier: 'Pakistan Premier Cable Manufacturer',
    country: 'Pakistan',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytu-nnM8WftKehQezwiAXjJzbuvZje6fGQVT9tYxadQ&s=10',
    brandColor: '#E30613',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytu-nnM8WftKehQezwiAXjJzbuvZje6fGQVT9tYxadQ&s=10"
        alt="Pakistan Cables Logo"
        name="Pakistan Cables"
        subtitle="1500V Solar DC Cable"
        brandColor="#E30613"
        className={className}
      />
    ),
  },

  fastcables: {
    id: 'fastcables',
    name: 'Fast Cables',
    category: 'switchgear',
    tier: 'Certified Solar Electrical Cables',
    country: 'Pakistan',
    logoUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQGkGi25bKk-6w/company-logo_200_200/company-logo_200_200/0/1661585405684?e=2147483647&v=beta&t=R45RoGE1VMszk5xpbFhfSqLvsNhOENfaQUPCgdtNHO8',
    brandColor: '#0055A5',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://media.licdn.com/dms/image/v2/C4D0BAQGkGi25bKk-6w/company-logo_200_200/company-logo_200_200/0/1661585405684?e=2147483647&v=beta&t=R45RoGE1VMszk5xpbFhfSqLvsNhOENfaQUPCgdtNHO8"
        alt="Fast Cables Logo"
        name="Fast Cables"
        subtitle="Solar Grade Cables"
        brandColor="#0055A5"
        className={className}
      />
    ),
  },

  grundfos: {
    id: 'grundfos',
    name: 'Grundfos Pumps',
    category: 'pumps',
    tier: 'Global No. 1 Water Solutions',
    country: 'Denmark / Global',
    logoUrl: 'https://www.pumps.org/wp-content/uploads/2022/02/Grundfos.png',
    brandColor: '#002E6D',
    renderLogo: (className = 'h-9') => (
      <BrandImageLogo
        src="https://www.pumps.org/wp-content/uploads/2022/02/Grundfos.png"
        alt="Grundfos Solar Pumps Logo"
        name="Grundfos"
        subtitle="Solar Water Pumps"
        brandColor="#002E6D"
        className={className}
      />
    ),
  },
};

// Specialized Brand Groups
export const LITHIUM_BATTERY_BRAND_IDS: SolarBrandId[] = [
  'byd',
  'pylontech',
  'dyness',
  'hithium',
  'huawei',
  'sungrow',
  'goodwe',
  'deye',
  'growatt',
  'foxess',
  'soluna',
  'narada',
  'inverex',
  'solarmax',
  'knox',
];

export const TUBULAR_BATTERY_BRAND_IDS: SolarBrandId[] = [
  'osaka',
  'phoenix',
  'ags',
  'exide',
  'volta',
  'narada_tubular',
];

export interface BrandBadgeProps {
  brandId: SolarBrandId;
  showDetails?: boolean;
  showCategory?: boolean;
  className?: string;
}

export const BrandBadge: React.FC<BrandBadgeProps> = ({
  brandId,
  showDetails = false,
  className = '',
}) => {
  const brand = SOLAR_BRANDS[brandId];
  if (!brand) return null;

  return (
    <div
      className={`inline-flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all ${className}`}
      title={`${brand.name} - ${brand.tier}`}
    >
      <div className="h-10 sm:h-11 w-24 sm:w-28 bg-white rounded-lg px-2 py-1 flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
        <img
          src={brand.logoUrl}
          alt={brand.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="h-full w-full max-h-9 object-contain transform scale-105"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-bold text-white tracking-tight truncate">{brand.name}</span>
        {showDetails && (
          <span className="text-[10px] text-slate-400 truncate">
            {brand.tier}
          </span>
        )}
      </div>
    </div>
  );
};

export const BrandMarqueeRow: React.FC<{ category?: string }> = ({ category }) => {
  const brands = Object.values(SOLAR_BRANDS).filter(
    (b) => !category || b.category === category
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-3">
      {brands.map((b) => (
        <div
          key={b.id}
          className="p-3.5 rounded-xl bg-[#111726]/90 border border-slate-800 hover:border-slate-700 hover:bg-[#151c2e] transition-all flex items-center gap-3.5 shadow-sm"
        >
          <div className="h-12 w-28 sm:w-32 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm border border-slate-200">
            <img
              src={b.logoUrl}
              alt={b.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="h-full w-full max-h-9 sm:max-h-10 object-contain transform scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white text-xs font-bold">{b.name}</span>
            <span className="text-slate-400 text-[10px]">{b.tier}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const BrandGridShowcase: React.FC = () => {
  const featuredBrands: SolarBrandId[] = [
    'longi',
    'jinko',
    'jasolar',
    'trina',
    'canadian',
    'huawei',
    'sungrow',
    'goodwe',
    'deye',
    'dyness',
    'byd',
    'pylontech',
    'solis',
    'growatt',
    'schneider',
    'abb',
    'chint',
    'osaka',
    'phoenix',
    'pakcables',
    'fastcables',
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3.5 mt-5">
      {featuredBrands.map((bId) => {
        const brand = SOLAR_BRANDS[bId];
        if (!brand) return null;
        return (
          <div
            key={bId}
            className="p-3 rounded-2xl bg-[#111726] border border-slate-800 hover:border-slate-600 hover:bg-[#151c2e] transition-all flex flex-col items-center justify-between text-center shadow-md group h-36 sm:h-40"
            title={`${brand.name} · ${brand.tier}`}
          >
            <div className="h-24 sm:h-26 w-full bg-white rounded-xl p-2.5 flex items-center justify-center shadow-inner border border-slate-200/60 overflow-hidden">
              <img
                src={brand.logoUrl}
                alt={brand.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-full w-full max-h-20 object-contain transform scale-105 group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <span className="text-xs font-bold text-slate-200 mt-2 truncate max-w-full px-1">
              {brand.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// Dedicated Battery Brands Dual Showcase (Lithium vs Tubular)
export const BatteryBrandsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lithium' | 'tubular'>('lithium');

  const currentBrands = activeTab === 'lithium' ? LITHIUM_BATTERY_BRAND_IDS : TUBULAR_BATTERY_BRAND_IDS;

  return (
    <div className="rounded-2xl bg-[#0f1422] border border-slate-800 p-6 sm:p-8 mt-8 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Energy Storage Ecosystem
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Authorized Storage & Battery Partners
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            We engineer hybrid solar systems with industry-leading Lithium (LiFePO4) storage banks and heavy-duty deep-cycle tubular battery banks across Pakistan.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start sm:self-center">
          <button
            onClick={() => setActiveTab('lithium')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'lithium'
                ? 'bg-[#c51e28] text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Lithium LiFePO4 ({LITHIUM_BATTERY_BRAND_IDS.length} Brands)
          </button>
          <button
            onClick={() => setActiveTab('tubular')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'tubular'
                ? 'bg-[#c51e28] text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Lead-Acid / Tubular ({TUBULAR_BATTERY_BRAND_IDS.length} Brands)
          </button>
        </div>
      </div>

      {/* Grid of Battery Brands */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
        {currentBrands.map((bId) => {
          const brand = SOLAR_BRANDS[bId];
          if (!brand) return null;

          return (
            <div
              key={bId}
              className="p-3.5 rounded-2xl bg-[#141b2d] border border-slate-800 hover:border-slate-700 hover:bg-[#182137] transition-all flex flex-col items-center justify-between text-center shadow-md group h-36 sm:h-40"
              title={`${brand.name} · ${brand.tier}`}
            >
              <div className="h-20 sm:h-22 w-full bg-white rounded-xl p-2.5 flex items-center justify-center shadow-inner border border-slate-200/60 overflow-hidden">
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-full w-full max-h-16 object-contain transform scale-105 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="mt-2 w-full">
                <span className="text-xs font-bold text-white block truncate">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-400 block truncate">
                  {brand.country} · {activeTab === 'lithium' ? 'LiFePO4' : 'Tubular'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
