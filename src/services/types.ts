export interface IEncode {
  encode(input: string): string;
}

export interface IDecode {
  decode(input: string): string;
}

export interface ICodec extends IEncode, IDecode {}

export interface ICodecService {
  html: ICodec;
  url: ICodec;
  base64: ICodec;
}
