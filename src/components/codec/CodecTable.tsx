import React from "react";
import {
  Paper,
  Typography,
  ButtonGroup,
  Button,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";

import { codecService } from "../../services";

type CodecTableType = {
  onClick: (action: (input: string) => string) => void;
};

export const CodecTable = (props: CodecTableType) => {
  const { onClick } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Codec</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <Typography variant="button">URL Codec</Typography>
            </TableCell>
            <TableCell align="center">
              <ButtonGroup
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
              >
                <Button onClick={() => onClick(codecService.url.encode)}>
                  encode
                </Button>
                <Button onClick={() => onClick(codecService.url.decode)}>
                  decode
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <Typography variant="button">HTML Codec</Typography>
            </TableCell>
            <TableCell align="center">
              <ButtonGroup
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
              >
                <Button onClick={() => onClick(codecService.html.encode)}>
                  encode
                </Button>
                <Button onClick={() => onClick(codecService.html.decode)}>
                  decode
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <Typography variant="button">Base64 Codec</Typography>
            </TableCell>
            <TableCell align="center">
              <ButtonGroup
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
              >
                <Button onClick={() => onClick(codecService.base64.encode)}>
                  encode
                </Button>
                <Button onClick={() => onClick(codecService.base64.decode)}>
                  decode
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CodecTable;
