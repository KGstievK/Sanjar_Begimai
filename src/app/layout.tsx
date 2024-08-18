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
        url: "./favicon.svg", // Замените на путь к вашему изображению
        width: 164, // Укажите ширину изображения (необязательно)
        height: 115,  // Укажите высоту изображения (необязательно)
        alt: "Описание изображения", // Замените на альтернативный текст для изображения
      },
    ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image", // Используйте "summary" или "summary_large_image" в зависимости от формата
  //   title: "Приглашение на Свадьбу",
  //   description: "Кайрат и Нестан",
  //   images: ["./favicon.svg"], // Замените на путь к вашему изображению
  // },
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
