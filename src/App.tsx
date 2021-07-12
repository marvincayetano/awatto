import React from "react";
import Parl from "./components/Parl";
import Nav from "./components/Nav";
import Overlay from "./components/Overlay";
import HistoryParl from "./components/HistoryParl";

function App() {
  return (
    <div className="relative h-screen h-width bg-gradient-to-b from-black to-gray-700">
      <Nav />
      {/* <Overlay /> */}
      {/* <Parl /> */}
      <HistoryParl />
    </div>
  );
}

export default App;
