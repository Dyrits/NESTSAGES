import { readFile, writeFile } from "fs/promises";

import { Message } from "./data-transfer-objects/message.dto";
class MessagesRepository {
  private messages: { [key: number]: Message } = {};

  constructor() {
    this.loadMessages().then(() => {
      console.info("The messages have been loaded from the JSON file.");
    });
  }

  private async loadMessages() {
    const file = await readFile("/data/messages.json", "utf-8");
    this.messages = JSON.parse(file);
  }

  private async saveMessages() {
    await writeFile("/data/messages.json", JSON.stringify(this.messages, null, 2));
  }

  public read(id: number): Message {
    return this.messages[id];
  }

  public readAll(): Message[] {
    return Object.values(this.messages).reduce((array, message) => {
      array.push(message);
      return array;
    }, []);
  }

  public write(message: Message): Message {
    this.messages[message.id] = message;
    this.saveMessages().then(() => {
      console.info(`The new message (${message.id}) has been saved to the JSON file.`);
    });
    return message;
  }
}

export default MessagesRepository;