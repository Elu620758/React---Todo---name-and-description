import React from "react";

function MyTodoList({ onEdit, index, todo, onDelete }) {
  const { name, description, status } = todo;

  const handleEdit = () => {
    onEdit(index);
  };

  return (
    <div className="col-3  p-5  m-5 text-start m-1s " id="card-name" style = {{backgroundColor: "#CCF5D3"}}>
      <h5 className="fw-bold">
        Name : <span className="fw-medium">{name}</span>
      </h5>
      <h5 className="fw-bold">
        Description : <span className="fw-medium">{description}</span>
      </h5>
      <h5 className="status fs-5 mb-4">
        Status:
        <select className="btn btn-secondary p-0 mx-3" value={status}>
          <option value="Completed">Completed</option>
          <option value="Not-Completed">Not-Completed</option>
        </select>
      </h5>

      <button
        className="px-3 mx-4 btn btn-outline-success fw-bold"
        onClick={handleEdit} style={{background:"#13AD89", color:"white"}}
      >
        Edit
      </button>
      <button
        className="px-3 mx-3 btn btn-outline-danger fw-bold"
        onClick={() => onDelete(index)} style={{background:"#D05E1F", color:"white"}}
      >
        Delete
      </button>
    </div>
  );
}

export default MyTodoList;