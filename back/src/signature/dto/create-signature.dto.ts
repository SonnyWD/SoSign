import { IsBoolean, IsDate, IsUUID } from "class-validator";


export class CreateSignatureDto {
    @IsUUID()
    id: string;

    @IsBoolean()
    statut: boolean;

    @IsDate()
    date: Date;

}
