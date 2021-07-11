import React from "react";
import Parl from "./components/Parl";
import Nav from "./components/Nav";
import Overlay from "./components/Overlay";
import History from "./components/History";

function App() {
  return (
    <div className="relative h-screen h-width bg-gradient-to-b from-black to-gray-700">
      <Nav />
      {/* <Overlay /> */}
      {/* <Parl /> */}
      <History />
    </div>
  );
}

export default App;
