import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return indexable ? ["/", "/feiern", "/impressum"].map(path=>({url:`${siteUrl}${path}`})) : [];
}
