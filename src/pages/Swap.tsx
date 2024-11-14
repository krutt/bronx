import { useCurrentAccount, ConnectButton } from "@mysten/dapp-kit";
import { Box, Card, TextField, Flex, Select } from "@radix-ui/themes";
import { Container } from "../components/elements/Container";
import { useState } from "react";
import BitcoinLogo from "./../assets/bitcoin-btc-logo.svg";
import LNBitcoinLogo from "./../assets/icon_lightning.svg";
import SuiLogo from "./../assets/sui-sui-logo.svg";
import SolLogo from "./../assets/solana-sol-logo.svg";
import { UpdateIcon } from "@radix-ui/react-icons";

interface CryptoAsset {
  label: string;
  icon: JSX.Element;
}

interface CryptoData {
  [key: string]: CryptoAsset;
}

const sourceData: CryptoData = {
  btc: {
    label: "BTC",
    icon: <img src={BitcoinLogo} alt="BTC" className="w-5 h-5" />,
  },
  ln_btc: {
    label: "LN-BTC",
    icon: <img src={LNBitcoinLogo} alt="LN-BTC" className="w-6 h-6" />,
  },
};

const targetData: CryptoData = {
  sui: {
    label: "SUI",
    icon: <img src={SuiLogo} alt="SUI" className="w-5 h-5" />,
  },
  sol: {
    label: "SOL",
    icon: <img src={SolLogo} alt="SOL" className="w-6 h-6" />,
  },
};

type SourceCurrency = keyof typeof sourceData;
type TargetCurrency = keyof typeof targetData;

export const Swap = () => {
  const account = useCurrentAccount();
  const [targetValue, setTargetValue] = useState<TargetCurrency>("sui");
  const [sourceValue, setSourceValue] = useState<SourceCurrency>("btc");

  // Mock balances - replace with actual balance fetching logic
  const balances = {
    btc: "1.245",
    ln_btc: "0.5",
    sui: "1000",
    sol: "25.5",
  };

  const renderWalletInfo = () => {
    if (!account) return null;

    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-400">Connected Wallet</span>
          <span className="text-sm text-gray-400">
            Balance: {balances[sourceValue]} {sourceData[sourceValue].label}
          </span>
        </div>
        <div className="text-sm text-gray-500 font-medium">
          {account.address.slice(0, 6)}...{account.address.slice(-4)}
        </div>
      </div>
    );
  };

  const renderAmountInput = () => (
    <Box className="w-7/12">
      <TextField.Root
        placeholder="0.00"
        size="3"
        className="h-14 bg-transparent focus:ring-0 border-none text-lg"
      />
    </Box>
  );

  const renderCurrencySelect = (
    value: string,
    onChange: (value: string) => void,
    data: CryptoData,
    options: { value: string; label: string }[]
  ) => (
    <Box className="w-5/12">
      <Select.Root value={value} onValueChange={onChange} size="3">
        <Select.Trigger className="w-full h-14 bg-white/5 border-none focus:ring-0 hover:bg-white/10 transition-colors">
          <Flex align="center" gap="2" className="px-3">
            {data[value].icon}
            <span className="font-medium text-lg min-w-[80px]">
              {data[value].label}
            </span>
          </Flex>
        </Select.Trigger>
        <Select.Content
          position="popper"
          className="bg-slate-800/90 backdrop-blur-md min-w-[140px]"
        >
          {options.map((option) => (
            <Select.Item
              key={option.value}
              value={option.value}
              className="text-gray-100 hover:bg-white/10 transition-colors focus:bg-white/10"
            >
              <Flex align="center" gap="2" className="px-2">
                {data[option.value].icon}
                <span className="font-medium">{option.label}</span>
              </Flex>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Box>
  );

  const renderWalletBackdrop = () => (
    <div className="absolute inset-0 bg-black/20 backdrop-blur-md rounded-xl flex items-center justify-center">
      <div className="bg-slate-800/90 backdrop-blur-md rounded-xl p-8 shadow-lg max-w-sm w-full mx-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-white">Connect Wallet</h3>
          <p className="text-sm text-gray-400 mt-2">
            Please connect your wallet to access the swap feature
          </p>
        </div>
        <div className="flex justify-center">
          <ConnectButton className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors font-medium" />
        </div>
      </div>
    </div>
  );

  const sourceOptions = [
    { value: "btc", label: "BTC" },
    { value: "ln_btc", label: "LN-BTC" },
  ];

  const targetOptions = [
    { value: "sui", label: "SUI" },
    { value: "sol", label: "SOL" },
  ];

  return (
    <Container data-testid="swap-page" maxWidth="1" className="min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="py-8" />

        <div className="flex justify-center">
          <Box className="w-full max-w-[520px] relative">
            <Card className="bg-slate-800/90 backdrop-blur-md text-white rounded-xl p-6">
              <div className="space-y-6">
                {renderWalletInfo()}

                <div>
                  <p className="text-gray-400 mb-2">You pay</p>
                  <div className="rounded-xl bg-black/20 p-4 backdrop-blur-md">
                    <Flex gap="3" justify="between">
                      {renderAmountInput()}
                      {renderCurrencySelect(
                        sourceValue,
                        setSourceValue,
                        sourceData,
                        sourceOptions
                      )}
                    </Flex>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-white/5 hover:bg-white/10 p-3 rounded-xl cursor-pointer transition-colors">
                    <UpdateIcon className="w-6 h-6 text-white rotate-180" />
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">You receive</p>
                  <div className="rounded-xl bg-black/20 p-4 backdrop-blur-md">
                    <Flex gap="3" justify="between">
                      {renderAmountInput()}
                      {renderCurrencySelect(
                        targetValue,
                        setTargetValue,
                        targetData,
                        targetOptions
                      )}
                    </Flex>
                  </div>
                </div>
              </div>
            </Card>
            {!account && renderWalletBackdrop()}
          </Box>
        </div>
      </div>
    </Container>
  )
}
