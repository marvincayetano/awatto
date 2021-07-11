import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavType } from "./utils";

interface NavIconProps {
  icon: IconDefinition;
  type: NavType;
  setType: Function;
}

const NavIcon: React.FC<NavIconProps> = ({ icon, type, setType }) => {
  return (
    <FontAwesomeIcon
      className="mr-6 hover:to-blue-500 cursor-pointer"
      color="white"
      icon={icon}
      size="lg"
      onClick={() => setType(type)}
    />
  );
};

export default NavIcon;
