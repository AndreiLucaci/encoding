import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "fontsource-roboto";

const theme = createMuiTheme({
  palette: {
    background: {
      paper: "#2a312a",
    },
    primary: {
      main: "#f4900e",
      contrastText: "#28382b",
    },
    text: {
      primary: "#f6f6f6",
      secondary: "#f1802d",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </div>
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
