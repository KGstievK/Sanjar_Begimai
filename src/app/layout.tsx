import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import LayoutSide from "@/components/Layout/LayoutSide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Приглашение на свадьбу Санжара и Бегимай | Торжественная церемония",
  description: "Официальное приглашение на свадьбу Санжара и Бегимай. Дата, место и детали мероприятия. Присоединяйтесь к нашему празднику!",
  keywords: [
    "свадьба",
    "приглашение",
    "Санжар",
    "Бегимай",
    "торжество",
    "место проведения",
    "дата свадьбы"
  ],
  openGraph: {
    title: "Приглашение на свадьбу Санжара и Бегимай",
    description: "Мы рады пригласить вас на нашу свадьбу! Дата: [указать дату]. Место: [указать место]",
    url: "https://sanjar-begimai.vercel.app/",
    type: "website",
    locale: "ru_RU",
    siteName: "Свадьба Санжара и Бегимай",
    images: [
      {
        url: "https://sanjar-begimai.vercel.app/images/wedding-og.jpg", // Лучше использовать абсолютный путь
        width: 1200,
        height: 630,
        alt: "Санжар и Бегимай приглашают на свадьбу",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Приглашение на свадьбу Санжара и Бегимай",
    description: "Мы рады пригласить вас на нашу свадьбу!",
    images: ["https://sanjar-begimai.vercel.app/images/wedding-twitter.jpg"],
  },
  alternates: {
    canonical: "https://sanjar-begimai.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutSide>{children}</LayoutSide>
      </body>
    </html>
  );
}
