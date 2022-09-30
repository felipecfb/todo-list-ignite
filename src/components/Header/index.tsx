import { Flex, Image } from "@chakra-ui/react";

import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Flex justify="center" align="center" h={200} w="100%" bg="gray.700">
      <Image src={Logo} />
    </Flex>
  );
}
