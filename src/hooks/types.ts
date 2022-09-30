import { ReactNode } from "react";

export interface TaskProviderProps {
  children: ReactNode;
}

export type Task = {
  id: number;
  title: string;
  done: boolean;
};

export interface TaskContextProps {
  tasks: Task[];
  createTask: (title: string) => void;
}
