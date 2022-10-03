import { Flex, Tag, Text } from "@chakra-ui/react";

type Props = {
  tasksCreated: number;
  tasksCompleted: number;
};

export function Header({ tasksCreated, tasksCompleted }: Props) {
  return (
    <Flex align="center" justify="space-between" w="100%" mb="6">
      <Flex>
        <Text color="blue" mr="2">
          Tarefas criadas
        </Text>
        <Tag bg="gray.400" color="white">
          {tasksCreated}
        </Tag>
      </Flex>
      <Flex>
        <Text color="purple" mr="2">
          Concluídas
        </Text>
        <Tag bg="gray.400" color="white">
          {tasksCreated === 0 ? 0 : `${tasksCompleted} de ${tasksCreated}`}
        </Tag>
      </Flex>
    </Flex>
  );
}
