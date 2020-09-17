import _ from "lodash";
import { ICodec, errorHandler } from "..";

export class UrlCodec implements ICodec {
  encode(input: string): string {
    if (_.isEmpty(input)) {
      return input;
    }

    return errorHandler.withError(() => encodeURI(input));
  }

  decode(input: string): string {
    if (_.isEmpty(input)) {
      return input;
    }

    return errorHandler.withError(() => decodeURI(input));
  }
}
