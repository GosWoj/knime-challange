import React from "react";

const Node = ({ node, handleRemove }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleRemove(node.id);
  };

  return (
    <div>
      <h2>{node.name}</h2>
      <h4>{node.type}</h4>
      <button onClick={handleClick}>Remove</button>
    </div>
  );
};

export default Node;
