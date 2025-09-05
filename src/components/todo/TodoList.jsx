import Todo from "./Todo";

const TodoList = ({ todos, finishTodo, deleteTodo }) => {
  return (
    <div className="todo-lists">
      {todos?.map(({ todoId, ...todoAttributes }) => {
        return (
          <Todo
            key={todoId}
            todoId={todoId}
            finishTodo={finishTodo}
            deleteTodo={deleteTodo}
            {...todoAttributes}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
