import { Flex } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TaskList } from './components/TaskList'

function App() {
    return (
      <Flex bg="background" direction="column" minH="100vh">
        <Header />
        <Input />
        <TaskList />
      </Flex>
  )
}

export default App
