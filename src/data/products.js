import img1 from "../assets/images/products/WhatsApp_Image_2026-03-04_at_6.13.14_AM__1_-removebg-preview.png";
import img2 from "../assets/images/products/WhatsApp_Image_2026-03-04_at_6.13.14_AM-removebg-preview.png";
import img3 from "../assets/images/products/WhatsApp_Image_2026-03-04_at_6.13.15_AM-removebg-preview.png";
import img4 from "../assets/images/products/WhatsApp_Image_2026-03-04_at_6.13.15_AM__1_-removebg-preview.png";

const products = [
  {
    id: 1,
    name: "Burgandy Rose",
    price: "GHS 120",
    originalPrice: "GHS 180",
    category: "Orphic Set",
    material: "Satin blend",
    image: img1,
    description:
      "A striking deep burgundy piece from the Orphic Set collection. Designed for the woman who commands attention the moment she walks in.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
    ],
  },
  {
    id: 2,
    name: "Black Orchid",
    price: "GHS 150",
    category: "Void",
    material: "Structured crepe",
    image: img2,
    description:
      "Dark, deliberate, and unmistakably powerful. The Black Orchid is WICKED's signature void-era piece — minimal form, maximum presence.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
    ],
  },
  {
    id: 3,
    name: "Cherry Alter Ego Top",
    price: "GHS 350",
    category: "Alter Ego",
    material: "Premium jersey",
    image: img3,
    description:
      "Bold, cherry-kissed and unapologetic. The Cherry Alter Ego Top is built for the version of you that doesn't hold back.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: false },
      { label: "XL", available: false },
    ],
  },
  {
    id: 4,
    name: "Smoked Plum Alter Ego",
    price: "GHS 280",
    originalPrice: "GHS 350",
    category: "Alter Ego",
    material: "Velvet-touch fabric",
    image: img4,
    description:
      "The Smoked Plum Alter Ego is moody, rich, and deeply feminine. A piece that shifts the energy of any room you enter.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
    ],
  },
  {
    id: 5,
    name: "Burgandy Rose",
    price: "GHS 120",
    originalPrice: "GHS 180",
    category: "Orphic Set",
    material: "Satin blend",
    image: img1,
    description:
      "A striking deep burgundy piece from the Orphic Set collection. Designed for the woman who commands attention the moment she walks in.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
    ],
  },
  {
    id: 6,
    name: "Black Orchid",
    price: "GHS 150",
    category: "Void",
    material: "Structured crepe",
    image: img2,
    description:
      "Dark, deliberate, and unmistakably powerful. The Black Orchid is WICKED's signature void-era piece — minimal form, maximum presence.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
    ],
  },
  {
    id: 7,
    name: "Cherry Alter Ego Top",
    price: "GHS 350",
    category: "Alter Ego",
    material: "Premium jersey",
    image: img3,
    description:
      "Bold, cherry-kissed and unapologetic. The Cherry Alter Ego Top is built for the version of you that doesn't hold back.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
    ],
  },
  {
    id: 8,
    name: "Smoked Plum Alter Ego",
    price: "GHS 280",
    originalPrice: "GHS 350",
    category: "Alter Ego",
    material: "Velvet-touch fabric",
    image: img4,
    description:
      "The Smoked Plum Alter Ego is moody, rich, and deeply feminine. A piece that shifts the energy of any room you enter.",
    sizes: [
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
    ],
  },
  {
    id: 9,
    name: "Burgandy Rose",
    price: "GHS 120",
    originalPrice: "GHS 180",
    category: "Orphic Set",
    material: "Satin blend",
    image: img1,
    description:
      "A striking deep burgundy piece from the Orphic Set collection. Designed for the woman who commands attention the moment she walks in.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
    ],
  },
  {
    id: 10,
    name: "Black Orchid",
    price: "GHS 150",
    category: "Void",
    material: "Structured crepe",
    image: img2,
    description:
      "Dark, deliberate, and unmistakably powerful. The Black Orchid is WICKED's signature void-era piece — minimal form, maximum presence.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
    ],
  },
];

export default products;

const products2 = [
  {
    id: 1,
    name: "Burgandy Rose",
    price: "GHS 120",
    originalPrice: "GHS 180",
    category: "Kente",
    material: "Traditional Kente cloth",
    image: img1,
    description:
      "A beautifully handwoven Kente shirt crafted by master artisans in the Ashanti region. Each stripe tells a story of cultural heritage.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
      { label: "XXL", available: false },
    ],
  },
  {
    id: 2,
    name: "Black Orchid",
    price: "GHS 45",
    category: "Jewellery",
    material: "Glass beads & brass",
    image: img2,
    description:
      "Hand-strung glass beads in vibrant traditional patterns. Each necklace is unique — no two are exactly alike.",
    sizes: [],
  },
  {
    id: 3,
    name: "Cherry Alter Ego top",
    price: "GHS 350",
    category: "Home & Art",
    material: "Sese wood",
    image: img3,
    description:
      "Traditional Ghanaian stool hand-carved from a single piece of Sese wood. A symbol of royalty and prestige.",
    sizes: [],
  },
  {
    id: 4,
    name: "Smoked plum Alter Ego top",
    price: "GHS 280",
    originalPrice: "GHS 350",
    category: "Accessories",
    material: "Genuine leather",
    image: img4,
    description:
      "Premium leather bag stamped with traditional Adinkra symbols. Handcrafted by skilled leather workers in Kumasi.",
    sizes: [],
  },
  {
    id: 5,
    name: "Burgandy Rose",
    price: "GHS 195",
    category: "Kente",
    material: "Cotton batik",
    image: img1,
    description:
      "A flowing wrap dress made from hand-dyed batik fabric. The bold geometric patterns are inspired by Ghanaian adinkra symbols.",
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
    ],
  },
  {
    id: 6,
    name: "Black Orchid",
    price: "GHS 75",
    category: "Jewellery",
    material: "Cast brass",
    image: img2,
    description:
      "A bold statement cuff cast from solid brass and hand-polished to a warm golden finish.",
    sizes: [
      { label: "S/M", available: true },
      { label: "L/XL", available: true },
    ],
  },
  {
    id: 7,
    name: "Cherry Alter Ego top",
    price: "GHS 90",
    category: "Accessories",
    material: "Kente cloth & leather",
    image: img3,
    description:
      "A chic evening clutch combining traditional Kente weave with a structured leather frame.",
    sizes: [],
  },
  {
    id: 8,
    name: "Smoked plum Alter Ego top",
    price: "GHS 210",
    originalPrice: "GHS 260",
    category: "Kente",
    material: "100% cotton",
    image: img4,
    description:
      "A rich indigo-dyed kaftan made using traditional adire tie-dye technique. Loose, airy fit perfect for any occasion.",
    sizes: [
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
    ],
  },
  {
    id: 9,
    name: "Burgandy Rose",
    price: "GHS 65",
    category: "Accessories",
    material: "Natural raffia",
    image: img1,
    description:
      "A wide-brimmed sun hat woven from natural raffia by skilled hat-weavers in the Volta region.",
    sizes: [
      { label: "S/M", available: true },
      { label: "L/XL", available: true },
    ],
  },
  {
    id: 10,
    name: "Black Orchid",
    price: "GHS 150",
    category: "Home & Art",
    material: "Fired clay",
    image: img2,
    description:
      "Hand-thrown and painted ceramic pot featuring narrative scenes from Ghanaian folklore.",
    sizes: [],
  },
];

export { products2 };
