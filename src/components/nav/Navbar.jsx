import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <img src="/todo.svg" alt="todo app logo" />
      <h1 className={styles.title}>OZ MSW Todo</h1>
    </div>
  );
};

export default Navbar;
