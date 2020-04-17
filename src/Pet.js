// Basically write HTML code inside JS which will be converted to React.createElement and stuff

import React from "react";
export default function Pet({ name, animal, breed }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed),
  //   ]);
  return (
    // That's why we have div first - return one thing at a time
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
// {} means that it is an expression
