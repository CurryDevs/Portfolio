// src/components/seo/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

export type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: "website" | "article" | "project";
  publishedTime?: string; // ISO date
  modifiedTime?: string; // ISO date
  author?: string;
  tags?: string[];
  canonical?: string;
  jsonLd?: object | null;
  breadcrumbs?: { position: number; name: string; item: string }[];
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  tags,
  canonical,
  jsonLd,
  breadcrumbs,
}) => {
  const canonicalUrl = canonical || url;
  // Article JSON-LD (when type === article and publishedTime present)
  const articleLd =
    type === "article" && publishedTime
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl || url,
          },
          headline: title,
          description,
          image: image ? [image] : undefined,
          datePublished: publishedTime,
          dateModified: modifiedTime || publishedTime,
          author: author ? { "@type": "Person", name: author } : { "@type": "Organization", name: "CurryDevs" },
          publisher: {
            "@type": "Organization",
            name: "CurryDevs",
            logo: {
              "@type": "ImageObject",
              url: `${process.env.REACT_APP_SITE_URL || "https://currydevs.com"}/logo.png`,
            },
          },
        }
      : null;

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
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={type === "article" ? "article" : "website"} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      {/* Tags (optional) */}
      {tags && tags.length > 0 && <meta name="keywords" content={tags.join(", ")} />}

      {/* JSON-LD */}
      {articleLd && <script type="application/ld+json">{JSON.stringify(articleLd)}</script>}
      {breadcrumbLd && <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default SEO;
