import { useState } from 'react';
import Todo from './components/Todo'
import Input from './components/Input'


function App() {

  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState("")

  
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const addItem = (e) => {
    e.preventDefault()
    let newItem = {name: input, complete: false}
    setTodoList(todoList.concat(newItem))
    const inputField = document.getElementById("textField")
    inputField.value = ""
    setInput("")
  }

  const toggleComplete = (index) => {
    const todoListCopy = [...todoList]
    if (todoListCopy[index].complete === false) {
      todoListCopy[index].complete = true
      setTodoList(todoListCopy)
    } else {
      todoListCopy[index].complete = false
      setTodoList(todoListCopy)
    }
  }

  const deleteItem = (index) => {
    const todoListCopy = [...todoList]
    todoListCopy.splice(index, 1)
    setTodoList(todoListCopy)
  }

  return (
    <div className="container">
      <Input 
        todoList={todoList} 
        setTodoList={setTodoList}
        handleChange={handleChange}
        addItem={addItem}
      />
      <Todo todoList={todoList} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
