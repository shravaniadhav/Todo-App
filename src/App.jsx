import './App.css';
import Todo from "./components/todo";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useEffect } from "react";

function App() {


  useEffect(() => {
    document.title = "Todo-App";
  }, []);

  return (
    <Provider store={store}>  
      <Todo/>
    </Provider>
  );
}

export default App;
