import { ThemeVars } from "@mysten/dapp-kit";

// Dark theme derived from light theme
export const darkTheme: ThemeVars = {
  blurs: {
    modalOverlay: "blur(2px)",
  },
  backgroundColors: {
    primaryButton: "#2B2D31",
    primaryButtonHover: "#33363B",
    outlineButtonHover: "#3A3C41",
    modalOverlay: "rgba(0, 0, 0, 0.8)",
    modalPrimary: "#1E1F21",
    modalSecondary: "#2A2B2D",
    iconButton: "transparent",
    iconButtonHover: "#3A3C3F",
    dropdownMenu: "#2B2D31",
    dropdownMenuSeparator: "#45484D",
    walletItemSelected: "#33363B",
    walletItemHover: "#3C424226",
  },
  borderColors: {
    outlineButton: "#5C5F66",
  },
  colors: {
    primaryButton: "#FFFFFF",
    outlineButton: "#A4A6AA",
    iconButton: "#E4E4E7",
    body: "#F4F4F5",
    bodyMuted: "#A4A6AA",
    bodyDanger: "#FF6B4B",
  },
  radii: {
    small: "6px",
    medium: "8px",
    large: "12px",
    xlarge: "16px",
  },
  shadows: {
    primaryButton: "0px 4px 12px rgba(0, 0, 0, 0.5)",
    walletItemSelected: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    bold: "600",
  },
  fontSizes: {
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
  },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontStyle: "normal",
    lineHeight: "1.3",
    letterSpacing: "1",
  },
};
