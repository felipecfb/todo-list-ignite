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
}

export function TaskList({ tasks }: Props) {
  return (
      <Box maxW="736px" mx="auto" w="100%" mt="16">
        <Header />
        {!tasks && <Divider colorScheme="gray.400" />}
        <Body tasks={tasks} />
      </Box>
  );
}
