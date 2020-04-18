import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// Router implementation react router  ( exact match and does both can use switch to do one )vs reach router ( only does which matches the most by a score)
// :id is a match variable
// a ki jagah <Link>
const App = () => {
  const themeHook = useState("peru");
  // Hooks se different cuz it takes the whole array being returned
  // If I useState ka color change then all colors change of all buttons which use it
  // One particular context mein I will give an object
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
