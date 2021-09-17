import React from "react";
import Icon from "./Icon";

const Node = ({ node, handleRemove }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleRemove(node.id);
  };

  return (
    <div>
      <h2>{node.name}</h2>
      <div>
        <Icon type={node.type} />
      </div>
      <h4>{node.type}</h4>
      <button onClick={handleClick}>Remove</button>
    </div>
  );
};

export default Node;
