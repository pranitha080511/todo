import { useState, useRef, useEffect } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import { gsap } from "gsap";

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4 }
    );
  }, []);

  const handleSave = () => {
    if (!newText.trim()) return;

    editTodo(todo.id, newText);   // 🔥 This updates App state
    setIsEditing(false);
  };

  return (
    <div
      ref={itemRef}
      className="flex items-center justify-between bg-gray-800 p-4 rounded-xl border border-gray-700"
    >
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 bg-gray-700 px-3 py-2 rounded-lg mr-3 outline-none"
        />
      ) : (
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-4 ml-3 text-xl">
        {isEditing ? (
          <FaCheck
            onClick={handleSave}
            className="cursor-pointer text-green-400 hover:scale-110 transition"
          />
        ) : (
          <FaEdit
            onClick={() => setIsEditing(true)}
            className="cursor-pointer text-yellow-400 hover:scale-110 transition"
          />
        )}

        <FaTrash
          onClick={() => deleteTodo(todo.id)}
          className="cursor-pointer text-red-500 hover:scale-110 transition"
        />
      </div>
    </div>
  );
};

export default TodoItem;
