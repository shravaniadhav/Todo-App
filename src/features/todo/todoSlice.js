//reducers
import { createSlice, nanoid/*similar to uuid()*/} from '@reduxjs/toolkit'

//initialState obj defines initial state of state var inside our slice here state var is todos arr whose initial state will be empty arr or one sample task
const initialState = {
    todos: [{id: "abc", task: "demo-task",isDone: false}],
};

export const todoSlice = createSlice({      //createSlice act as a bundle of our reducers and actions i.e func and events
      name: "todo",//slice name usually we keep it same as feature name
      initialState,
      reducers : {//here we created 3 reducers that changes state and return updated state
        addTodo: (state, action)=>{
            const newTodo={
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);//direct mutation where we are simply pushing newTodo without making any copy of arr, which is not possible in normal react there we need to pass completely new state by creating copy of arr [...todos,newTodo]
        },

        deleteTodo: (state, action)=>{
          state.todos = state.todos.filter((todo)=> todo.id !== action.payload)//The reducer just receives state and action, so only way it knows which todo to delete is via action.payload 
        },
        markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone }; // toggle done/undo
        }
        return todo;
      });
    },
  },
});

export const {addTodo,deleteTodo,markAsDone} = todoSlice.actions;//action creators
export default todoSlice.reducer;


