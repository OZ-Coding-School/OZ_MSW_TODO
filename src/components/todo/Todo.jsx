import CustomButton from "../_common/CustomButton";
import styles from "./Todo.module.css";

const Todo = ({ todoId, content, isFinish, finishTodo, deleteTodo }) => {
  return (
    <div className={styles.todo}>
      <div
        className={`${styles.todoText} ${
          isFinish ? styles.todoFinish : styles.todoNotFinish
        }`}
      >
        <p>{todoId}.</p>
        <p className={styles.todoContent}>{content}</p>
      </div>
      <div className={styles.buttonGroup}>
        <CustomButton
          className={styles.finishBtn}
          onClick={() => finishTodo(todoId)}
        >
          완료
        </CustomButton>
        <CustomButton
          className={styles.deleteBtn}
          onClick={() => deleteTodo(todoId)}
        >
          삭제
        </CustomButton>
      </div>
    </div>
  );
};

export default Todo;
