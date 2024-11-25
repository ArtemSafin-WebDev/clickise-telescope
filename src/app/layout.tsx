import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

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
  title: "Clickise - Telescope",
  description: "Clickise - Telescope",
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
      </body>
    </html>
  );
}
