import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { And, IsNull, Repository } from "typeorm";
import { Review } from './review.entity';
import { ReviewDetail } from './review.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';



@Injectable()
export class ReveiwService {
  constructor(
    @InjectRepository(Review)
    private _reviewRepository: Repository<Review>
  ) { }

  async review(model: ReviewDetail): Promise<swagger_api_response> {
    if (model.name == null || model.email == null || model.subject == null
      || model.message == null) {
      throw new Error('All Feilds are complusory,please fill it');
    }

    // const user = this._reviewRepository.find({ where: {} });
    // const loginuserFeild = this._reviewRepository.find({
    //   where: {
    //     name: IsNull(),
    //     message: IsNull(),
    //     email: IsNull(),
    //     subject: IsNull()
    //   }
    // })
    // if (user) {
    //   throw ''
    // }
    else {
      await this._reviewRepository.save({
        name: model.name,
        email: model.email,
        message: model.message,
        subject: model.subject,
        isActive: true,
        isDeleted: false,
        createdBy: 0,
        createdDate: new Date(),
        modifyBy: 0,
        modifyDate: new Date(),
      });
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'Thanks for review message!!';
      return data;
    }
  }
}
