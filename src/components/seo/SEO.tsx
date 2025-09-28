// src/components/seo/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

export type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  twitterImage?: string; // Separate Twitter image
  type?: "website" | "article" | "project";
  publishedTime?: string; // ISO date
  modifiedTime?: string; // ISO date
  author?: string;
  tags?: string[];
  canonical?: string;
  jsonLd?: object | null;
  breadcrumbs?: { position: number; name: string; item: string }[];
  noindex?: boolean;
  nofollow?: boolean;
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  twitterImage,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  tags,
  canonical,
  jsonLd,
  breadcrumbs,
  noindex = false,
  nofollow = false,
}) => {
  const canonicalUrl = canonical || url;
  const finalTwitterImage = twitterImage || image;
  
  // Robots meta
  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  if (robots.length === 0) robots.push('index', 'follow');
  
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
              url: "https://currydevs.com/logo.png",
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
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots.join(', ')} />
      
      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={type === "article" ? "article" : "website"} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title} />}
      <meta property="og:site_name" content="CurryDevs" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={finalTwitterImage} />
      <meta name="twitter:site" content="@currydevs" />
      <meta name="twitter:creator" content="@currydevs" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {finalTwitterImage && <meta name="twitter:image" content={finalTwitterImage} />}
      {finalTwitterImage && <meta name="twitter:image:alt" content={title} />}

      {/* Additional Meta Tags */}
      {author && <meta name="author" content={author} />}
      {tags && tags.length > 0 && <meta name="keywords" content={tags.join(", ")} />}
      
      {/* Article Specific */}
      {type === "article" && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {tags && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* JSON-LD */}
      {articleLd && <script type="application/ld+json">{JSON.stringify(articleLd)}</script>}
      {breadcrumbLd && <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default SEO;