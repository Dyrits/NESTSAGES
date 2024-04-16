import { NewMessage } from "./data-transfer-objects/new-message.dto";
import MessagesRepository from "./messages.repository";
import { Message } from "./data-transfer-objects/message.dto";

class MessagesService {
  private repository: MessagesRepository;

  constructor() {
    // @TODO : Use dependency injection to inject the MessagesRepository.
    this.repository = new MessagesRepository();
  }

  public get(id: number) {
    return this.repository.read(id);
  }

  public getAll() {
    return this.repository.readAll();
  }

  public create(message: NewMessage) {
    const id = Math.floor(Math.random() * 100000);
    const author = message.author || "Anonymous";
    const $message: Message = { ...message, id, author };
    return this.repository.write($message);
  }
}

export default MessagesService;
