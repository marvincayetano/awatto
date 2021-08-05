import React from "react";
import { FoodNav } from "./FoodNav";

interface FoodProps {}

export function Food({}: FoodProps) {
  return (
    <div className="flex w-full">
      <div className="flex w-1/2 justify-start">
        <FoodNav />
        <FoodNav />
      </div>
    </div>
  );
}
