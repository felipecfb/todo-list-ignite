import { Dispatch, ReactNode } from "react";

export interface TaskProviderProps {
  children: ReactNode;
}

export type Task = {
  id: number;
  title: string;
  done: boolean;
};

export interface TaskContextProps {
  title: string;
  setTitle: Dispatch<React.SetStateAction<string>>;
  tasks: Task[];
  createTask: (title: string) => void;
  deleteTask: (id: number) => void;
}
