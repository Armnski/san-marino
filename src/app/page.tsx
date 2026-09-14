import { markup } from "@/content/home";
import RestaurantDocument from "@/components/restaurant/RestaurantDocument";
import { restaurantData, websiteData } from "@/lib/seo";
export default function HomePage() { return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify([restaurantData, websiteData]).replace(/</g, "\\u003c")}} />
  <RestaurantDocument markup={markup} />
</>; }
