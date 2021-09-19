import React, { useState, useEffect } from "react";
import nodeService from "./services/nodeService";
import Node from "./components/Node";
import NodeWorkflow from "./components/NodeWorkflow";

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [text, setText] = useState("");
  const [type, setType] = useState("empty");
  const [workflow, setWorkflow] = useState([]);
  const [search, setSearch] = useState("");

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
      window.alert("Please, fill the form");
    }
  };

  const handleRemove = async (id) => {
    await nodeService.removeNode(id);

    getNodes();
  };

  const handleAddNode = (e) => {
    e.preventDefault();

    if (e.target.value !== "empty") {
      const id = parseInt(e.target.value);
      const selectedNode = nodes.filter((n) => n.id === id);
      setWorkflow(...workflow, selectedNode);
    }
  };

  console.log(workflow);

  const handleAddAnother = (id) => {
    const selectedNode = nodes.filter((n) => n.id === id);
    setWorkflow(workflow.concat(selectedNode));
  };

  const handleDeleteNode = (id) => {
    const filteredWorkflow = workflow.filter((work) => work.id !== id);

    setWorkflow(filteredWorkflow);
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
      <div>
        <h1>Workflow</h1>
        {workflow.length > 0 ? (
          <div>
            {workflow.map((w) => {
              return (
                <NodeWorkflow
                  key={w.id}
                  node={w}
                  handleDelete={handleDeleteNode}
                />
              );
            })}
            {/* <Node node={workflow} /> */}
            {/* <select name="workflow" onChange={handleAddAnother}>
              <option value="empty">--</option>
              {nodes
                .filter((n) => !workflow.includes(n))
                .map((node) => {
                  return (
                    <option key={node.id} value={node.id}>
                      {node.name}
                    </option>
                  );
                })}
            </select> */}
            <div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ul>
                {nodes
                  .filter((n) => !workflow.includes(n))
                  .filter((node) =>
                    node.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((node) => {
                    return (
                      <li
                        key={node.id}
                        onClick={() => handleAddAnother(node.id)}
                      >
                        {node.name}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        ) : (
          <select name="node" onChange={handleAddNode}>
            <option value="empty">--</option>
            {nodes.map((node) => {
              return (
                <option key={node.id} value={node.id}>
                  {node.name}
                </option>
              );
            })}
          </select>
        )}
      </div>
    </div>
  );
};

export default App;
