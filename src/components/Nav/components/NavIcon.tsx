import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

interface NavIconProps {
  icon: IconDefinition;
}

const NavIcon: React.FC<NavIconProps> = ({ icon }) => {
  return (
    <FontAwesomeIcon
      className="mr-6 hover:to-blue-500"
      color="white"
      icon={icon}
      size="lg"
    />
  );
};

export default NavIcon;
