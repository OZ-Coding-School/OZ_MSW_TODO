import TodoList from "./components/Todo/TodoList";
import { useTodoHandler } from "./hooks/todo/useTodoHandler";
import styles from "./App.module.css";
import Navbar from "./components/nav/Navbar";
import AddTodoSection from "./components/todo/AddTodoSection";

const TODOs = [
  { todoId: 1, content: "프론트", isFinish: false },
  { todoId: 2, content: "프론트", isFinish: true },
  { todoId: 3, content: "프론트", isFinish: false },
];

function App() {
  const { todos, addTodo, finishTodo, deleteTodo } = useTodoHandler();

  return (
    <div className={styles.app}>
      <Navbar />
      <AddTodoSection addTodo={addTodo} />
      <TodoList todos={TODOs} finishTodo={finishTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
