import type { Metadata } from "next";
import "./globals.css";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = {
  ...pageMetadata("San Marino Bonn | Indisches Restaurant in Oberkassel", "San Marino in Bonn-Oberkassel: indische Küche, Terrasse, Catering, Feiern und Kegelbahn. Speisekarte ansehen und Tisch unter 0228 441965 reservieren.", "/"),
  icons: { icon: "/restaurant/favicon.svg" },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><head><link rel="stylesheet" href="/restaurant/fonts.css" /></head><body>{children}</body></html>;
}
