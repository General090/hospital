import React from "react";
import Nav from "../../../layouts/nav";
import LearnMore from "../../../Props/Button/LearnMore";

const ourStory = () => {
  return (
    <Nav>
      <div className="sf-font">
        <div className="people">
          <h1>Every Story Matters</h1>
          <p>
            See what we are doing to improve Lives. Read real experiences of
            growth, hope, and transformation
          </p>
          <LearnMore />
        </div>
      </div>
    </Nav>
  );
};

export default ourStory;
