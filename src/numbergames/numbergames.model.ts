import { ApiProperty } from "@nestjs/swagger";

export class NumbergamesDetail {
    @ApiProperty()
    message: string;
    @ApiProperty()
    userId: number;

}

