import React from "react";
import "./todolisttask.css";
export default function TodoListTask() {
  return (
    <div className="todoListTask">
      {/* 
      --todoRHeader => todoRightHeader 
      --todoRTitle => todoRightTitle 
      --todoR => todoRight
      --todoRIputItems => todoRightInputItems
      --todoRILabel => todoRightInputLbael
      --todoRIClass => todoRightInputClass
      */}
      <div className="todoRHeader">
        <span className="todoRTitle">Anderson</span>
        <div className="todoListItemsIcon">
          <i class="fa-solid fa-ellipsis"></i>
        </div>{" "}
      </div>

      <div className="todoRInputItems">
        <label htmlFor="todoRILabel">
          <button className="todoRInputButton">
            <i class="fa-light fa-plus"></i>
          </button>
        </label>
        <input
          type="text"
          name="todoRILabel"
          id="todoRILabel"
          className="todoRIClass"
          placeholder="Add a Task"
        />
      </div>
    </div>
  );
}
