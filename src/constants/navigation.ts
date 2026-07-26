export type NavItem = {
  name: string;
  href: string;
  icon?: string;
  external?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Texts", href: "/texts" },
  { name: "Contact", href: "/contact" },
];

export const footerNavItems = navItems;

/** Pages that exist but are not in the nav, linked only from the footer. */
export const legalNavItems: NavItem[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Imprint (Impressum)", href: "/impressum" },
];

export const socialLinks: NavItem[] = [
  { name: "GitHub", href: "https://github.com/your-username", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/your-username",
    icon: "linkedin",
  },
];
