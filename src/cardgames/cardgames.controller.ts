import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardgamesService } from './cardgames.service';
import { RegisterDetail } from './cardgames.model';

@Controller('cardgames')
export class CardgamesController {
  constructor(private readonly cardgamesService: CardgamesService) { }

  // @Post('register')
  // register(@Body() model: RegisterDetail): string {
  //   return this.cardgamesService.register(model);
  // }
}
