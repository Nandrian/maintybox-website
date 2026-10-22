interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: { link: string; title: string }[];
}

// Menu allégé : uniquement les pages conservées pour MaintyBox.
const menu_data: MenuItem[] = [
  { id: 1, title: "Accueil", link: "/", has_dropdown: false },
  { id: 2, title: "Portfolio", link: "/portfolio-two-columns", has_dropdown: false },
  { id: 3, title: "Services", link: "/service", has_dropdown: false },
  { id: 4, title: "À propos", link: "/about", has_dropdown: false },
  { id: 5, title: "Contact", link: "/contact", has_dropdown: false },
];

export default menu_data;
