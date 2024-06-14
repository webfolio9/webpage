import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import React, { useEffect } from 'react';

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


function App() {
  useEffect(() => {
    document.title = "Fernanda Gontijo"; // Set the document title here
  }, []);

  return (
    <div>
      <!-- Your component code here -->
    </div>
  );
}