import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { And, IsNull, Repository } from "typeorm";
import { NumbergamesDetail } from './numbergames.model';
import { Numbergames } from './numbergames.entity';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';



@Injectable()
export class NumbergamesService {

  constructor(
    @InjectRepository(Numbergames)
    private _numbergameRepository: Repository<Numbergames>
  ) { }

  async numbergames(model: NumbergamesDetail): Promise<swagger_api_response> {
    const user = this._numbergameRepository.find({ where: { userId: model.userId } });
    if (user) {
      await this._numbergameRepository.save({
        message: model.message,
        userId: model.userId,
        iswin: true,
        isActive: true,
        isDeleted: false,
        createdBy: 0,
        createdDate: new Date(),
        modifyBy: 0,
        modifyDate: new Date(),
        roleId: 2
      });
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'game report is added!';
      return data;
    }
    else {
      throw new Error('user does not exists')
    }

  }


}
