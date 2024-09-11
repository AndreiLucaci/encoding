export interface IEncode {
  encode(input: string): string;
}

export interface IDecode {
  decode(input: string): string;
}

export interface ICodec extends IEncode, IDecode {}

export interface ICodecService {
  base64: ICodec;
  html: ICodec;
  json: ICodec;
  url: ICodec;
}
