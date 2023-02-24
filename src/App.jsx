import React from "react";
import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Features />
      </main>
    </>
  );
};

export default App;
