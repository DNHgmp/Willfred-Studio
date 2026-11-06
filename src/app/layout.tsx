import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Willfred Studio Photography | Historias que permanecen",
  description:
    "Fotografía de bodas, quinceañeras, eventos y retrato de estudio. Willfred Studio captura historias con una mirada personal y cinematográfica.",
  applicationName: "Willfred Studio Photography",
  openGraph: {
    title: "Willfred Studio Photography",
    description: "Fotografía con una mirada personal y cinematográfica.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}