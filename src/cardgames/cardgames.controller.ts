import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardgamesService } from './cardgames.service';
import { CardgamesDetail } from './cardgames.model';

@Controller('cardwinner')
export class CardgamesController {
  constructor(private readonly cardgamesService: CardgamesService) { }

  @Post('cardgamehistory')
  cardgamehistory(@Body() model: CardgamesDetail): string {
    return this.cardgamesService.cardgamehistory(model);
  }
}
