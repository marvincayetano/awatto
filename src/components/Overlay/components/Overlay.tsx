import React from "react";

interface OverlayProps {}

export const Overlay: React.FC<OverlayProps> = ({}) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 opacity-50 z-10" />
  );
};
