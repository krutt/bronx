import { Flex, Box, Heading } from "@radix-ui/themes";
import { ConnectButton } from "@mysten/dapp-kit";
import styles from "./LayoutHeader.module.css";

export const LayoutHeader = () => (
  <Flex
    asChild
    align="center"
    justify="between"
    width="100%"
    px="4"
    py="2"
    position="sticky"
    className={styles.root}
  >
    <header>
      <div className={styles.themeMobileActions}>
        {/* <ButtonToggleTheme /> */}
        {/* <ThemeColorMenu /> */}
      </div>
      <Box>
        <Heading>Bronx</Heading>
      </Box>
      {/* <AppLogo className={styles.logo} /> */}

      <div className={styles.desktopContent}>
        {/* <NavigationDesktop mr="4" /> */}

        <Flex align="center" gap="4">
          {/* <ButtonGithub /> */}
          {/* <AppearancePopover /> */}
          <ConnectButton />
        </Flex>
      </div>

      {/* <LayoutDrawer /> */}
    </header>
  </Flex>
);
