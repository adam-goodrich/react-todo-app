
const Todo = (props) => {

  if (props.todoList.length === 0) {
    return (
      <div className="text-center">
        <h1 className="mt-5">No Todo Items</h1>
      </div>
    )
  }

  return (
  <div className="mt-3">
    <ul className="list-group">
    {props.todoList.map((item, index) => {
      if (item.complete) {
        return (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={`todo-${index}`}>
                <span className="display-6" onClick={() => props.toggleComplete(index)}><del>{item.name}</del></span>
                <button type="button" className="btn btn-danger btn-sm" aria-label="Close" onClick={() => props.deleteItem(index)}>delete</button>
              </li>)
      } else {
        return (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={`todo-${index}`}>
                <span className="display-6" onClick={() => props.toggleComplete(index)}>{item.name}</span>
                <button type="button" className="btn btn-danger btn-sm" aria-label="Close" onClick={() => props.deleteItem(index)}>delete</button>
              </li>)
      }
        
      })}
      </ul>
  </div>)
  
}
 
export default Todo;