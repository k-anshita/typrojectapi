import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CardgamesService } from './cardgames.service';
import { CardgamesDetail } from './cardgames.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';

@Controller('cardwinner')
export class CardgamesController {
  constructor(private readonly cardgamesService: CardgamesService) { }

  @Post('cardgamehistory')
  cardgamehistory(@Body() model: CardgamesDetail): Promise<swagger_api_response> {
    return this.cardgamesService.cardgamehistory(model);
  }

  @Get('cardgamehistory')
  getCardgamehistory(@Query('userId', new ParseIntPipe()) userId: number): Promise<swagger_api_response> {
    return this.cardgamesService.getCardgamehistory(userId);
  }
}
