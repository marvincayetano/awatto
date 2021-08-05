import React from "react";
import { FoodList } from "./FoodList";

interface FoodNavProps {}

export function FoodNav({}: FoodNavProps) {
  return (
    <div className="min-h-screen flex items-center justify-center py-6">
      <div className="flex w-full max-w-xs p-4">
        <ul className="flex flex-col w-full">
          <FoodList />
        </ul>
      </div>
    </div>
  );
}
