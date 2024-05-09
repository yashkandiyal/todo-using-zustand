import { useState } from "react";
import TodoStore from "./TodoStore";

const App = () => {
  const [inputTodo, setInputTodo] = useState<string>("");
  const { addTodo, todos, deleteTodo } = TodoStore((state) => state);
  const AddToDo = () => {
    addTodo(inputTodo);
    setInputTodo(""); // Clear input after adding todo
  };
  const deletetingTodo = (id: number) => {
    deleteTodo(id);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 mb-4"
        placeholder="Enter your todo"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
        onClick={AddToDo}>
        Add Todo
      </button>
      {/* Display todos */}
      <div className="mt-4">
        {todos?.map((todo, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded px-6 py-2 mb-2 flex gap-2 justify-between items-center">
            {todo}
            <div
              onClick={() => deletetingTodo(index)}
              className="bg-red-500 p-1">
              delete
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
