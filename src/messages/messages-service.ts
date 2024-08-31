import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages-repository";

@Injectable()
export class MessagesServices {
    // We want to add this class to DI container
    constructor(public messagesRepo: MessagesRepository) {

    }
    findOne(id: string) { 
        return this.messagesRepo.findOne(id);
    }
    findAll() {
        return this.messagesRepo.findAll();
    }
    create(message: string) {
        return this.messagesRepo.create(message);
    }
    async delete(id: string): Promise<void> {
        return this.messagesRepo.delete(id);
    }
}