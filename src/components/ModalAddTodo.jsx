import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";

export const ModalAddTodo = ({ openModal, setOpenModal, savetodos, tasks }) => {
  const [taskName, setTaskName] = React.useState("");
  const handleAdd = () => {
    const newTodo = [
      {
        text: taskName,
        completed: false,
      },
    ];
    tasks = [...tasks, ...newTodo];
    savetodos(tasks);
    handleClose();
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskName(value);
  };
  return (
    <Dialog open={openModal} onClose={handleClose} maxWidth={"xs"} fullWidth>
      <DialogTitle style={{ textAlign: "left" }}>
        Agregar una nueva tarea
      </DialogTitle>
      <Divider />
      <DialogContent>
        <TextField
          id="standard-basic"
          label="Nombre de la tarea"
          name="todoName"
          variant="standard"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}> Cancelar </Button>
        <Button onClick={handleAdd}> Guardar </Button>
      </DialogActions>
    </Dialog>
  );
};
