    import TodoItem from "./TodoItem";

    const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
    return (
        <div className="space-y-4">
        {todos.length === 0 && (
            <p className="text-center text-gray-500">
            No tasks yet. Add something 🚀
            </p>
        )}

        {todos.map((todo) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            />
        ))}
        </div>
    );
    };

    export default TodoList;
