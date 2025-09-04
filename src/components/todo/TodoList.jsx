import Todo from "./Todo";

const TodoList = ({ todos, finishTodo }) => {
  return (
    <div className="todo-lists">
      {todos.map(({ todoId, ...todoAttributes }) => {
        return (
          <Todo
            key={todoId}
            todoId={todoId}
            finishTodo={finishTodo}
            {...todoAttributes}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
