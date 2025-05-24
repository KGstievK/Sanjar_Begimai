import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Приглашение на Свадьбу",
  description: "Санжар Бегимай",
  openGraph: {
    title: "Приглашение на Свадьбу",
    description: "Санжар Бегимай",
    url: "https://sanjar-begimai.vercel.app/",
    type: "website",
    images: [
      {
        url: "/public/Logo.svg",
        width: 60,
        height: 60,
        alt: "Приглашение на Свадьбу",
      },
    ],
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
