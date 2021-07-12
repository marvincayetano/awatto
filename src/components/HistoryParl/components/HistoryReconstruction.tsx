import React from "react";
import reconstruction1916 from "../images/reconstruction1916.png";
import reconstruction1916parl from "../images/reconstruction1916parl.png";
import styled from "styled-components";

interface HistoryParlReconstructionProps {}

export const HistoryParlReconstruction: React.FC<HistoryParlReconstructionProps> =
  ({}) => {
    return (
      <div className="h-full flex items-center pl-5">
        <div className="relative top-0 left-20">
          <img
            className="relative top-0 left-0 rounded"
            src={reconstruction1916}
            alt="Pre construction 1826"
          />
          <History__parl
            className="transition delay-75 absolute top-0 left-0"
            src={reconstruction1916parl}
          />
        </div>
        <Center__desc className="absolute top-1/2 left-2/3 flex-col bg-gray-600 bg-opacity-80 p-5 rounded">
          <p className="text-2xl font-medium text-gray-100 pb-4">
            The Fire of 1916
          </p>
          <p className="text-lg text-gray-200 text pb-5">
            At 8:37 p.m. on February 3, 1916, while the House of Commons is
            sitting, a fire starts in the Centre Block of the Parliament
            Buildings.
          </p>
          <p className="text-lg text-gray-200 text pb-5">
            A gentleman in the Reading Room notices something burning and calls
            it to the attention of a clerk, but it is already too late. Within
            minutes, the fire spreads to the corridors.
          </p>
          <p className="text-lg text-gray-200 text">
            Most are able to flee the building, through the heavy smoke, by
            crawling or forming human chains. As the fire intensifies, parts of
            the building start to collapse.
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
      -webkit-transform: scale(1.1);
    }
  }
  @keyframes floatBoat {
    0% {
      bottom: 0px;
      transform: scale(1);
    }
    100% {
      bottom: 90px;
      transform: scale(1.1);
    }
  }
`;

const Center__desc = styled.div`
  transform: translate(-35%, -50%);
`;
