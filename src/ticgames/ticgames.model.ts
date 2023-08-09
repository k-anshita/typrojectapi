import { ApiProperty } from "@nestjs/swagger";

export class TicgamesDetail {
    @ApiProperty()
    message: string;
    @ApiProperty()
    userId: number;
}

