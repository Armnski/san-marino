import type { Metadata } from "next";
export const siteUrl = (process.env.SITE_URL || "https://sanmarino-bonn.com").replace(/\/$/, "");
export const indexable = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : process.env.SITE_INDEXABLE === "true";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description, metadataBase: new URL(siteUrl),
    alternates: { canonical: `${siteUrl}${path}` },
    robots: { index: indexable, follow: true },
    openGraph: { type: "website", locale: "de_DE", siteName: "San Marino Bonn", title, description, url: `${siteUrl}${path}` },
    twitter: { card: "summary", title, description },
  };
}
export const restaurantData = {
  "@context": "https://schema.org", "@type": "Restaurant", "@id": `${siteUrl}/#restaurant`,
  name: "San Marino Bonn", alternateName: ["San Marino", "Sanmarino Bonn"], url: `${siteUrl}/`,
  telephone: "+49228441965", email: "info@sanmarino-bonn.de", servesCuisine: "Indian",
  description: "Indisches Restaurant in Bonn-Oberkassel mit Terrasse, Catering, Feiern und Kegelbahn.",
  image: [`${siteUrl}/restaurant/detail.jpg`, `${siteUrl}/restaurant/interior.png`],
  address: { "@type": "PostalAddress", streetAddress: "Königswinterer Straße 717", postalCode: "53227", addressLocality: "Bonn", addressRegion: "Nordrhein-Westfalen", addressCountry: "DE" },
  hasMenu: `${siteUrl}/images/Speisekarte.pdf`, acceptsReservations: true,
  openingHoursSpecification: [["11:00","14:00"],["17:00","23:00"]].map(([opens,closes])=>({ "@type":"OpeningHoursSpecification", dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens, closes })),
  sameAs: ["https://www.lieferando.de/speisekarte/san-marino-bonn", "https://wolt.com/de/deu/bonn/restaurant/indisches-restaurant-san-marino"],
};
export const websiteData = { "@context":"https://schema.org", "@type":"WebSite", "@id":`${siteUrl}/#website`, url:`${siteUrl}/`, name:"San Marino Bonn", alternateName:"Sanmarino Bonn", inLanguage:"de-DE", publisher:{"@id":`${siteUrl}/#restaurant`} };
