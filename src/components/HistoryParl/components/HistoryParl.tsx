import React from "react";
import parl20th from "../images/parl20th.png";
import parl20thparl from "../images/parl20thparl.png";
import styled from "styled-components";

interface HistoryParlProps {}

export const HistoryParl: React.FC<HistoryParlProps> = ({}) => {
  return (
    <div className="h-full flex items-center pl-5">
      <div className="relative top-0 left-20">
        <img
          className="relative top-0 left-0 rounded"
          src={parl20th}
          alt="Pre construction 1826"
        />
        <History__parl
          className="transition delay-75 absolute top-0 left-0"
          src={parl20thparl}
        />
      </div>
      <Center__desc className="absolute top-1/2 left-2/3 flex-col bg-gray-600 bg-opacity-80 p-5 rounded">
        <p className="text-2xl font-medium text-gray-100 pb-4">
          Parliament through the 20th century, 1921–2001
        </p>
        <p className="text-lg text-gray-200 text pb-5">
          On July 1, 1927, the 60th anniversary of Confederation and the Diamond
          Jubilee, Governor General Viscount Willingdon dedicates the new Peace
          Tower. He also inaugurates the carillon, whose bells play for the
          first time. Prime Minister William Lyon Mackenzie King previously
          decided that the Peace Tower would be a fitting monument to Canada's
          war dead. In his speech on that day, King broadcasts a moving and
          powerful commitment to peace across Canada.
        </p>
        <p className="text-lg text-gray-200 text pb-5">
          In 1952, an electrical short in the roof of the Library causes a fire.
          The fire nearly destroys the Library and, with it, the memories and
          the archives of a young nation. Firefighters desperately try to reach
          the flames by cutting through the metal roof of the dome and pouring
          water through. Although the fire was extinguished, the Library's
          interior and many of its collections were doused with water. The
          incident sparks a discussion about building a larger, more efficient
          library on the Hill. Public Works even produces new drawings. However,
          none of the designs are deemed worthy and the existing library is
          rehabilitated. A new National Library building (now the home of
          Library and Archives Canada) is built a few years later, west of the
          Hill, to relieve some of the pressure of the old library.
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
      -webkit-transform: scale(1.08);
    }
  }
  @keyframes floatBoat {
    0% {
      bottom: 0px;
      transform: scale(1);
    }
    100% {
      bottom: 90px;
      transform: scale(1.08);
    }
  }
`;

const Center__desc = styled.div`
  transform: translate(-35%, -50%);
`;
