import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import nodeService from "./services/nodeService";
import NodeList from "./components/NodeList";
import AddNodeForm from "./components/AddNodeForm";
import NodeWorkflowSearch from "./components/NodeWorkflowSearch";
import NodeWorkflowList from "./components/NodeWorkflowList";

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [workflow, setWorkflow] = useState([]);
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState("");

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

  const handleAddNode = (object) => {
    const selectedNode = nodes.filter((n) => n.id === object.id);
    if (object.side === "right") {
      setWorkflow(workflow.concat(selectedNode));
      handleClose();
    } else {
      setWorkflow(selectedNode.concat(workflow));
      handleClose();
    }
  };

  const handleDeleteNode = (id) => {
    const filteredWorkflow = workflow.filter((work) => work.id !== id);

    setWorkflow(filteredWorkflow);
  };

  const handleOpenRight = () => {
    setOpen(true);
    setSide("right");
  };

  const handleOpenLeft = () => {
    setOpen(true);
    setSide("left");
  };

  const handleClose = () => {
    setOpen(false);
    setSide("");
  };

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item width="35vw">
          <Typography variant="h4" gutterBottom sx={{ margin: "0.5rem 1rem" }}>
            Add new node:
          </Typography>
          <AddNodeForm handleAdd={handleAdd} />
          <NodeList nodes={nodes} handleDelete={handleDelete} />
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "grid",
              justifyItems: "center",
            }}
          >
            <AddIcon onClick={handleOpenLeft} />
            <Typography
              variant="h4"
              gutterBottom
              sx={{ margin: "0.5rem 1rem" }}
            >
              Workflow:
            </Typography>
            {workflow.length > 0 ? (
              <NodeWorkflowList
                workflow={workflow}
                handleDeleteNode={handleDeleteNode}
              />
            ) : null}
            <AddIcon onClick={handleOpenRight} />
            <Dialog open={open} onClose={handleClose}>
              <NodeWorkflowSearch
                nodes={nodes}
                workflow={workflow}
                handleAddNode={handleAddNode}
                side={`${side === "right" ? "right" : "left"}`}
              />
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
