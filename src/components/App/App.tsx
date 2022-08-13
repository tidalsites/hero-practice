import { FC } from "react";
import "./App.scss";

// Components
import { Hero } from "../Hero/Hero";
import { Navbar } from "../Navbar/Navbar";
import { About } from "../About/About";

export const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};
