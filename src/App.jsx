import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [page, setPage] = useState("landing");
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  // ✅ Load todos from localStorage on app start
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // ✅ Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleLogin = (username) => {
    setUser(username);
    setPage("todo");
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  if (page === "landing") {
    return <Landing onStart={() => setPage("signin")} />;
  }

  if (page === "signin") {
    return <SignIn onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
      <div className="max-w-xl mx-auto bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyan-400">
            Welcome, {user} 👋
          </h2>

          <button
            onClick={() => {
              setUser(null);
              setPage("landing");
            }}
            className="px-4 py-2 bg-red-500 rounded-lg hover:scale-105 transition duration-200"
          >
            Logout
          </button>
        </div>

        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
