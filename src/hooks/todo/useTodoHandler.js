import { useEffect, useState } from "react";
import { useModal } from "../../context/ModalContext";

export const useTodoHandler = () => {
  const [todos, setTodos] = useState([]);
  const { openModal, closeModal } = useModal();

  const addTodo = async () => {
    const body = {
      todo: {
        id: todos.length,
        content: "프론트엔드 공부",
        isFinish: false,
      },
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
    setTodos((prev) =>
      prev.map((todo, _, origin) => {
        if (todo.todoId === todoId) {
          origin.isFinish = true;
        }
      })
    );
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
  }, []);
  return { todos, addTodo, finishTodo };
};
