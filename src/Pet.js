import React from "react";
import { Link } from "@reach/router";
// Thats the difference between link and anchor tag that Link tag does not destroy the dom and the statevariables
export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1> {name} </h1>
        <h2> {`${animal} - ${breed} - ${location}`} </h2>
      </div>
    </Link>
  );
}
// Other way would be to use navigate
