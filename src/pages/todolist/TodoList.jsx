import React from "react";
import "./todolist.css";
import TodoListPanel from "../../components/todolistpanel/TodoListPanel";
import TodoListTask from "../../components/todolisttasks/TodoListTask";
export default function TodoList() {
  return (
    <div className="todoList">
      {/*<div className="todoLeft"></div>

      <div className="todoRight">
        todoRHeader => todoRightHeader
     ---todoRTitle => todoRightTitle
     --todoR => todoRight
        
        <div className="todoRHeader">
          <span className="todoRTitle">Anderson</span>
          <div className="todoRInputItems">
            <label htmlFor="todoRILabel">
              <i class="fa-solid fa-plus"></i>
            </label>
            <input type="text" id="todoILabel" />
          </div>
        </div>
      </div>*/}
      <TodoListPanel />
      <TodoListTask />
    </div>
  );
}
