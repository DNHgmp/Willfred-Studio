export const categories = [
  "Todos",
  "Eventos",
  "Quinceañeras",
  "Bodas",
  "Fotografía Moderna",
  "Estudio",
] as const;

export type Category = (typeof categories)[number];
export type ProjectCategory = Exclude<Category, "Todos">;

export type Project = {
  title: string;
  category: ProjectCategory;
  year: string;
  image: string;
  alt: string;
  ratio: string;
};

export const projects: Project[] = [
  {
    title: "Una noche para recordar",
    category: "Eventos",
    year: "2025",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1100&q=85",
    alt: "Celebración elegante iluminada con velas y luces cálidas",
    ratio: "4 / 5",
  },
  {
    title: "Valentina, XV años",
    category: "Quinceañeras",
    year: "2025",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    alt: "Retrato editorial de una joven en luz natural",
    ratio: "4 / 5",
  },
  {
    title: "Luz de invierno",
    category: "Bodas",
    year: "2024",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=85",
    alt: "Pareja de novios durante una ceremonia al aire libre",
    ratio: "5 / 4",
  },
  {
    title: "Retrato en movimiento",
    category: "Fotografía Moderna",
    year: "2025",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
    alt: "Retrato de moda con composición contemporánea",
    ratio: "3 / 4",
  },
  {
    title: "Entre sombras",
    category: "Estudio",
    year: "2024",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
    alt: "Retrato masculino de estudio con iluminación lateral",
    ratio: "4 / 5",
  },
  {
    title: "El sí de Mariana y Luis",
    category: "Bodas",
    year: "2024",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85",
    alt: "Novios abrazados durante su celebración de boda",
    ratio: "5 / 4",
  },
  {
    title: "Retrato de una celebración",
    category: "Eventos",
    year: "2023",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1100&q=85",
    alt: "Invitados reunidos en un evento bajo una iluminación cálida",
    ratio: "4 / 5",
  },
  {
    title: "La edad de los sueños",
    category: "Quinceañeras",
    year: "2024",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
    alt: "Retrato femenino con fondo suave y luz de tarde",
    ratio: "4 / 5",
  },
  {
    title: "Forma y luz",
    category: "Fotografía Moderna",
    year: "2023",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85",
    alt: "Editorial de moda en exterior con luz natural",
    ratio: "5 / 4",
  },
  {
    title: "Estudio, en calma",
    category: "Estudio",
    year: "2025",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=85",
    alt: "Retrato de estudio con expresión natural y fondo neutro",
    ratio: "3 / 4",
  },
];

export const contactLinks = [
  { label: "WhatsApp", href: "https://wa.me/", icon: "whatsapp" },
  { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com/", icon: "facebook" },
  { label: "TikTok", href: "https://tiktok.com/", icon: "tiktok" },
  { label: "Correo", href: "mailto:hola@willfredstudio.com", icon: "email" },
  { label: "Teléfono", href: "tel:", icon: "phone" },
] as const;