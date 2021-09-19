import React from "react";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Icon from "./Icon";

const NodeWorkflow = ({ node, handleDelete }) => {
  const handleClick = (id) => {
    handleDelete(id);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Icon type={node.type} />
      </ListItemAvatar>
      <ListItemText primary={node.name} secondary={node.type} />
      <Button sx={{ color: "red" }} onClick={() => handleClick(node.id)}>
        Remove
      </Button>
    </ListItem>
  );
};

export default NodeWorkflow;
