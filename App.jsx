import React, { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export const TodoContext = createContext()

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    }
  ])


  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    
    setTodos(updatedTodos)
  }
  
  const deleteTodo = (todoId) => {
    const todoIndex = todos.findIndex((todos)=>todos.id===todoId);
    const tempTodos = [...todos];
    if (todoIndex > -1){
      console.log(todoIndex);
      tempTodos.splice(todoIndex, 1);  
    }
    console.log(todos.splice(todoIndex,3));
    setTodos(tempTodos);
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  const styles = {
    container: {
      textAlign: 'center',
      padding: '12px',
    },
    title: {
      fontSize: '36px',
    },
  }

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm addTodo={addTodo} /> 
        <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
      </div>
    </TodoContext.Provider>
  )
}

export default App