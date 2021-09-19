import React from "react";
import { FaMinus } from "react-icons/fa";
import Icon from "./Icon";

const NodeWorkflow = ({ node, handleDelete }) => {
  const handleClick = (id) => {
    handleDelete(id);
  };

  return (
    <div>
      <h2>{node.name}</h2>
      <div>
        <Icon type={node.type} />
      </div>
      <h4>{node.type}</h4>
      <FaMinus onClick={() => handleClick(node.id)} />
    </div>
  );
};

export default NodeWorkflow;
