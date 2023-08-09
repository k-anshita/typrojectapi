import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { ReveiwService } from './review.service';
import { ReviewController } from './review.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  controllers: [ReviewController],
  providers: [ReveiwService],
})
export class ReviewModule { }
