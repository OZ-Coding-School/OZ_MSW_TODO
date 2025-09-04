import CustomButton from "../_common/CustomButton";
import styles from "./Todo.module.css";

const Todo = ({ todoId, content, isFinish, finishTodo }) => {
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
      <CustomButton
        className={styles.finishBtn}
        onClick={() => finishTodo(todoId)}
      >
        완료
      </CustomButton>
    </div>
  );
};

export default Todo;
