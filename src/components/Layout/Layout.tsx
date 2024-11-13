import { Box, Flex } from "@radix-ui/themes";
import { LayoutHeader } from "./LayoutHeader";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <Flex align="center" direction="column">
    <Box width="100%" pt="8">
      <LayoutHeader />
      <Outlet />
    </Box>
  </Flex>
);
