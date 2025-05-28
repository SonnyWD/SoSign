import { IsDate, IsString, IsUUID } from "class-validator";

export class CreateSeanceDto {
    @IsUUID()
    id: string;

    @IsDate()
    date: Date;

    @IsString()
    lieu: string;
}
