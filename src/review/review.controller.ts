import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewDetail } from './review.model';
import { ReveiwService } from './review.service';



@Controller('userreview')
export class ReviewController {
  TicgamesService: any;
  constructor(private readonly reviewService: ReveiwService) { }

  @Post('review')
  review(@Body() model: ReviewDetail): string {
    return this.reviewService.review(model);
  }

}
