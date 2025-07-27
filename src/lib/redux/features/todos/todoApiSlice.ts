import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TodoResponse = {
  id: number;
  title: string;
  completed: boolean;
};

const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodoResponse[], number>({ // <TodoResponse[], number> specifies the return type and the argument type
      query: (limit) => `/todos?_limit=${limit}`,
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
export default todoApi;
