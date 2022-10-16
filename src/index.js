import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </Provider>
);
