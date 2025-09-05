import { useEffect, useState } from "react";
import { useModal } from "../../context/ModalContext";

export const useTodoHandler = () => {
  const { openModal, closeModal } = useModal();
  const [todos, setTodos] = useState([]);
  const [todoGetTrigger, setTodoGetTrigger] = useState(0);

  const addTodo = async (newTodo) => {
    const body = {
      todo: newTodo,
    };
    try {
      const response = await fetch("/todo", {
        method: "POST",
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error("Failed to add todo");
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      const modalData = {
        modalId: "addTodoError",
        mode: "alert",
        title: "Todo 추가 실패",
        contents: "Todo를 추가하는데 실패했습니다. 다시 시도해주세요.",
        isFinish: false,
        confirmAction: () => closeModal("addTodoError"),
      };
      openModal(modalData);
      console.log(error);
    }
  };

  const finishTodo = (todoId) => {
    setTodos((prev) => {
      prev.forEach((todo, idx, origin) => {
        if (todo.todoId === todoId) {
          origin[idx].isFinish = !origin[idx].isFinish;
        }
      });
      return [...prev];
    });
  };

  const deleteTodo = async (todoId) => {
    try {
      const response = await fetch(`/todo/${todoId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete todo");
      setTodoGetTrigger((prev) => prev + 1);
    } catch (error) {
      const modalData = {
        modalId: "deleteTodoError",
        mode: "alert",
        title: "Todo 삭제 실패",
        contents: "Todo를 삭제하는데 실패했습니다. 다시 시도해주세요.",
        confirmAction: () => closeModal("deleteTodoError"),
      };
      openModal(modalData);
      console.log(error);
    }
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch("/todo", { method: "GET" });

        if (!response.ok) throw new Error("Failed to fetch todos");
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        const modalData = {
          modalId: "getTodoError",
          mode: "alert",
          title: "Todo 가져오기 실패",
          contents: "Todo 내용을 가져오는데 실패했습니다. 다시 시도 해주세요.",
          confirmAction: () => closeModal("getTodoError"),
        };
        openModal(modalData);
        console.log(error);
      }
    };
    getTodos();
  }, [todoGetTrigger]);

  return { todos, addTodo, finishTodo, deleteTodo };
};
