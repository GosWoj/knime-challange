import React from "react";
import NodeWorkflow from "./NodeWorkflow";

const NodeWorkflowList = ({ workflow, handleDeleteNode }) => {
  const handleClick = (id) => {
    handleDeleteNode(id);
  };

  return (
    <div style={{ display: "flex", direction: "row", padding: "1rem" }}>
      {workflow.map((work) => {
        return (
          <NodeWorkflow
            key={work.id}
            node={work}
            handleDelete={() => handleClick(work.id)}
          />
        );
      })}
    </div>
  );
};

export default NodeWorkflowList;
