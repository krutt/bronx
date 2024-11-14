/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex } from "@radix-ui/themes";
import Menu from "./Menu";
import styles from "./header.module.css";
import { Logo } from "./Logo";

type Props = {
  rightWidget: any;
  menuItems: { label: string; href: string; testId: string }[];
};

export const Header = ({ rightWidget, menuItems }: Props) => {
  return (
    <header className="sticky top-0 z-40 w-full shadow">
      <nav className="flex w-full items-center justify-between gap-3 pb-3 pl-4 pr-4 pt-3">
        <Logo />
        <Menu menuItems={menuItems} />
        <div className="text-right">{rightWidget}</div>
      </nav>
    </header>
    // <Flex
    //   asChild
    //   align="center"
    //   justify="between"
    //   width="100%"
    //   px="4"
    //   py="2"
    //   position="sticky"
    //   className={styles.root}
    // >
    //   <header>
    //     <Logo />
    //     <Menu menuItems={menuItems} />
    //     <div className="text-right">{rightWidget}</div>
    //   </header>
    // </Flex>
  );
};
