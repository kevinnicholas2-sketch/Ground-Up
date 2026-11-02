import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ground Up — Coffee in Williamsburg, Brooklyn",
  description:
    "Good coffee. No attitude. Freshly roasted beans and carefully made cups at our one shop in Williamsburg, Brooklyn. (Fictional business — class project.)",
};

export const viewport: Viewport = {
  themeColor: "#F4ECDF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- loaded once for the whole app in the root layout */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Instrument+Sans:wght@400..700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
