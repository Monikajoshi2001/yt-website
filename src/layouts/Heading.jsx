/*
 File: Heading.jsx
 A functional component to create Heading required anywhere in the website.
*/

import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h3 className=" font-extrabold text-ThemeColor text-ClampForHomeHeading">
        {props.title}
      </h3>
    </div>
  );
};

export default Heading;