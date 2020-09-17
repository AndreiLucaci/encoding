import React from "react";
import { Paper, Typography, Link } from "@material-ui/core";
import "./App.css";

import Codec from "./components/codec";

function App() {
  return (
    <div className="App">
      <Codec />

      <Paper style={{ marginTop: 50, marginBottom: 10 }} elevation={0}>
        <Typography variant="subtitle1">
          by:{" "}
          <Link
            href="https://github.com/AndreiLucaci"
            className="orange"
            color="textSecondary"
          >
            AndreiLucaci
          </Link>
          , © {new Date().getFullYear()} Andrei Lucaci, All rights reserved.
        </Typography>
      </Paper>
    </div>
  );
}

export default App;
