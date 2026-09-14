import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/lib/seo";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  // Keep crawling allowed so crawlers can see the preview's noindex meta tag.
  return { rules: { userAgent: "*", allow: "/" }, ...(indexable ? { sitemap: `${siteUrl}/sitemap.xml` } : {}) };
}
