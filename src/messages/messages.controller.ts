import { Body, Controller, Get, Param, Post, NotFoundException } from "@nestjs/common";

import { NewMessage } from "./data-transfer-objects/new-message.dto";
import MessagesService from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(public service: MessagesService) {}

  @Get()
  list() {
    return this.service.getAll();
  }

  @Get(":id")
  async show(@Param("id") id: string) {
    const message = this.service.get(parseInt(id, 10));
    return message || new NotFoundException(`No message with the identifier ${id} was found.`);
  }

  @Post()
  store(@Body() message: NewMessage) {
    console.info("Received message:", message);
    return this.service.create(message);
  }
}
