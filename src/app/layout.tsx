import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const ttNorms = localFont({
  src: [
    {
      path: "./fonts/TTNorms-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TTNorms-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--tt-norms",
  display: "swap",
});
const euclidCirclularA = localFont({
  src: [
    {
      path: "./fonts/EuclidCircularA-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/EuclidCircularA-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--euclid-circular-a",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clickise | Бенчмарки за 2024 год",
  description: "Clickise | Бенчмарки за 2024 год",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ttNorms.variable} ${euclidCirclularA.variable}`}>
        <div className="page-main">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Script src="/scripts/metrika.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
