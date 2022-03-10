import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import React, {useState} from 'react';
import { AddTodo } from './components/AddTodo';


function App() {
  const onDelete = (todo) =>{
    console.log("Deleted", todo);
    setTodos(todos.filter((e)=>{ 
      return e!==todo;
    }))
  }

const addTodo =(title, desc) =>{
  console.log("I am adding this todo", title,desc)
  let sno = todos[todos.length-1].sno + 1;
  const myTodo ={
    sno: sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos, myTodo]);
  console.log(myTodo);

}

  const [todos,setTodos] = useState([
      {
        sno: 1,
        title: "Go to the Market",
        desc: "I need to go to the market"
      },
      {
        sno: 2,
        title: "Go to the Mall",
        desc: "I need to go to the mall for shopping"
      },
      {
        sno: 3,
        title: "Go to the Delhi",
        desc: "I need to go to the Delhi to see Red Ford and Jama masjid"
      },
    ]);

  return (
    <>
      <Header title="ToDoList" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos= {todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
