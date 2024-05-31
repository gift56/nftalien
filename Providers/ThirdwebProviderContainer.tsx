"use client";
import { ReactNode } from "react";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  embeddedWallet,
  phantomWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";

const activeChain = "polygon";

const ThirdwebProviderContainer = ({ children }: { children: ReactNode }) => {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
        embeddedWallet(),
        phantomWallet(),
        rainbowWallet(),
      ]}
    >
      {children}
    </ThirdwebProvider>
  );
};

export default ThirdwebProviderContainer;
