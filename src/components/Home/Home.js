import React from "react";
import About from "./About/About";
import Cover from "./Cover/Cover";
import Education from "./Education/Education";

const Home = () => {
  return (
    <div className="px-4">
      <Cover></Cover>
      <About></About>
      <Education></Education>
    </div>
  );
};

export default Home;
