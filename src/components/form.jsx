import React from 'react'

    function Form({setInputText, todos, setTodo, inputText, setStatus}) {
        const inputTextHandler= (e) =>{
            setInputText(e.target.value)
        }
        const submitTodoHandler = (e) =>{
            e.preventDefault()
            setTodo([
                ...todos,
                {
                    text: inputText,
                    id: Math.random()*100,
                    completed: false,
                }
            ])
            setInputText(" ")
    }    

        const statusHandler = (e) => {
            setStatus(e.target.value)
    }    
    return(  
        <form>
        <input value={inputText} type="text" onChange={inputTextHandler}  className="todo-input" />
        <button className="todo-button" onClick={submitTodoHandler} type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    )
}


export default Form;