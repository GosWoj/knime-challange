import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import TextField from "@mui/material/TextField";
import Icon from "./Icon";

const NodeWorkflowSearch = ({ nodes, workflow, handleAddNode, side }) => {
  const [search, setSearch] = useState("");

  const handleClick = (id) => {
    const object = {
      id,
      side,
    };
    handleAddNode(object);
    setSearch("");
  };

  return (
    <div style={{ minWidth: "60vw", minHeight: "95vh" }}>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "80%", margin: "0.5rem" }}
        placeholder="Search..."
      />
      <List sx={{ width: "100%" }}>
        {nodes
          .filter((n) => !workflow.includes(n))
          .filter((node) =>
            node.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((node) => {
            return (
              <ListItem key={node.id} onClick={() => handleClick(node.id)}>
                <ListItemAvatar>
                  <Icon type={node.type} />
                </ListItemAvatar>
                <ListItemText primary={node.name} secondary={node.type} />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default NodeWorkflowSearch;
