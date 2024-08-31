import { IsNumber, IsString } from "class-validator";

export class createMessageDto {
    @IsString()
    content: string;
}