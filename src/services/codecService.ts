import { Base64Codec, HtmlCodec, JsonCodec, UrlCodec } from "./codecs";
import { ICodecService, ICodec } from "./types";

class CodecService implements ICodecService {
  base64: ICodec = new Base64Codec();
  html: ICodec = new HtmlCodec();
  json: ICodec = new JsonCodec();
  url: ICodec = new UrlCodec();
}

export const codecService: ICodecService = new CodecService();
