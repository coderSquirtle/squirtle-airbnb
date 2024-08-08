import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@/assets/css/index.less";
import "normalize.css";

import { HashRouter } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

// 主题的设置
import theme from "./assets/theme";
import { ThemeProvider } from "styled-components";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>

  // </React.StrictMode>
);
