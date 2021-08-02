import React, { useState } from "react";
import {
  faSun,
  faSnowflake,
  faLeaf,
  faHistory,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";
import NavIcon from "./NavIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavMenu } from "./NavMenu";
import { NavType } from "./utils";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  const [currentType, setCurrentType] = useState<NavType>(NavType.history);

  return (
    <div className="h-16 inline-flex w-full justify-between items-center pr-6 pl-6 fixed">
      <a href="">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-red-600">
          Ottawa
        </h1>
      </a>
      <NavMenu type={currentType} />
      <div className="flex h-auto">
        <FontAwesomeIcon
          className="mr-10 hover: cursor-pointer"
          color="gray"
          icon={faHistory}
          size="lg"
          onClick={() => {
            setCurrentType(NavType.history);
          }}
        />
        <NavIcon icon={faSun} type={NavType.summer} setType={setCurrentType} />
        <NavIcon
          icon={faCloudShowersHeavy}
          type={NavType.fall}
          setType={setCurrentType}
        />
        <NavIcon
          icon={faSnowflake}
          type={NavType.winter}
          setType={setCurrentType}
        />
        <NavIcon icon={faLeaf} type={NavType.spring} setType={setCurrentType} />
      </div>
    </div>
  );
};
