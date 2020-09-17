import _ from "lodash";
import { ICodec, errorHandler } from "..";

export class HtmlCodec implements ICodec {
  encode(input: string): string {
    if (_.isEmpty(input)) {
      return input;
    }

    return errorHandler.withError(() => {
      return input
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    });
  }

  decode(input: string): string {
    if (_.isEmpty(input)) {
      return input;
    }

    return errorHandler.withError(() => {
      return input
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
    });
  }
}
