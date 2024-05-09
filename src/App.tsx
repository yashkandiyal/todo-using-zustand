import { useState } from "react";
import TodoStore from "./TodoStore";

const App = () => {
  const [inputTodo, setInputTodo] = useState<string>("");
  const { addTodo, todos, deleteTodo, toggleStatus } = TodoStore(
    (state) => state
  );

  const AddToDo = () => {
    addTodo(inputTodo);
    setInputTodo("");
  };

  const handleDeleteTodo = (index: number) => {
    deleteTodo(index);
  };

  const handleToggleStatus = (index: number) => {
    toggleStatus(index);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-80">
        <input
          type="text"
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
          placeholder="Enter your todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded w-full"
          onClick={AddToDo}>
          Add Todo
        </button>
        {/* Display todos */}
        <div className="mt-4">
          {todos?.map((todo, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded px-4 py-2 mb-2 flex justify-between items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={todo.completed}
                placeholder="status"
                onChange={() => handleToggleStatus(index)}
              />
              <span className={`ml-2 ${todo.completed ? "line-through" : ""}`}>
                {todo.text}
              </span>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="text-red-600">
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
