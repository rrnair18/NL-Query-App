import { useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  Menu,
  MenuItem,
} from "@mui/material";

const useStyles = styled({

});

export const QueryList = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [editedId, setEditedId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const onChange = (e) => setInputVal(e.target.value);

  const handleClick = () => {
    const updatedTodos = isEdited
      ? [
          ...todos.filter((todo) => todo.id !== editedId),
          { val: inputVal, id: editedId },
        ]
      : [
          ...todos,
          { val: inputVal, id: new Date().getTime() },
        ];
    setTodos(updatedTodos);
    setInputVal("");
    setIsEdited(false);
  };

  const onDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const handleEdit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setEditedId(editTodo.id);
    setInputVal(editTodo.val);
    setIsEdited(true);
    handleCloseMenu(); // Close the menu after selecting edit
  };

  return (
    <Box padding={1} flex={1} bgcolor="white">
      <Container component="main" className={classes.container}>
        <Box display="flex" alignItems="center">
        <TextField
        variant="outlined"
        onChange={onChange}
        label="Type your task"
        value={inputVal}
        className={classes.input}
        bgcolor="white"
        sx={{
            width: "200px", // Adjust the width as needed
            height: "50px", // Adjust the height as needed
        }}
        />
          <Button
            size="medium"
            variant={isEdited ? "outlined" : "contained"}
            color="primary"
            onClick={handleClick}
            className={classes.addButton}
            disabled={!inputVal}
            sx={{
                width: "10px", // Adjust the width as needed
                height: "55px", // Adjust the height as needed
            }} 
          >
            +
          </Button>
        </Box>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id} divider className={classes.list}>
              <Box className={classes.text}>
                <Typography>
                  {todo.val}
                </Typography>
              </Box>
              <Button
                onClick={handleOpenMenu}
                className={classes.dropdownButton}
              >
                [:::]
              </Button>
              <Menu
                id="edit-delete-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={() => handleEdit(todo.id)}>Edit</MenuItem>
                <MenuItem onClick={() => onDelete(todo.id)}>Delete</MenuItem>
              </Menu>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};
