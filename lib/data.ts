// All business facts and sample content in one place.
// Menu items, prices and bean products are placeholders for the class prototype.

export const SHOP = {
  name: "Ground Up",
  street: "177 Broadway",
  cityLine: "Brooklyn, NY 11211",
  neighborhood: "Williamsburg, Brooklyn",
  hours: "7am–8pm",
  hoursNote: "Open days to be confirmed",
  phoneDisplay: "212-213-3698",
  phoneHref: "tel:+12122133698",
  email: "coffee-geeks@groundup.com",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=177+Broadway+Brooklyn+NY+11211",
} as const;

export const NAV_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#coffee", label: "Our Coffee" },
  { href: "#shop", label: "Shop Beans" },
  { href: "#events", label: "Events" },
  { href: "#visit", label: "Visit Us" },
] as const;

export type MenuItem = { name: string; price: number; desc: string };
export type MenuCategory = { id: string; label: string; items: MenuItem[] };

export const MENU: MenuCategory[] = [
  {
    id: "espresso",
    label: "Espresso & Milk",
    items: [
      { name: "Espresso", price: 3.25, desc: "A double shot, pulled to order." },
      { name: "Cortado", price: 4.25, desc: "Espresso cut with an equal splash of steamed milk." },
      { name: "Cappuccino", price: 4.75, desc: "Espresso, steamed milk and a deep layer of foam." },
      { name: "Latte", price: 5.0, desc: "Espresso with plenty of steamed milk. Hot or iced." },
      { name: "Mocha", price: 5.5, desc: "Espresso, chocolate and steamed milk." },
      { name: "Café Bombón", price: 4.75, desc: "Espresso layered over sweetened condensed milk. Stir before sipping." },
    ],
  },
  {
    id: "brewed",
    label: "Brewed & Cold",
    items: [
      { name: "House Drip", price: 3.0, desc: "Our everyday batch brew." },
      { name: "Pour-Over", price: 5.0, desc: "Brewed by hand, one cup at a time." },
      { name: "Cold Brew", price: 4.75, desc: "Steeped slow and served over ice." },
      { name: "Iced Coffee", price: 3.75, desc: "Brewed hot, chilled, poured over ice." },
    ],
  },
  {
    id: "notcoffee",
    label: "Not Coffee",
    items: [
      { name: "Chai Latte", price: 4.75, desc: "Spiced tea with steamed milk." },
      { name: "Matcha Latte", price: 5.25, desc: "Whisked matcha with steamed milk." },
      { name: "Hot Chocolate", price: 4.25, desc: "Chocolate and steamed milk." },
      { name: "Loose-Leaf Tea", price: 3.5, desc: "Ask what we’re steeping today." },
    ],
  },
  {
    id: "bakery",
    label: "Bakery",
    items: [
      { name: "Butter Croissant", price: 3.75, desc: "Flaky, buttery, simple." },
      { name: "Banana Bread", price: 3.5, desc: "A thick-cut slice." },
      { name: "Morning Bun", price: 4.25, desc: "Cinnamon sugar and orange zest." },
      { name: "Chocolate Chip Cookie", price: 3.0, desc: "Big, chewy and good with anything." },
    ],
  },
];

export type Product = { id: string; name: string; price: number };

export const PRODUCTS: Product[] = [
  { id: "house", name: "House Blend", price: 18.0 },
  { id: "espresso", name: "Espresso Roast", price: 19.0 },
  { id: "pick", name: "Roaster’s Pick", price: 21.0 },
];

export const EVENTS = [
  {
    tag: "Tasting",
    title: "Coffee Cupping for Beginners",
    desc: "Taste our roasts side by side and find out what you like. No experience (or vocabulary) needed.",
  },
  {
    tag: "Music",
    title: "Live Music Night",
    desc: "Local musicians playing in the shop, with the coffee bar open throughout.",
  },
  {
    tag: "Community",
    title: "Cameras & Coffee",
    desc: "A Williamsburg photo walk that starts and ends with a cup at the shop.",
  },
] as const;
