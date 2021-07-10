import React from "react";
import {
  faSun,
  faSnowflake,
  faLeaf,
  faHistory,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";
import NavIcon from "./NavIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <div className="h-16 inline-flex w-full justify-between items-center pr-6 pl-6">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
        Ottawa
      </h1>
      <div className="flex h-auto">
        <FontAwesomeIcon
          className="mr-10"
          color="gray"
          icon={faHistory}
          size="lg"
        />
        <NavIcon icon={faSun} />
        <NavIcon icon={faCloudShowersHeavy} />
        <NavIcon icon={faSnowflake} />
        <NavIcon icon={faLeaf} />
      </div>
    </div>
  );
};
