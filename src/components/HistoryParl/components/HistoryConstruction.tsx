import React from "react";
import construction1859 from "../images/construction1859.png";
import construction1859parl from "../images/construction1859parl.png";
import styled from "styled-components";

interface HistoryParlConstructionProps {}

export const History: React.FC<HistoryParlConstructionProps> = ({}) => {
  return (
    <div className="h-full flex items-center pl-5">
      <div className="relative top-0 left-20">
        <img
          className="relative top-0 left-0 rounded"
          src={construction1859}
          alt="Pre construction 1826"
        />
        <History__parl
          className="transition delay-75 absolute top-0 left-0"
          src={construction1859parl}
        />
      </div>
      <Center__desc className="absolute top-1/2 left-2/3 flex-col bg-gray-600 bg-opacity-80 p-5 rounded">
        <p className="text-2xl font-medium text-gray-100 pb-4">
          Construction and expansion, 1859–1916
        </p>
        <p className="text-lg text-gray-200 text pb-5">
          On December 20, 1859, ground is broken for the new Parliament
          Buildings. The first stones—local Nepean sandstone—are laid in the
          spring of the following year. Red sandstone and Ohio freestone as well
          as grey and green slates for the roofs will be used.
        </p>
        <p className="text-lg text-gray-200 text pb-5">
          On September 1, 1860, Edward VII, then Prince of Wales, arrives in
          Ottawa amid pomp and ceremony to lay the cornerstone of the new
          legislature. The cornerstone is made of white marble and inscribed
          with the names of the designers and dignitaries.
        </p>
        <p className="text-lg text-gray-200 text">
          In early 1861, Public Works reports that the project has cost
          two-and-a-half times more than was planned and the project is stopped
          in September. In June 1862, a commission of inquiry investigates the
          project's management problems. Construction resumes the following
          year.
        </p>
      </Center__desc>
    </div>
  );
};

const History__parl = styled.img`
  -webkit-animation: floatBoat 15s forwards ease-out;
  animation: floatBoat 15s forwards ease-out;

  @-webkit-keyframes floatBoat {
    0% {
      bottom: 0px;
      -webkit-transform: scale(1);
    }
    100% {
      bottom: 90px;
      -webkit-transform: scale(1.2);
    }
  }
  @keyframes floatBoat {
    0% {
      bottom: 0px;
      transform: scale(1);
    }
    100% {
      bottom: 90px;
      transform: scale(1.2);
    }
  }
`;

const Center__desc = styled.div`
  transform: translate(-35%, -50%);
`;
