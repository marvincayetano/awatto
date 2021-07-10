import React from "react";
import {
  faSun,
  faSnowflake,
  faLeaf,
  faCloudShowersHeavy,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import NavIcon from "./NavIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <div className="h-16 inline-flex w-full justify-end items-center pr-5">
      <div className="flex h-auto">
        <FontAwesomeIcon
          className="mr-10"
          color="gray"
          icon={faHistory}
          size="2x"
        />
        <NavIcon icon={faSun} />
        <NavIcon icon={faLeaf} />
        <NavIcon icon={faSnowflake} />
        <NavIcon icon={faCloudShowersHeavy} />
      </div>
    </div>
  );
};
