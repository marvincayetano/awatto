import React from "react";
import { NavDropdown } from "./NavDropdown";
import { MenuInterface, NavType, NAV_MENU } from "./utils";

interface NavMenuProps {
  type: string;
}

// History is default
// but it can be changed by clicking the other buttons
export const NavMenu: React.FC<NavMenuProps> = ({ type }) => {
  return (
    <div className="flex">
      {(NAV_MENU[type as NavType] as MenuInterface[]).map((menu) => (
        <NavDropdown
          key={menu.label}
          category={{ label: menu.label }}
          menuArr={menu.menuArr}
        />
      ))}

      <NavDropdown category={{ label: "Food" }} />

      <NavDropdown
        category={{ label: "Best of Ottawa" }}
        menuArr={[{ label: "Best Shawarma" }]}
      />

      <NavDropdown
        category={{ label: "Where to" }}
        menuArr={[
          { label: "Rideau Canal" },
          { label: "ByWard Market" },
          { label: "Parliament Hill" },
          { label: "Gatineau Park" },
        ]}
      />
    </div>
  );
};
