import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
      </main>
    </div>
  );
};

export default App;
