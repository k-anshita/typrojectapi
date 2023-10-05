import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { NumbergamesDetail } from './numbergames.model';
import { NumbergamesService } from './numbergames.service';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';


@Controller('numberwinner')
export class NumbergamesController {
  constructor(private readonly numbergamesService: NumbergamesService) { }

  @Post('numbergames')
  numbergames(@Body() model: NumbergamesDetail): Promise<swagger_api_response> {
    return this.numbergamesService.numbergames(model);
  }
  @Get('numbergames')
  getnumbergamehistory(@Query('userId', new ParseIntPipe()) userId: number): Promise<swagger_api_response> {
    return this.numbergamesService.getnumbergamehistory(userId);
  }
}
