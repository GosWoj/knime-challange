import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import nodeService from "./services/nodeService";
import NodeList from "./components/NodeList";
import AddNodeForm from "./components/AddNodeForm";
import NodeWorkflowSearch from "./components/NodeWorkflowSearch";
import NodeWorkflowList from "./components/NodeWorkflowList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [workflow, setWorkflow] = useState([]);
  const [open, setOpen] = useState(false);

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

  console.log(workflow);

  const handleAddNode = (id) => {
    const selectedNode = nodes.filter((n) => n.id === id);
    setWorkflow(workflow.concat(selectedNode));
    handleClose();
  };

  const handleDeleteNode = (id) => {
    const filteredWorkflow = workflow.filter((work) => work.id !== id);

    setWorkflow(filteredWorkflow);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <NodeWorkflowList
              workflow={workflow}
              handleDeleteNode={handleDeleteNode}
            />
          ) : null}
          <AddIcon onClick={handleOpen} />
          <Dialog open={open} onClose={handleClose}>
            <NodeWorkflowSearch
              nodes={nodes}
              workflow={workflow}
              handleAddNode={handleAddNode}
            />
          </Dialog>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
