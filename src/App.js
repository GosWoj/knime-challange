import React, { useState, useEffect } from "react";
import nodeService from "./services/nodeService";
import Node from "./components/Node";

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [text, setText] = useState("");
  const [type, setType] = useState("empty");

  const getNodes = async () => {
    const data = await nodeService.getAll();
    setNodes(data);
  };

  useEffect(() => {
    getNodes();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (text && type !== "empty") {
      const newNode = {
        name: text,
        type,
      };

      await nodeService.addNode(newNode);
      getNodes();
      setText("");
      setType("empty");
    } else {
      window.alert("Please, fill form");
    }
  };

  const handleRemove = async (id) => {
    await nodeService.removeNode(id);

    getNodes();
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
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="empty">--</option>
          <option value="source">Source</option>
          <option value="manipulator">Manipulator</option>
          <option value="predictor">Predictor</option>
        </select>
        <button type="submit">Add</button>
      </form>
      {nodes.map((node) => {
        return <Node key={node.id} node={node} handleRemove={handleRemove} />;
      })}
    </div>
  );
};

export default App;
