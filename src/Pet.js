// auto import React and also typescript is running on the code to move the file
// Default strategy - one component , one file
import React from "react";
//npm intellisense  makes it dull

// removed the => style ( even though it could work) to maintain readability
// export const Pet({name, animal, breed }) => {}
export default function Pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
}
