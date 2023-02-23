import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <About />
      </main>
    </>
  );
};

export default App;
