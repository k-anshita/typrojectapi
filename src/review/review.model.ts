import { ApiProperty } from "@nestjs/swagger";

export class ReviewDetail {
    @ApiProperty()
    name: string;
    @ApiProperty()
    message: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    subject: string;
    // iswin: Boolean;
    // isActive: boolean;
    // isdelete: boolean;
    // createdBy: number;
    // createdDate: Date;
    // modifyBy:number;
    // modifyDate:Date;
}

