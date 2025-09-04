import { useState } from "react";
import AddTodoBtn from "./AddTodoBtn";
import styles from "./AddTodoSection.module.css";

const AddTodoSection = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <div className={styles.container}>
      <input type="text" value={newTodo} onChange={handleInput} />
      <AddTodoBtn onClick={addTodo} />
    </div>
  );
};

export default AddTodoSection;
