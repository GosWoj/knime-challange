import React from "react";
import Button from "@mui/material/Button";
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
      <Button sx={{ color: "red" }} onClick={() => handleClick(node.id)}>
        Remove
      </Button>
    </div>
  );
};

export default NodeWorkflow;
