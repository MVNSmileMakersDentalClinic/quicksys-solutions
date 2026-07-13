export const siteConfig = {
  name: "Quicksys Solutions",
  legalName: "Quicksys Solutions (OPC) Private Limited",
  tagline: "Cooling & Climate Solutions for Every Space",
  description:
    "Quicksys Solutions is a Patna-based manufacturer and supplier of split, cassette, ducted, tower, and VRV air conditioning systems, plus industrial ventilation solutions.",
  url: "https://quicksyssolutions.vercel.app",
  phone: "8047805988",
  phoneDisplay: "+91 80478 05988",
  email: "hello@quicksyssolutions.com",
  whatsapp: "918047805988",
  established: "2018",
  location: "Patna, Bihar",
  address: "Patna, Bihar, India",
  employees: "Upto 10 People",
  nature: "Manufacturer, Wholesaler & Trader",
  contactPerson: "S Saurabh",
  contactRole: "Business Head",
  rating: "4.7",
  bank: "IndusInd Bank",
  logo: "/images/qs_logo.jpeg",
  nameImage: "/images/name.jpeg",
  social: {
    facebook:
      "https://www.facebook.com/p/Quicksys-Solutions-Pvt-Ltd-100063633563321/",
    linkedin:
      "https://www.linkedin.com/company/quicksys-solutions-pvt-ltd/?originalSubdomain=in",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const products = [
  {
    id: "split-ac",
    title: "Split Air Conditioners",
    summary:
      "Energy-efficient wall-mounted split ACs for homes, offices, and retail spaces.",
    image: "/products/split-ac.jpg",
    highlights: [
      "Inverter & non-inverter options",
      "Quiet cooling performance",
      "Ideal for rooms and cabins",
      "Trusted brand models",
    ],
  },
  {
    id: "cassette-ac",
    title: "Cassette Air Conditioners",
    summary:
      "Ceiling cassette units designed for even airflow across larger indoor areas.",
    image: "/products/cassette-ac.jpg",
    highlights: [
      "4-way / one-way cassette options",
      "Uniform temperature distribution",
      "Suits showrooms and offices",
      "Compact ceiling installation",
    ],
  },
  {
    id: "ducted-ac",
    title: "Ducted Air Conditioners",
    summary:
      "Concealed ductable systems for multi-room and commercial cooling projects.",
    image: "/products/ducted-ac.jpg",
    highlights: [
      "Hidden installation",
      "Centralized cooling control",
      "Strong for large floor plates",
      "Reliable commercial duty",
    ],
  },
  {
    id: "vrv-system",
    title: "VRV / VRF Systems",
    summary:
      "Advanced VRV/VRF solutions for scalable multi-zone climate control.",
    image: "/products/vrv-system.jpg",
    highlights: [
      "Multi-indoor connectivity",
      "Zone-wise temperature control",
      "High energy efficiency",
      "Built for modern buildings",
    ],
  },
  {
    id: "tower-ac",
    title: "Tower Air Conditioners",
    summary:
      "Floor-standing tower ACs for halls, shops, and high-occupancy spaces.",
    image: "/products/tower-ac.jpg",
    highlights: [
      "High cooling capacity",
      "Fast temperature drop",
      "Easy floor placement",
      "Commercial & event use",
    ],
  },
  {
    id: "ventilation",
    title: "Ventilation & Coolers",
    summary:
      "Industrial ventilation systems and evaporative coolers for factories and warehouses.",
    image: "/products/split-ac.jpg",
    highlights: [
      "Fresh-air ventilation",
      "Industrial evaporative coolers",
      "Warehouse & plant applications",
      "Rugged outdoor performance",
    ],
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: "Company" | "Events";
  image: string;
  description?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "event-1",
    title: "Company Event",
    category: "Events",
    image: "/gallery/events/event-1.jpg",
    description: "Quicksys Solutions at a company event.",
  },
  {
    id: "event-2",
    title: "Team Gathering",
    category: "Events",
    image: "/gallery/events/event-2.jpg",
    description: "Moments from our team and client gatherings.",
  },
];

export const whyUs = [
  {
    title: "Established since 2018",
    text: "Serving Patna and Bihar with practical cooling solutions for residential and commercial needs.",
  },
  {
    title: "Wide product range",
    text: "From split ACs to VRV systems and industrial ventilation — one partner for multiple applications.",
  },
  {
    title: "Project-ready support",
    text: "Guidance on selection, installation readiness, and product recommendations for your site.",
  },
  {
    title: "Trusted response",
    text: "Strong IndiaMART presence with verified business profile and responsive business communication.",
  },
];
