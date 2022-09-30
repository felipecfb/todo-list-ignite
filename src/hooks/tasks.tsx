import { createContext, useContext, useState } from "react";
import { Task, TaskContextProps, TaskProviderProps } from "./types";

export const TaskContext = createContext({} as TaskContextProps);

function TaskProvider({ children }: TaskProviderProps) {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(title: string) {
    const task: Task = {
      id: Math.random(),
      title,
      done: false,
    };

    setTasks([...tasks, task]);

    setTitle("");
  }

  return (
    <TaskContext.Provider
      value={{
        title,
        setTitle,
        tasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTask() {
  const context = useContext(TaskContext);

  return context;
}

export { TaskProvider, useTask };
