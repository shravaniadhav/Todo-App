import "./Todo.css";
import {useSelector} from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo(){
   const todos = useSelector((state)=> state.todo.todos);
   console.log(todos);
   const dispatch = useDispatch();

   const deleteHandler=(id)=>{
    console.log("delete",id);
    dispatch(deleteTodo(id));
   };

   const markAsDoneHandler = (id)=>{
    console.log("done");
    dispatch(markAsDone(id));
   };

    return (
        <>
        <AddForm/>
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo) => (
    <li key={todo.id}>
    <span style={{ textDecoration: todo.isDone ? "line-through" : "none",}} >  
          {todo.task} 
    </span>

     &nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={()=>markAsDoneHandler(todo.id)}>Mark As Done</button>
    </li>
      ))}
        </ul>
        </>
    )
}
