
const Input = (props) => {

    return (
    <div>
      <form className="mt-5 text-center" onSubmit={props.addItem}>
        <label className="form-label display-4 " >Add Todo Item</label>
        <input type="tet" className="form-control" id="textField" value={props.input} onChange={props.handleChange} required/>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary mt-2" >Submit</button>
        </div>
      </form>
    </div>)
}

export default Input;