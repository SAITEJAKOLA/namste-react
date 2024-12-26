import { NavItems } from "./NavItems";
import { Logo } from "./Logo.js";
/**
 * Header Component
 */
export const Header = () => (
  <div className="header">
    <Logo />
    <NavItems items={["Home", "About", "Contact", "Cart"]} />
  </div>
);
