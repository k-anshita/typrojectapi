import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { And, IsNull, Repository } from "typeorm";
import { Ticgames } from './ticgames.entity';
import { TicgamesDetail } from './ticgames.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';


@Injectable()
export class TicgamesService {
  constructor(
    @InjectRepository(Ticgames)
    private _ticgameRepository: Repository<Ticgames>
  ) { }

  async ticgamehistory(model: TicgamesDetail): Promise<swagger_api_response> {
    const user = await this._ticgameRepository.find({ where: { userId: model.userId } });
    if (user) {
      await this._ticgameRepository.save({
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
      // return 'You are registered successfully.'
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'game report is added!';
      return data;
    }
    else {
      // this._ticgameRepository.save({
      //   message: model.message,
      //   userId: model.userId,
      //   iswin: true,
      //   isActive: true,
      //   isDeleted: false,

      // });
      // return 'You are registered successfully.'
      // const data = new swagger_api_response();
      // data.code = 200;
      // data.isSuccess = true;
      // data.message = 'You are login successfully.';
      throw new Error('user does not exists')

    }
    // return 'Hello World!';

  }
  
  async getTicgamehistory(userId: number): Promise<swagger_api_response> {
    const history = await this._ticgameRepository.find({ where: { userId: userId } });
    if (history) {
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'game report is added!';
      data.data = history;
      return data;
    }
    else {
      throw new Error('user does not exists')
    }
  }
}
