import React from "react";
import List from "@mui/material/List";
import Node from "./Node";

const NodeList = ({ nodes, handleDelete, handleUpdate }) => {
  return (
    <List sx={{ width: "85%", overflow: "auto", height: "80vh" }}>
      {nodes.map((node) => {
        return (
          <Node
            key={node.id}
            node={node}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </List>
  );
};

export default NodeList;
