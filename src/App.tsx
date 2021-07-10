import React from "react";
import Parl from "./components/Parl";
import Nav from "./components/Nav";
import Overlay from "./components/Overlay";

function App() {
  return (
    <div className="relative h-screen h-width bg-gradient-to-b from-blue-900 to-blue-500">
      <Nav />
      <Overlay />
      <Parl />
    </div>
  );
}

export default App;
