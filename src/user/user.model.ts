import { ApiProperty } from "@nestjs/swagger";

export class RegisterDetail {
    @ApiProperty()
    firstname: string;
    @ApiProperty()
    lastname: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    gender: string;
    @ApiProperty()
    date: string;
}

export class LoginDetail {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}