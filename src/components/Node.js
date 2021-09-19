import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";
import Icon from "./Icon";

const Node = ({ node, handleDelete, handleUpdate }) => {
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(node.name);

  const handleClick = async (id) => {
    await handleDelete(id);
  };

  const handleChange = async (node) => {
    const newNode = {
      ...node,
      name: newName,
    };

    await handleUpdate(newNode);
    setEdit(false);
  };

  return (
    <ListItem onClick={() => setEdit(true)}>
      <ListItemAvatar>
        <Icon type={node.type} />
      </ListItemAvatar>
      {edit ? (
        <>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          <Button variant="contained" onClick={() => handleChange(node)}>
            Update
          </Button>
        </>
      ) : (
        <>
          <ListItemText primary={node.name} secondary={node.type} />
          <Button variant="contained" onClick={() => handleClick(node.id)}>
            Delete
          </Button>
        </>
      )}
    </ListItem>
  );
};

export default Node;
