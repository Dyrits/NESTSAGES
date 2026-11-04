import { Test, TestingModule } from "@nestjs/testing";
import { MessagesController } from "./messages.controller";
import MessagesService from "./messages.service";

describe("MessagesController", () => {
  let controller: MessagesController;
  const message = { id: 42, content: "Fixture", author: "Test" };
  const service = { getAll: jest.fn(() => [message]), get: jest.fn(() => message), create: jest.fn(() => message) };
  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [{ provide: MessagesService, useValue: service }]
    }).compile();
    controller = module.get<MessagesController>(MessagesController);
  });
  it("lists messages through the service", () => { expect(controller.list()).toEqual([message]); });
  it("reads the numeric identifier through the service", async () => {
    expect(await controller.show("42")).toEqual(message);
    expect(service.get).toHaveBeenCalledWith(42);
  });
  it("creates a message through the service", () => {
    const input = { content: "Fixture", author: "Test" };
    expect(controller.store(input)).toEqual(message);
    expect(service.create).toHaveBeenCalledWith(input);
  });
});
