import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savory Circle",
  description: "Where culinary creativity comes to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
