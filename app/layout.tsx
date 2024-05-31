import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThirdwebProviderContainer from "@/Providers/ThirdwebProviderContainer";

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
      <ThirdwebProviderContainer>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </ThirdwebProviderContainer>
    </html>
  );
}
