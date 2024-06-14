import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App"; // Assuming you have an App component
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const Index = () => (
  <>
    <Helmet>
      <title>Fernanda Gontijo</title>
    </Helmet>
    <App />
  </>
);

ReactDOM.render(<Index />, document.getElementById("root"));
