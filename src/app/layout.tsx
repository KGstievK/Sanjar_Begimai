import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Приглашение на Свадьбу",
  description: "Кайрат и Нестан",
  openGraph: {
    title: "Приглашение на Свадьбу",
    description: "Кайрат и Нестан",
    images: [
      {
        url: "./Union4.png", // Абсолютный URL к вашему изображению
        width: 1200, // Оптимальные размеры
        height: 630,
        alt: "Приглашение на Свадьбу",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Приглашение на Свадьбу",
    description: "Кайрат и Нестан",
    images: ["./Union4.png"], // Абсолютный URL к вашему изображению
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
