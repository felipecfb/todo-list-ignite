import { Box, Divider } from "@chakra-ui/react";
import { Body } from "./Body";
import { Header } from "./Header";

type Task = {
  id: number;
  title: string;  
  done: boolean;
}

type Props = {
  tasks: Task[];
  deleteTask: (id: number) => void;
  doneTask: (id: number) => void;
}

export function TaskList({ tasks, deleteTask, doneTask }: Props) {
  return (
      <Box maxW="736px" mx="auto" w="100%" mt="16">
        <Header />
        {!tasks && <Divider colorScheme="gray.400" />}
        <Body tasks={tasks} deleteTask={deleteTask} doneTask={doneTask} />
      </Box>
  );
}
