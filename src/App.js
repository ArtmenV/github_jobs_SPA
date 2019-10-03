import React from "react";
import { RootRoutes } from "./routes";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <RootRoutes />
    </div>
  );
}

export default App;
