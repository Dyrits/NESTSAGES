import { IsNotEmpty, IsNumber } from "class-validator";

import { NewMessage } from "./new-message.dto";

export class Message extends NewMessage {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;
}
