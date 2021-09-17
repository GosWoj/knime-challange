import React from "react";

const Node = ({ node }) => {
  return (
    <div>
      <h2>{node.name}</h2>
      <h4>{node.type}</h4>
    </div>
  );
};

export default Node;
