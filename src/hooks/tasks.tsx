import { createContext, useContext, useState } from "react";
import { Task, TaskContextProps, TaskProviderProps } from "./types";

export const TaskContext = createContext({} as TaskContextProps);

function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(title: string) {
    const task: Task = {
      id: Math.random(),
      title,
      done: false,
    };

    setTasks([...tasks, task]);
  };

  return (
    <TaskContext.Provider
      value={{
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
