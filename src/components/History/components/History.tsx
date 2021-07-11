import React from "react";
import preconstruction1826 from "../images/preconstruction1826.png";
import preconstruction1826boat from "../images/preconstruction1826boat.png";
import preconstruction1826stone from "../images/preconstruction1826stone.png";
import styled from "styled-components";

interface HistoryProps {}

export const History: React.FC<HistoryProps> = ({}) => {
  return (
    <div className="h-full flex items-center">
      <div className="relative top-0 left-0">
        <img
          className="relative top-0 left-0"
          src={preconstruction1826}
          alt="Pre construction 1826"
        />
        <History__boat
          className="absolute top-0 left-0"
          src={preconstruction1826boat}
        />
        <History__stone
          className="absolute bottom-0 right-0"
          src={preconstruction1826stone}
        />
      </div>
    </div>
  );
};

const History__boat = styled.img`
  -webkit-animation: floatBoat 15s forwards ease-out;
  animation: floatBoat 15s forwards ease-out;

  @-webkit-keyframes floatBoat {
    0% {
      left: 0px;
      -webkit-transform: scale(1);
    }
    100% {
      left: 160px;
      -webkit-transform: scale(1.5);
    }
  }
  @keyframes floatBoat {
    0% {
      left: 0px;
      transform: scale(1);
    }
    100% {
      left: 160px;
      transform: scale(1.5);
    }
  }
`;

const History__stone = styled.img`
  -webkit-animation: floatStone 15s forwards ease-out;
  animation: floatStone 15s forwards ease-out;

  @-webkit-keyframes floatStone {
    0% {
      right: 0px;
      bottom: 0px;
      -webkit-transform: scale(1);
    }
    100% {
      right: 30px;
      bottom: 10px;
      -webkit-transform: scale(1.2);
    }
  }
  @keyframes floatStone {
    0% {
      right: 0px;
      bottom: 0px;
      transform: scale(1);
    }
    100% {
      right: 30px;
      bottom: 10px;
      transform: scale(1.2);
    }
  }
`;
