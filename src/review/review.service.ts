import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { And, IsNull, Repository } from "typeorm";
import { Review } from './review.entity';
import { ReviewDetail } from './review.model';



@Injectable()
export class ReveiwService {
  constructor(
    @InjectRepository(Review)
    private _reviewRepository: Repository<Review>
  ) { }

  review(model: ReviewDetail): string {
    const user = this._reviewRepository.find({ where: {} });
    const loginuserFeild = this._reviewRepository.find({
      where: {
        name: IsNull(),
        message: IsNull(),
        email: IsNull(),
        subject: IsNull()
      }
    })
    if (user) {
      throw ''
    } else {
      this._reviewRepository.save({
        name: model.name,
        email: model.email,
        message: model.message,
        subject: model.subject,
        isActive: true,
        isDeleted: false,
      });
      return 'You are registered successfully.'
    }
  }
}
