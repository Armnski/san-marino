import type { Metadata } from "next";
import { markup } from "@/content/celebrations";
import RestaurantDocument from "@/components/restaurant/RestaurantDocument";
import { pageMetadata } from "@/lib/seo";
export const metadata: Metadata = pageMetadata("Catering, Feiern & Kegelbahn in Bonn | San Marino", "Catering für Ihre Veranstaltung, Geburtstage und Firmenfeiern im San Marino Bonn-Oberkassel. Kegelbahn und Termine telefonisch unter 0228 441965 anfragen.", "/feiern");
export default function CelebrationsPage() { return <RestaurantDocument markup={markup} />; }
