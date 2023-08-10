import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewDetail } from './review.model';
import { ReveiwService } from './review.service';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';



@Controller('userreview')
export class ReviewController {
  TicgamesService: any;
  constructor(private readonly reviewService: ReveiwService) { }

  @Post('review')
  review(@Body() model: ReviewDetail): Promise<swagger_api_response> {
    return this.reviewService.review(model);
  }

}
