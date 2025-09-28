import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

interface SEOProps {
  title: string;
  description: string;
  url: string;
  canonical?: string;
  image?: string;
  twitterImage?: string;
  type?: string;
  tags?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: Record<string, any>;
}

const SEO = ({
  title,
  description,
  url,
  canonical,
  image,
  twitterImage,
  type = "website",
  tags,
  publishedTime,
  modifiedTime,
  author,
  breadcrumbs,
  jsonLd,
}: SEOProps) => {
  const canonicalUrl = canonical || url;

  // Article JSON-LD (when type === article and publishedTime present)
  const articleLd =
    type === "article" && publishedTime
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl || url,
          },
          headline: title,
          description,
          image: image ? [image] : undefined,
          datePublished: publishedTime,
          dateModified: modifiedTime || publishedTime,
          author: author
            ? { "@type": "Person", name: author }
            : { "@type": "Organization", name: "CurryDevs" },
          publisher: {
            "@type": "Organization",
            name: "CurryDevs",
            logo: {
              "@type": "ImageObject",
              url: "https://currydevs.com/logo.png",
            },
          },
        }
      : null;

  // Breadcrumb JSON-LD
  const breadcrumbLd =
    breadcrumbs && breadcrumbs.length
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((b) => ({
            "@type": "ListItem",
            position: b.position,
            name: b.name,
            item: b.item,
          })),
        }
      : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags?.join(", ")} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterImage && <meta name="twitter:image:alt" content={title} />}

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      {articleLd && (
        <script type="application/ld+json">
          {JSON.stringify(articleLd)}
        </script>
      )}
      {breadcrumbLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
