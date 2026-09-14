import RestaurantInteractions from "./RestaurantInteractions";
export default function RestaurantDocument({ markup }: { markup: string }) {
  return <>
    <link rel="stylesheet" href="/restaurant/style.css" precedence="restaurant" />
    {/* Trusted, repository-authored markup; never user-supplied HTML. */}
    <div dangerouslySetInnerHTML={{ __html: markup }} />
    <RestaurantInteractions />
  </>;
}
