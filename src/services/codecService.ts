import { Base64Codec, HtmlCodec, UrlCodec } from "./codecs";
import { ICodecService, ICodec } from "./types";

class CodecService implements ICodecService {
  html: ICodec = new HtmlCodec();
  url: ICodec = new UrlCodec();
  base64: ICodec = new Base64Codec();
}

export const codecService: ICodecService = new CodecService();
