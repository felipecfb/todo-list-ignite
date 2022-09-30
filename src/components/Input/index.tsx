import { Button, Flex, Input as ChakraInput, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useTask } from "../../hooks/tasks";

type Props = {
  handleCreate: (title: string) => void;
}

export function Input({ handleCreate }: Props) {
  const { title, setTitle } = useTask();

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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        bg="blueDark"
        p="4"
        minH="54px"
        borderRadius="8px"
        _hover={{
          bg: "blue",
        }}
        onClick={() => handleCreate(title)}
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
