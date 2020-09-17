import React, { useState } from "react";

import { Typography, TextField, Container } from "@material-ui/core";

import CodecTable from "./CodecTable";

const Codec = () => {
  const [input, setInput] = useState("");

  const onClick = (action: (input: string) => string) => {
    const result = action(input);

    setInput(result);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInput(event.target.value);
  };

  return (
    <Container>
      <Typography
        variant="h2"
        style={{
          position: "relative",
          top: 0,
        }}
        color="textPrimary"
      >
        Encoding / decoding utility service
      </Typography>

      <TextField
        color={"primary"}
        id="filled-multiline-static"
        label="Working zone"
        multiline
        value={input}
        rows={14}
        onChange={handleChange}
        style={{
          margin: "20px 0 20px 0",
        }}
        fullWidth={true}
        placeholder="Insert your text here"
        variant="standard"
      />

      <div style={{ margin: "20px 0 10px 0" }}>
        <Typography
          variant="h5"
          color="textPrimary"
          style={{
            marginBottom: 20,
          }}
        >
          {" "}
          Choose your codec{" "}
        </Typography>
      </div>

      <CodecTable onClick={onClick} />
    </Container>
  );
};

export default Codec;
