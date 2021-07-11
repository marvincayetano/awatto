import React, { useState } from "react";

export interface MenuInterface {
  label: string;
  url?: string;
}

interface NavDropdownProps {
  category: MenuInterface;
  menuArr?: [MenuInterface];
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  category,
  menuArr = [{ label: "bubumu", url: "bubumodotcom" }],
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
          {menuArr && (
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          )}
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
