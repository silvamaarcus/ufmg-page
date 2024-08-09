import type { Metadata } from "next";
import { Lexend, Public_Sans } from "next/font/google";
import "./styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

// Lexend
const lexendFontFamily = Lexend({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-family-titles",
});

// Public_Sans
const publicSansFontFamily = Public_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-family-body",
});

export const metadata: Metadata = {
  title: "UFMG Page | Eventos",
  description: "Página de eventos para UFMG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${lexendFontFamily.variable} ${publicSansFontFamily.variable} `}
    >
      <body>
        <NextUIProvider>
          <Header />
          <Menu />
          {children}
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}
