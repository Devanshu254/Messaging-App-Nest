import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages-service';

@Controller('/messages')
export class MessagesController {
    constructor(public messagesService: MessagesServices) {}

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body() body: createMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessages(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }

    @Delete('/:id')
    deleteMessage(@Param('id') id: string) {
        return this.messagesService.delete(id);
    }

    @Put('/:id')
    updateMessages(@Param('id') id: string, @Body() body: createMessageDto) {
        return this.messagesService.update(id, body.content);
    }
}
