import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { darkTheme } from "./components/themes";

/* SUI dApp Components */
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";
import App from "./App.tsx";
import { networkConfig } from "./utils/networkConfig";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme
      appearance="dark"
      accentColor="indigo"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
          <WalletProvider theme={darkTheme}>
            <App />
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </Theme>
  </StrictMode>
);
