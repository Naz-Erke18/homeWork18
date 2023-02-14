import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {todoActionTypes } from "../store/todo/todoReducer";



const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editTodo, setEditeTodo] = useState();
  const [editForm, setEditForm] = useState(0);

  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const time = date.getTime();
    const Obj = {
      id: time,
      todo: todo,
      completed: false,
    };
    setTodo("");
    dispatch({ type: todoActionTypes.ADD, payload: Obj });
  };
  const todos = useSelector((state) => state.todo);

  const deleteTodoHandler = (id) => {
    dispatch({ type: todoActionTypes.DELETE_TODO, payload: id });
  };
  const deleteAllHandler = () => {
    dispatch({ type: todoActionTypes.DELETE_ALL });
  };
  const handleCheckBox = (id) => {
    dispatch({ type: todoActionTypes.COMPLETED, payload: id });
  };

  const handleEditClick = (todo) => {
    setEditForm(todo.id);
    setEditeTodo(todo);
    setEditValue(todo.todo);
  };
  const editInputChangeHandler = (e) => {
    setEditValue(e.target.value);
  };
  const cancelUpdate = () => {
    setEditForm(null);
  };

  const editSubmit = (e) => {
    e.preventDefault();
    const edite = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch({ type: todoActionTypes.EDIT, payload: edite });
    setEditForm(null);
  };
  return (
    <Container>
      <div>
        <StyledInput
          value={todo}
          type="text"
          placeholder=""
          onChange={inputChangeHandler}
        />
        <Button onClick={handleSubmit}>ADD</Button>
        <Button3 onClick={deleteAllHandler}>Delete All</Button3>
      </div>

      {todos.map((item, index) => (
        <StyledUl key={index}>
          <li>
            <CheckBox
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckBox(item.id)}
            ></CheckBox>
            {item.id === editForm ? (
              <div>
                <EditeInput
                  type="text"
                  value={editValue || "✍🏻 Add Items"}
                  onChange={editInputChangeHandler}
                />
              </div>
            ) : (
              <div>
                <p
                  style={
                    item.completed === true
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {item.todo}
                </p>
              </div>
            )}

            <div>
              {item.id === editForm ? (
                <Button2 onClick={editSubmit}>Save</Button2>
              ) : null}

              {item.id === editForm ? (
                <Button3 onClick={cancelUpdate}>Cancel</Button3>
              ) : (
                <Button2 onClick={() => handleEditClick(item)}>Edit</Button2>
              )}
              <Button onClick={() => deleteTodoHandler(item.id)}>Delete</Button>
            </div>
          </li>
        </StyledUl>
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;
const EditeInput = styled.input`
  width: 300px;
  border: none;
  padding: 10px;
  outline: none;
  color: #0e0d0d;
  font-size: 30px;
`;
const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  color:black;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  border: 5px;
  background-color: rgb(0, 255, 231);
  color: white;
  border-radius: 30px;
  margin-left: 20px;
`;
const StyledUl = styled.ul`
  border: 2px solid white;
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 30px;
  }
  p {
    max-width: 400px;
    margin: 0;
  }
`;

const Button2 = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  border: 5px;
  background-color: rgb(0, 255, 231);
  color: aliceblue;
  border-radius: 30px;
`;
const Button3 = styled.button`
  padding: 10px;
  font-size: 20px;
  border: 5px;
  background-color: rgb(0, 255, 231);
  color: aliceblue;
  border-radius: 30px;
  margin-left: 40px;
`;

const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  padding: 10px;
`;
