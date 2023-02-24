import React from "react";
import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Tours from "./components/Tours";

const App = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Features />
        <Tours />
      </main>
    </>
  );
};

export default App;
