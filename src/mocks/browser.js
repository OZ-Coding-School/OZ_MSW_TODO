import { HttpResponse, http } from "msw";

const todos = [
  { todoId: 1, content: "프론트", isFinish: false },
  { todoId: 2, content: "프론트", isFinish: true },
  { todoId: 3, content: "프론트", isFinish: false },
];

export const handlers = [
  // 가져오기
  http.get("/todo", () => {
    return HttpResponse.json(
      {
        todos,
      },
      { status: 200 }
    );
  }),
  // 추가
  http.post("/todo", async ({ request }) => {
    const { todo } = await request.json();
    console.log(todo);
    const newTodo = {
      todoId: todos.length ? todos[todos.length - 1].todoId + 1 : 1,
      content: todo,
      isFinish: false,
    };
    todos.push(newTodo);
    return HttpResponse.json({
      message: "Todo added successfully",
      todos,
    });
  }),
];
