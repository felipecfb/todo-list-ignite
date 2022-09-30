import { Flex } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Input } from './components/Input'

function App() {
    return (
      <Flex bg="background" direction="column">
        <Header />
        <Input />
      </Flex>
  )
}

export default App
