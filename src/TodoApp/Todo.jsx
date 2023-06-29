import React, { useState } from "react";

const Todo = () => {
  // list content added in array
  const [items, setitems] = useState([]);
  // first is initial data and second is updated data
  const [inputData, setInputData] = useState("");
  // add task
  const taskAdd = () => {
    if (!inputData) {
    } else {
      setitems([...items, inputData]);
      setInputData("");
    }
  };
  // delete task
  const Delete = (id) => {
    const updateItems = items.filter((elem, index) => {
      return index !== id;
    });
    setitems(updateItems);
  };
  const deleteData = () => {
    setitems([]);
  };
  return (
    <>
      <div className="container">
        <div className="todoApp">
          <h1>Todo List</h1>
          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="text message"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={taskAdd}>Add</button>
          </div>
          <ul>
            {items.map((itemadd, index) => {
              return (
                <>
                  <div className="xmark" key={index}>
                    <li>{itemadd}</li>
                    <i
                      className="fas fa-times"
                      aria-hidden="true"
                      onClick={() => Delete(index)}
                    />
                  </div>
                </>
              );
            })}
          </ul>
          <button
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
            }}
            onClick={deleteData}
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
