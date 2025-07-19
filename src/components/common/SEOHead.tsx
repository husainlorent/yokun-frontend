interface SEOHeadProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  robots?: string; // masalan "index, follow"
}

export function SEOHead({
  title,
  description,
  ogTitle,
  ogDescription,
  canonicalUrl,
  robots = "index, follow",
}: SEOHeadProps) {
  const siteName = "Yoshlar kundaligi";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <>
      <title>{fullTitle}</title>

      {description && <meta name="description" content={description} />}
      {robots && <meta name="robots" content={robots} />}

      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </>
  );
}
