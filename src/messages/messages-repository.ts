import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }
    async findAll() {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }
    async create(message: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random()*999)
        messages[id] = {id, content: message};
        // Now we need to write this thing back into JSON file.
        await writeFile('messages.json', JSON.stringify(messages));
    }
    async delete(id: string): Promise<void> {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);

        if(messages[id]) {
            delete messages[id];
            await writeFile('messages.json', JSON.stringify(messages));
        }else {
            throw new Error(`Message with ID ${id} not found`);
        }
    }
}