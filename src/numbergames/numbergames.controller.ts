import { Body, Controller, Get, Post } from '@nestjs/common';
import { NumbergamesDetail } from './numbergames.model';
import { NumbergamesService } from './numbergames.service';


@Controller('numberwinner')
export class NumbergamesController {
  constructor(private readonly numbergamesService: NumbergamesService) { }

  @Post('numbergames')
  numbergames(@Body() model: NumbergamesDetail): string {
    return this.numbergamesService.numbergames(model);
  }
}
