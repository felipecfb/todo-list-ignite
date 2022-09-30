import { Button, Flex, Input as ChakraInput, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export function Input() {
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
      />
      <Button
        bg="blueDark"
        p="4"
        minH="54px"
        borderRadius="8px"
        _hover={{
          bg: "blue",
        }}
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
