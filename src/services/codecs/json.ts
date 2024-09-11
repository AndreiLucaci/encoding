import _ from "lodash";
import { ICodec, errorHandler } from "..";

export class JsonCodec implements ICodec {
  encode(input: string): string {
    if (_.isEmpty(input)) {
      return input;
    }

    return errorHandler.withError(() => JSON.stringify(input));
  }

  decode(input: string): string {
    if (_.isEmpty(input)) {
      return input;
    }

    return errorHandler.withError(() => JSON.parse(input));
  }
}
