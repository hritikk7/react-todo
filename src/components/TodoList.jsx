import React from 'react'
import Todo from './Todo'
    function TodoList({todos, setTodo, filteredTodos}){
        return(    
            <div className="todo-container">
                <ul className="todo-list"></ul>
                {
                    filteredTodosmap((todo) =>(
                        <Todo 
                            text={todo.text}
                            setTodo={setTodo}
                            todos={todos}
                            key={todo.id}
                            todo={todo}
                        />
                    ))
                }
            </div>
        )
    }

    

export default TodoList;