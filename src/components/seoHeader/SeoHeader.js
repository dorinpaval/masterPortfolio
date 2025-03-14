import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";

function SeoHeader() {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      {/* Meta Keywords (good for legacy SEO) */}
      <meta name="keywords" content={seo.keywords.join(", ")} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <meta property="og:description" content={seo?.og?.description} />
      <meta property="og:image" content={seo?.og?.image} />
    </Helmet>
  );
}

export default SeoHeader;
