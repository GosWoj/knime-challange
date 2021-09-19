import React from "react";
import List from "@mui/material/List";
import NodeWorkflow from "./NodeWorkflow";

const NodeWorkflowList = ({ workflow, handleDeleteNode }) => {
  const handleClick = (id) => {
    handleDeleteNode(id);
  };

  return (
    <List>
      {workflow.map((work) => {
        return (
          <NodeWorkflow
            key={work.id}
            node={work}
            handleDelete={() => handleClick(work.id)}
          />
        );
      })}
    </List>
  );
};

export default NodeWorkflowList;
