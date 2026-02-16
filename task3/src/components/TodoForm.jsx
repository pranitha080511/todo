import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
      />

      <button
        type="submit"
        className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 active:scale-95 transition duration-200 shadow-lg"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoForm;
