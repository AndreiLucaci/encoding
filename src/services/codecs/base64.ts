import _ from "lodash";
import { ICodec, errorHandler } from "..";

export class Base64Codec implements ICodec {
  encode(input: string): string {
    if (_.isEmpty(input)) {
      return input;
    }

    return errorHandler.withError(() => btoa(input));
  }

  decode(input: string): string {
    if (_.isEmpty(input)) {
      return input;
    }

    return errorHandler.withError(() => atob(input));
  }
}
