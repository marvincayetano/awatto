import React, { useState } from "react";
import { MenuInterface } from "./utils";

interface NavDropdownProps {
  category: MenuInterface;
  menuArr?: MenuInterface[];
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  category,
  menuArr,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left mr-5">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:text-transparent bg-clip-text bg-gradient-to-br from-white to-red-600"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onMouseEnter={() => setIsOpen(!isOpen)}
        >
          {category.label}
        </button>
      </div>

      {isOpen && menuArr && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-1" role="none">
            {menuArr?.map((menu) => (
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-2"
                key={menu.label}
              >
                {menu.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
