import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AQUARIM — рыбный ресторан",
  description:
    "Рыбный ресторан AQUARIM. Свежая рыба из наших аквариумов и доставка.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="min-h-screen bg-[#011845] font-gilroy text-[#E8EDFF] antialiased">
        {children}
      </body>
    </html>
  );
}
