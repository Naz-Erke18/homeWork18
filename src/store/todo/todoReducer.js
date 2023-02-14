export const todoActionTypes = {
  ADD: "ADD",
  DELETE_TODO: "DELETE_TODO",
  DELETE_ALL: "DELETE_ALL",
  COMPLETED: "COMPLETED",
  EDIT: "EDIT",
};
const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.ADD:
      return [...state, action.payload];
    case todoActionTypes.DELETE_ALL:
      return [];
    case todoActionTypes.DELETE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    case todoActionTypes.EDIT:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        return updatedArray.push(item);
      });
      return updatedArray;

    case todoActionTypes.COMPLETED:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return todoArray.push(item);
      });
      return todoArray;
    default:
      return state;
  }
};
