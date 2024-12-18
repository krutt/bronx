import Menu from './Menu'
// import styles from "./Header.module.css";
import { Logo } from './Logo'

type Props = {
  rightWidget: JSX.Element
  menuItems: { label: string; href: string; testId: string }[]
}

export const Header = ({ rightWidget, menuItems }: Props) => {
  return (
    <header
      className={
        'sticky top-0 left-0 z-1003 w-full h-[var(--layout-header-height)] bg-white/20 shadow ring-1 ring-black/5'
      }
    >
      <nav className="flex w-full items-center justify-between gap-3 pb-3 pl-4 pr-4 pt-3">
        <Logo />
        <Menu menuItems={menuItems} />
        <div className="text-right">{rightWidget}</div>
      </nav>
    </header>
  )
}
