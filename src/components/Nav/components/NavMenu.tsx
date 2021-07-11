import React from "react";
import { MenuInterface, NavDropdown } from "./NavDropdown";

enum NavType {
  history = "history",
  summer = "summer",
  fall = "fall",
  winter = "winter",
  spring = "spring",
}

// Different season different set of menus
const NAV_MENU = {
  [NavType.history]: [{ label: "History Resources" }],
  [NavType.summer]: [{}],
  [NavType.fall]: [{}],
  [NavType.winter]: [{}],
  [NavType.spring]: [{}],
};

interface NavMenuProps {
  type: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({ type = "history" }) => {
  console.log(NAV_MENU[type as NavType]);
  return (
    <div className="flex">
      {(NAV_MENU[type as NavType] as MenuInterface[]).map((menu) => (
        <NavDropdown category={{ label: menu.label }} />
      ))}
    </div>
  );
};
