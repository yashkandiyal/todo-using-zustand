import { create } from "zustand";

type Todos = {
  todos: { text: string; completed: boolean }[];
  addTodo: (todo: string) => void;
  deleteTodo: (index: number) => void;
  toggleStatus: (index: number) => void;
};

const TodoStore = create<Todos>((set) => ({

  todos: [],
  
  addTodo: (todo) =>
    set((state) => ({
      
       todos: [...state.todos, { text: todo, completed: false }],
    })),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),
  toggleStatus: (index) =>
    set((state) => ({
      todos: state.todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));

export default TodoStore;
