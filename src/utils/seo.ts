export interface PageSeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
  keywords?: string[];
  breadcrumbs?: Array<{ name: string; path: string }>;
}

export const updatePageSeo = (config: PageSeoConfig) => {
  if (typeof document === 'undefined') return;

  // 1. Page Title
  document.title = config.title;

  // 2. Meta Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', config.description);

  // 3. Canonical Link
  const fullUrl = `https://hashim-engineering.com${config.canonicalPath === '/' ? '' : config.canonicalPath}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', fullUrl);

  // 4. OpenGraph Tags
  const setOgTag = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  setOgTag('og:title', config.title);
  setOgTag('og:description', config.description);
  setOgTag('og:url', fullUrl);
  setOgTag('og:type', config.ogType || 'website');

  // 5. Twitter Card Tags
  const setTwitterTag = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  setTwitterTag('twitter:title', config.title);
  setTwitterTag('twitter:description', config.description);

  // 6. Schema.org BreadcrumbList Injection
  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    const existingBreadcrumbScript = document.getElementById('schema-breadcrumbs');
    if (existingBreadcrumbScript) {
      existingBreadcrumbScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'schema-breadcrumbs';
    script.type = 'application/ld+json';
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: config.breadcrumbs.map((b, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: b.name,
        item: `https://hashim-engineering.com${b.path === '/' ? '' : b.path}`,
      })),
    };
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
  }
};
