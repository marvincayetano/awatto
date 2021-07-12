import React from "react";
import preconstruction1826 from "../images/preconstruction1826.png";
import preconstruction1826boat from "../images/preconstruction1826boat.png";
import preconstruction1826stone from "../images/preconstruction1826stone.png";
import styled from "styled-components";

interface HistoryParlPreProps {}

export const HistoryPre: React.FC<HistoryParlPreProps> = ({}) => {
  return (
    <div className="h-full flex items-center pl-5">
      <div className="relative top-0 left-20">
        <img
          className="relative top-0 left-0 rounded"
          src={preconstruction1826}
          alt="Pre construction 1826"
        />
        <History__boat
          className="transition delay-75 absolute top-0 left-0"
          src={preconstruction1826boat}
        />
        <History__stone
          className="absolute bottom-0 right-0"
          src={preconstruction1826stone}
        />
      </div>
      <Center__desc className="absolute top-1/2 left-2/3 flex-col bg-gray-600 bg-opacity-30 p-5 rounded">
        <p className="text-2xl font-medium text-gray-100 pb-4">
          Pre Construction, 1826-1858
        </p>
        <p className="text-lg text-gray-200 text pb-5">
          In 1826, Lieutenant-Colonel John By of the Royal Engineers begins to
          design and build the Rideau Canal. This navigable waterway will
          connect the Ottawa River in the north with Lake Ontario in the south.
          It will provide a secure shipping route between Montréal, Quebec, and
          Kingston, Ontario. The northern post of the canal is named Bytown.
        </p>
        <p className="text-lg text-gray-200 text pb-5">
          On January 1, 1855, Bytown officially incorporates as a city and
          rename­d Ottawa. With a population of almost 7,800, the city borders
          English and French Canada. Just 14 years earlier, Upper and Lower
          Canada joined to become the United Province of Canada.
        </p>
        <p className="text-lg text-gray-200 text">
          On December 31, 1857, Queen Victoria is asked to select a location for
          the permanent capital of the United Province of Canada. ­­At the time,
          the capital alternated between Toronto and Québec every four years.
          The Queen selects Ottawa because it sits far from the American border
          and it is situated on a cliff, making it easier to defend from a
          possible attack.
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
  transform: translate(-35%, -50%);
`;
