import { Flex, Tag, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex align="center" justify="space-between" w="100%" mb="6">
      <Flex>
        <Text color="blue" mr="2">
          Tarefas criadas
        </Text>
        <Tag bg="gray.400" color="white">
          0
        </Tag>
      </Flex>
      <Flex>
        <Text color="purple" mr="2">
          Concluídas
        </Text>
        <Tag bg="gray.400" color="white">
          0
        </Tag>
      </Flex>
    </Flex>
  );
}
