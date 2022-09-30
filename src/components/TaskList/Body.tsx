import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Image, Tag, Text } from "@chakra-ui/react";
import { useState } from "react";

import NoHaveTasks from "../../assets/noHaveTasks.svg";

export function Body() {
  const [haveTasks, setHaveTasks] = useState(true);
  const [taskDone, setTaskDone] = useState(false);

  return (
    <Flex justify="center" align="center">
      {haveTasks ? (
        <Flex direction="column" align="center" justify="center">
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
                bg={taskDone ? "purple" : "none"}
                borderWidth={2}
                borderColor={taskDone ? "purple" : "blue"}
                borderRadius="100%"
                size="md"
              >
                {taskDone && <CheckIcon color="white" w={2} h={2} />}
              </Tag>
              <Text
                color={taskDone ? "gray.300" : "gray.100"}
                as={taskDone ? "s" : "abbr"}
              >
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </Text>
              <DeleteIcon color="gray.300" />
            </HStack>
          </Flex>
          <Flex
            align="center"
            justify="space-between"
            bg="gray.500"
            p="4"
            boxShadow="inset 0px 0px 0px 1px #333333"
            borderRadius="8px"
          >
            <HStack spacing={3}>
              <Tag
                bg={taskDone ? "purple" : "none"}
                borderWidth={2}
                borderColor={taskDone ? "purple" : "blue"}
                borderRadius="100%"
                size="md"
              >
                {taskDone && <CheckIcon color="white" w={2} h={2} />}
              </Tag>
              <Text
                color={taskDone ? "gray.300" : "gray.100"}
                as={taskDone ? "s" : "abbr"}
              >
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </Text>
              <DeleteIcon color="gray.300" />
            </HStack>
          </Flex>
        </Flex>
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
