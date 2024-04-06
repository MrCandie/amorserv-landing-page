import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>
);
