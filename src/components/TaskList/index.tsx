import { Box, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { Body } from "./Body";
import { Header } from "./Header";

export function TaskList() {
  const [taskDone, setTaskDone] = useState(true);

  return (
    <Box maxW="736px" mx="auto" w="100%" mt="16">
      <Header />
      {!taskDone && <Divider colorScheme="gray.400" />}
      <Body />
    </Box>
  );
}
