export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  categorySlug: string;
  comingSoon?: boolean;
  href?: string;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  products: Omit<Product, "category" | "categorySlug">[];
};

export const categories: Category[] = [
  {
    name: "Containers",
    slug: "containers",
    description:
      "Heavy-duty waste containment solutions for residential and industrial buildings. Our containers significantly reduce required waste storage space and optimise garbage capacity across all site types.",
    products: [
      { id: "skip-bins", name: "Skip Bins", href: "/products/skip-bins",
        description:
          "Versatile waste containers designed for efficient transport and storage of municipal and industrial waste. An essential part of waste management across a wide range of industries.",
      },
      {
        id: "press-container",
        name: "Press Container",
        description:
          "Heavy-duty press containers that compress waste fractions to 1/6 of their original volume, significantly reducing required storage space and optimising garbage container capacity.",
        href: "/products/press-compactors",
      },
      {
        id: "hooklift-bins",
        name: "Hooklift Bins",
        description:
          "Roll on/off containers, compactor containers, rubble containers, gravel containers and tailored container solutions for demanding site requirements.",
        href: "/products/hooklift-bins",
      },
      {
        id: "underground-bin-lift",
        name: "Underground Bin Lift",
        description:
          "Coming soon — underground bin lift systems for concealed, space-efficient waste collection in modern urban developments.",
        comingSoon: true,
      },
    ],
  },
  {
    name: "Balers",
    slug: "balers",
    description:
      "Turn waste into a valuable commodity. Properly baled and stored recyclables save space, reduce handling time and generate revenue — making balers a profitable and sustainable waste solution.",
    products: [
      {
        id: "vertical-baler",
        name: "Vertical Baler",
        description:
          "Vertical balers enhance waste recycling systems by optimising waste compression. Baled recyclables save space, reduce handling time and can generate revenue from recovered materials.",
      },
      {
        id: "multi-chamber-baler",
        name: "Multi-Chamber Baler",
        description:
          "Coming soon — multi-chamber balers for simultaneous baling of multiple waste streams, maximising efficiency in high-volume recycling operations.",
        comingSoon: true,
      },
    ],
  },
  {
    name: "Compactors",
    slug: "compactors",
    description:
      "Powerful compaction systems that minimise waste volume and collection frequency, helping businesses lower disposal costs while enhancing sustainability.",
    products: [
      {
        id: "auger-compactor",
        name: "Auger Compactor",
        description:
          "The latest innovation in waste compactors. This chute-fed model features an advanced screw drive system that efficiently shreds waste while breaking down solid objects for high-capacity waste handling.",
      },
      {
        id: "static-compactor",
        name: "Static Compactor",
        description:
          "Hydraulic garbage compactors engineered to maximise waste volume reduction. Compress waste and recyclables more efficiently to lower disposal costs and enhance sustainability.",
      },
      {
        id: "underground-compactor",
        name: "Underground Compactor",
        description:
          "Coming soon — underground compaction systems for concealed, high-efficiency waste processing in residential and mixed-use developments.",
        comingSoon: true,
      },
    ],
  },
  {
    name: "Handling",
    slug: "handling",
    description:
      "Equipment to move, tip and transport waste safely and efficiently across your site. Designed for seamless integration with compactors and waste management systems.",
    products: [
      {
        id: "self-tipping-skips",
        name: "Self-Tipping Skips",
        description:
          "Engineered for versatility and safety, ideal for heavy metal waste, press burrs and abrasive materials such as marble, granite and ceramics. Provides seamless tipping functionality.",
      },
      {
        id: "bin-tipper",
        name: "Bin Tipper",
        description:
          "Compatible with both standard and custom bins, bin tippers integrate effortlessly with mobile or static compactors or function as standalone units for efficient waste bin emptying.",
      },
      {
        id: "trash-containers",
        name: "Trash Containers",
        description:
          "Built for easy maneuverability with ergonomic handlebars and heavy-duty caster wheels. Facilitates source segregation of tins, glass, paper, cardboard and organic waste.",
      },
      {
        id: "rolltainers",
        name: "Rolltainers",
        description:
          "Heavy-duty stainless steel rolltainers for seamless laundry collection from laundry chutes. Prevents manual strain on staff and maximises efficiency in waste and linen handling.",
      },
    ],
  },
  {
    name: "Chutes",
    slug: "chutes",
    description:
      "Designed and manufactured chute systems for waste, laundry and recycling in multi-storey buildings. Smell-proof, safe and built to the most exacting specifications.",
    products: [
      {
        id: "garbage-chute",
        name: "Garbage Chute",
        href: "/products/garbage-chute",
        description:
          "Building and apartment garbage chute systems that ensure seamless disposal. Smell-proof chutes enhance efficiency, safety and hygiene across residential and commercial developments.",
      },
      {
        id: "laundry-chute",
        name: "Laundry Chute",
        href: "/products/laundry-chute",
        description:
          "Clothes chute and laundry chute systems for efficient linen disposal in luxury hotels and private villas. Custom laundry chute solutions with tailored designs available.",
      },
      {
        id: "recycling-chute",
        name: "Recycling Chute",
        description:
          "Apartment and building recycling chutes that optimise waste management by saving space and reducing handling costs. Waste is efficiently sorted and processed at source.",
      },
      {
        id: "pneumatic-chute",
        name: "Pneumatic Chute",
        description:
          "Pneumatic waste systems using air pressure to transport segregated waste horizontally into closed containers. Automated, hygienic and ideal for high-density urban developments.",
      },
      {
        id: "construction-chute",
        name: "Construction Chute",
        description:
          "Metal debris chutes that set the new standard for construction waste disposal, offering enhanced durability far beyond typical plastic chutes for high-rise building sites.",
      },
    ],
  },
  {
    name: "Garbage Room",
    slug: "garbage-room",
    description:
      "Integrated garbage room systems to organise, compact and manage waste at building level. Reduce labour, minimise trolley requirements and maintain a clean, efficient waste room.",
    products: [
      {
        id: "bin-feed-press",
        name: "Bin Feed Press",
        description:
          "The ultimate solution for reducing frequent bin replacements. Automatic waste bin cycling means staff only intervene once all bins are fully pressed — optimising space and minimising labour.",
      },
      {
        id: "bin-carousel",
        name: "Bin Carousel",
        description:
          "Automatic bin carousel that simplifies waste bin rotation and minimises manual labour. Allows staff to focus on more critical tasks while maintaining a cleaner, safer garbage room.",
      },
      {
        id: "chute-compactor",
        name: "Chute Compactor",
        description:
          "Leakproof chute-fed compactor with a 10:1 compaction ratio. Minimises storage space for household waste and reduces the need for extra trolleys and operators — delivering significant time and cost savings.",
      },
    ],
  },
  {
    name: "Odour Solutions",
    slug: "odour-solutions",
    description:
      "Professional-grade odour control and purification systems to keep waste areas clean, hygienic and odour-free. Essential for high-end residential and hospitality environments.",
    products: [
      {
        id: "trash-bin-washer",
        name: "Trash Bin Washer",
        description:
          "Automatic trash bin washer designed to enhance waste room odour control and garbage room hygiene. Delivers a pristine clean that transforms waste containers and the environment they reside in.",
      },
      {
        id: "scent-diffuser",
        name: "Scent Diffuser",
        description:
          "Innovative scent diffusers that release odour solutions into the air via chute door airflow. Provides a consistent and refreshing fragrance for a more pleasant waste room experience.",
      },
      {
        id: "uv-ozone-plasma",
        name: "UV-C / Ozone / Plasma",
        description:
          "Advanced UV ozone odour control and plasma purification technology that neutralises odours and airborne contaminants, ensuring a safer and healthier waste disposal environment.",
      },
    ],
  },
];

/** Flat list of all products with category metadata attached */
export const allProducts: Product[] = categories.flatMap((cat) =>
  cat.products.map((p) => ({
    ...p,
    category: cat.name,
    categorySlug: cat.slug,
  }))
);

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}
