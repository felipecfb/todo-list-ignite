import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TaskList } from "./components/TaskList";
import { useTask } from "./hooks/tasks";

function App() {
  const { tasks, createTask, deleteTask, doneTask } = useTask();

  const tasksCompleted = tasks.filter((task) => task.done).length;

  return (
    <Flex bg="background" direction="column" minH="100vh">
      <Header />
      <Input handleCreate={createTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        doneTask={doneTask}
        tasksCreated={tasks.length}
        tasksCompleted={tasksCompleted}
      />
    </Flex>
  );
}

export default App;
