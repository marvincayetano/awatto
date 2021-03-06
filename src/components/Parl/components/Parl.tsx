import React from "react";
import Overlay from "../../Overlay";
import parliament from "../images/parliament-bw.svg";

interface ParlProps {}

export const Parl: React.FC<ParlProps> = ({}) => {
  return (
    <div className="absolute bottom-0 left-0">
      <img src={parliament} />
    </div>
  );
};
