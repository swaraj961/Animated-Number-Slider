import React, { useState } from "react";
export const AddTodo = (props) => {
  const [title, setTitlestate] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description can't be empty");
      
    }else{
        props.addTodo(title, desc);
        setTitlestate("");
        setdesc("");
    }

   
  };
  return (
    <div className="container py-3">
      <h3>Add a todo </h3>
      <form>
        <div className="mb-3">
          <label htmlFor="tittle" className="form-label">
            Tittle
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitlestate(e.target.value);
            }}
          />
          <div id="todoHelp" className="form-text">
            Enter a todo to add to list
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button
          type="submit"
          className="btn btn-m btn-success"
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
