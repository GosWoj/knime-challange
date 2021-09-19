import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";
import Icon from "./Icon";

const Node = ({ node, handleDelete }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleDelete(node.id);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Icon type={node.type} />
      </ListItemAvatar>
      <ListItemText primary={node.name} secondary={node.type} />
      <Button variant="contained" onClick={handleClick}>
        Delete
      </Button>
    </ListItem>
  );
};

export default Node;
