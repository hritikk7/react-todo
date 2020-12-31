import React,{useState, useEffect, useLayoutEffect} from 'react'
import './App.css';
import Form from './components/form'
import TodoList from './components/TodoList'

function App() {
 const [inputText, setInputText] = useState("")
 const [todos, setTodo] = useState([])
 const [status, setStatus] =useState("all")
 const [filteredTodos, setFilterTodos] = useState([])
  useEffect(() =>{
    filterHandler()
  },[todos, status])


 const filterHandler =()=>{
   switch(status){
     case "completed":
       setFilterTodos(todos.filter(todo =>{
         todo.completed === true 
        }))
      case "uncompleted":
        setFilterTodos(todos.filter(todo =>{
          todo.completed === false 
       }))
      default :
      setFilterTodos(todos)

   }
 }

 return (
    <div className="App">
      <header>
      <h1>To-Do List</h1>  
      </header>
      
      <Form 
        setInputText={setInputText} 
        todos={todos}
        setTodo={setTodo}
        inputText={inputText}
        status={status}
        setStatus={setStatus}
        />
      <TodoList 
        todos={todos} 
        setTodo={setTodo}
        filteredTodos={filteredTodos}
        />
      
    </div>
  );
}

export default App;
