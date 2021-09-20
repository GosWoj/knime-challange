import React from "react";
import Button from "@mui/material/Button";
import Icon from "./Icon";

const NodeWorkflow = ({ node, handleDelete }) => {
  const handleClick = (id) => {
    handleDelete(id);
  };

  return (
    <div>
      <div style={{ margin: "0 1rem" }}>
        <div>
          <Icon type={node.type} />
        </div>
        <h3>{node.name}</h3>
      </div>
      <Button sx={{ color: "red" }} onClick={() => handleClick(node.id)}>
        Remove
      </Button>
    </div>
  );
};

export default NodeWorkflow;
