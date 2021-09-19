import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import nodeService from "./services/nodeService";
import NodeWorkflow from "./components/NodeWorkflow";
import NodeList from "./components/NodeList";
import AddNodeForm from "./components/AddNodeForm";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [workflow, setWorkflow] = useState([]);
  const [search, setSearch] = useState("");

  const getNodes = async () => {
    const data = await nodeService.getAll();
    setNodes(data);
  };

  useEffect(() => {
    getNodes();
  }, []);

  const handleAdd = async (newNode) => {
    await nodeService.addNode(newNode);
    getNodes();
  };

  const handleDelete = async (id) => {
    await nodeService.deleteNode(id);
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom sx={{ margin: "0.5rem 1rem" }}>
            Add new node:
          </Typography>
          <AddNodeForm handleAdd={handleAdd} />
          <NodeList nodes={nodes} handleDelete={handleDelete} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4" gutterBottom>
            Workflow:
          </Typography>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
