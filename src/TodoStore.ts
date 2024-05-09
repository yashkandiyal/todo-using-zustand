import { create } from "zustand";

type Todos = {
  todos: string[];
  addTodo: (todo: string) => void;
  deleteTodo: (index: number) => void;
};

const TodoStore = create<Todos>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),
}));

export default TodoStore;
