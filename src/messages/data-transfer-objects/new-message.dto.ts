import { IsNotEmpty, IsString } from "class-validator";

export class NewMessage {
  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;
}