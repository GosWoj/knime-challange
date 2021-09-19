import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddNodeForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("empty");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text && type !== "empty") {
      const newNode = {
        name: text,
        type,
      };

      handleAdd(newNode);
      setText("");
      setType("empty");
    } else {
      window.alert("Please, fill the form");
    }
  };

  return (
    <FormControl sx={{ padding: "1rem", width: "80%" }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        name="node"
        label="Node"
        variant="outlined"
        margin="normal"
      />
      <Select
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={{ marginBottom: "0.5rem" }}
      >
        <MenuItem value="empty">--</MenuItem>
        <MenuItem value="source">Source</MenuItem>
        <MenuItem value="manipulator">Manipulator</MenuItem>
        <MenuItem value="predictor">Predictor</MenuItem>
      </Select>
      <Button variant="outlined" type="submit" onClick={handleSubmit}>
        Add
      </Button>
    </FormControl>
  );
};

export default AddNodeForm;
