import React from "react";
import preconstruction1826 from "../images/preconstruction1826.png";
import preconstruction1826boat from "../images/preconstruction1826boat.png";
import preconstruction1826stone from "../images/preconstruction1826stone.png";
import styled from "styled-components";

interface HistoryProps {}

export const History: React.FC<HistoryProps> = ({}) => {
  return (
    <div className="h-full flex items-center pr-5 pl-5">
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
      <Center__desc className="absolute top-1/2 left-1/2 flex-col">
        <p className="text-2xl font-medium text-yellow-600 pb-4">
          Pre Construction, 1826-1858
        </p>
        <p className="text-lg text-yellow-500 text">
          In 1826, Lieutenant-Colonel John By of the Royal Engineers begins to
          design and build the Rideau Canal. This navigable waterway will
          connect the Ottawa River in the north with Lake Ontario in the south.
          It will provide a secure shipping route between Montréal, Quebec, and
          Kingston, Ontario. The northern post of the canal is named Bytown.
        </p>
      </Center__desc>
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

const Center__desc = styled.div`
  transform: translate(-50%, -50%);
`;
