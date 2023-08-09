import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicgamesService } from './ticgames.service';
import { TicgamesDetail } from './ticgames.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';


@Controller('ticwinner')
export class TicgamesController {
  TicgamesService: any;
  constructor(private readonly ticgamesService: TicgamesService) { }

  @Post('ticgamehistory')
  ticgamehistory(@Body() model: TicgamesDetail): Promise<swagger_api_response> {
    return this.ticgamesService.ticgamehistory(model);
  }

}
