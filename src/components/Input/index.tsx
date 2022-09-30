import { Button, Flex, Input as ChakraInput, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useTask } from "../../hooks/tasks";

export function Input() {
  const { createTask } = useTask();

  const [task, setTask] = useState("");

  function handleCreate() {
    createTask(task);
  }

  return (
    <Flex minHeight="54px" maxW="736px" mx="auto" w="100%" mt="-27px">
      <ChakraInput
        placeholder="Adicione uma nova tarefa"
        _placeholder={{
          color: "gray.300",
        }}
        bg="gray.500"
        color="gray.300"
        minH="54px"
        mr="2"
        border="none"
        borderRadius="8px"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        bg="blueDark"
        p="4"
        minH="54px"
        borderRadius="8px"
        _hover={{
          bg: "blue",
        }}
        onClick={handleCreate}
      >
        <Text color="white" fontSize={14} mr="2">
          Criar
        </Text>
        <AddIcon
          w={4}
          h={4}
          color="white"
          p="2px"
          borderWidth={1.5}
          borderColor="white"
          borderRadius="100%"
        />
      </Button>
    </Flex>
  );
}
