import React from "react";
import { NavDropdown } from "./NavDropdown";
import { MenuInterface, NavType, NAV_MENU } from "./utils";

interface NavMenuProps {
  type: string;
}

// History is default
// but it can be changed by clicking the other buttons
export const NavMenu: React.FC<NavMenuProps> = ({ type = "history" }) => {
  return (
    <div className="flex">
      {(NAV_MENU[type as NavType] as MenuInterface[]).map((menu) => (
        <NavDropdown category={{ label: menu.label }} />
      ))}
    </div>
  );
};
