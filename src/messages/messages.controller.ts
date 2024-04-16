import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { NewMessage } from "./data-transfer-objects/new-message.dto";
import MessagesService from "./messages.service";

@Controller("messages")
export class MessagesController {
  private service: MessagesService;

  constructor() {
    // @TODO : Use dependency injection to inject the MessagesService.
    this.service = new MessagesService();
  }

  @Get()
  list() {
    return this.service.getAll();
  }

  @Get(":id")
  show(@Param("id") id: string) {
    return this.service.get(parseInt(id, 10));
  }

  @Post()
  store(@Body() message: NewMessage) {
    console.info("Received message:", message);
    return this.service.create(message);
  }
}
