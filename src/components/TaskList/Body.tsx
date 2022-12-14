import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Flex, HStack, Image, Tag, Text } from "@chakra-ui/react";

import NoHaveTasks from "../../assets/noHaveTasks.svg";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

type Props = {
  tasks: Task[];
  deleteTask: (id: number) => void;
  doneTask: (id: number) => void;
};

export function Body({ tasks, deleteTask, doneTask }: Props) {
  console.log(tasks);

  return (
    <Flex justify="center" align="center" direction="column">
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <Flex
            w="100%"
            bg="gray.500"
            p="4"
            boxShadow="inset 0px 0px 0px 1px #333333"
            borderRadius="8px"
            my="3"
            key={task.id}
          >
            <HStack spacing={3} align="center" justify="space-between" w="100%">
              <Tag
                bg={task.done ? "purple" : "none"}
                borderWidth={2}
                borderColor={task.done ? "purple" : "blue"}
                borderRadius="100%"
                size="md"
                cursor="pointer"
                onClick={() => doneTask(task.id)}
              >
                {task.done && <CheckIcon color="white" w={2} h={2} />}
              </Tag>
              <Text
                color={task.done ? "gray.300" : "gray.100"}
                as={task.done ? "s" : "abbr"}
              >
                {task.title}
              </Text>
              <DeleteIcon
                color="gray.300"
                cursor="pointer"
                onClick={() => deleteTask(task.id)}
              />
            </HStack>
          </Flex>
        ))
      ) : (
        <Flex direction="column" align="center" justify="center" py="16">
          <Image src={NoHaveTasks} mb="4" />
          <Text color="gray.300" fontWeight="bold">
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text color="gray.300">
            Crie tarefas e organize seus itens a fazer
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
