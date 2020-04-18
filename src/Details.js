import React from "react";
// was empty parameter before but after parameter passing to put content on the pages
const Details = (props) => {
  return (
    <pre>
      <code> {JSON.stringify(props, null, 4)} </code>
    </pre>
  );
};
// giving the details of router

export default Details;
