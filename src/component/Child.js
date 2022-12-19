import React from "react";

const Child = ({props}) => {
  return (
    <div>
      <h1>name:{props.name}</h1>
      <h1>roll:{props.roll}</h1>
    </div>
  );
};

export default Child;
