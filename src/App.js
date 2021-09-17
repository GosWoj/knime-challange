import React, { useState, useEffect } from "react";
import nodeService from "./services/nodeService";

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [text, setText] = useState("");
  const [type, setType] = useState(null);

  useEffect(() => {
    const getNodes = async () => {
      const data = await nodeService.getAll();
      setNodes(data);
    };

    getNodes();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    const newNode = {
      name: text,
      type,
    };

    setNodes(nodes.concat(newNode));
    setText("");
  };

  return (
    <div>
      <h1>Add new node:</h1>
      <form onSubmit={handleAdd}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="node"
        />
        <select name="type" onChange={(e) => setType(e.target.value)}>
          <option value="source">Source</option>
          <option value="manipulator">Manipulator</option>
          <option value="predictor">Predictor</option>
        </select>
        <button type="submit">Add</button>
      </form>
      {nodes.map((node) => {
        return (
          <div key={node.id}>
            <h2>{node.name}</h2>
            <h4>{node.type}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default App;
