// Node modules has a secret folder named bin usme parcel hai. So even if parcel isnt there on main terminal ka $PATH the package.json runs parcel successfully
// parcel automatically refreshes page in the browser on changes
// also npm i is on the production side and npm install -D is on the developer side

import React from "react";
// Import a specific thing cuz parser a thing called tree shaking ( would ulify the tree but make the code faster to run)
import { render } from "react-dom";
import { Pet } from "./Pet";
const App = () => {
  return React.createElement("div", { id: "Something-imp" }, [
    React.createElement("h1", {}, "AdoptMe"),
    React.createElement(Pet, {
      name: "luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

// changed the below line
render(React.createElement(App), document.getElementById("root"));
