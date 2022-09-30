import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Image, Tag, Text } from "@chakra-ui/react";
import { useState } from "react";

import NoHaveTasks from "../../assets/noHaveTasks.svg";
import { useTask } from "../../hooks/tasks";

export function Body() {
  const [taskDone, setTaskDone] = useState(true);

  const { tasks } = useTask();

  return (
    <Flex justify="center" align="center">
      {tasks ? (
        tasks.map((task) => (
            <Flex
              align="center"
              justify="space-between"
              bg="gray.500"
              p="4"
              boxShadow="inset 0px 0px 0px 1px #333333"
              borderRadius="8px"
              my="3"
            >
              <HStack spacing={3}>
                <Tag
                  bg={task.done ? "purple" : "none"}
                  borderWidth={2}
                  borderColor={task.done ? "purple" : "blue"}
                  borderRadius="100%"
                  size="md"
                >
                  {task.done && <CheckIcon color="white" w={2} h={2} />}
                </Tag>
                <Text
                  color={task.done ? "gray.300" : "gray.100"}
                  as={task.done ? "s" : "abbr"}
                >
                  Integer urna interdum massa libero auctor neque turpis turpis
                  semper. Duis vel sed fames integer.
                </Text>
                <DeleteIcon color="gray.300" />
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
