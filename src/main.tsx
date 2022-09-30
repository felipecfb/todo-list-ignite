import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import { theme } from "./styles/theme";
import { TaskProvider } from "./hooks/tasks";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ChakraProvider>
  </React.StrictMode>
);
