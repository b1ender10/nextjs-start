export interface MenuItemProps {
  title: string;
  links: string[];
}

export interface FooterProps {
  description: string;
  logoSrc: string;
  menuItems: MenuItemProps[];
}
