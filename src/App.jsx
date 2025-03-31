import React from "react";
import ButtonDemo from "./components/ButtonDemo";
import DesktopDemo from "./components/DesktopDemo";
import HomeDemo from "./components/HomeDemo";
import FrameDemo from "./components/FrameDemo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <main className="container p-4 flex flex-row space-x-10">
        <ButtonDemo />
        <DesktopDemo />
        <HomeDemo />
        <FrameDemo />
      </main>
    </div>
  );
}

export default App;
