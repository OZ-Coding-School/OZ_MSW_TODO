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
];
