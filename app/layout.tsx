import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFTALIEN - EXPLORE NFT COLLECTION",
  description:
    "A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, metaverse-ready, and designed to benefit their holders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
