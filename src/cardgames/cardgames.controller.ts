import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
