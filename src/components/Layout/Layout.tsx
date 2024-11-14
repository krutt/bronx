import { Header } from "./Header";
import { ConnectButton } from "@mysten/dapp-kit";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header
        rightWidget={<ConnectButton />}
        menuItems={[
          { label: "Swap", href: "/", testId: "swap-link" },
          {
            label: "Transaction",
            href: "/transaction",
            testId: "transaction-link",
          },
        ]}
      />
      <Outlet />
    </>
  );
};
