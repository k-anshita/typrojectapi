import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cardgames } from './cardgames.entity';
import { CardgamesDetail } from './cardgames.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';


@Injectable()
export class CardgamesService {


  constructor(
    @InjectRepository(Cardgames)
    private _cardgameRepository: Repository<Cardgames>
  ) { }

  async cardgamehistory(model: CardgamesDetail): Promise<swagger_api_response> {
    const user = await this._cardgameRepository.find({ where: { userId: model.userId } });
    if (user) {
      await this._cardgameRepository.save({
        message: model.message,
        userId: model.userId,
        isActive: true,
        isDeleted: false,
        iswin: true,
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

  async getCardgamehistory(userId: number): Promise<swagger_api_response> {
    const history = await this._cardgameRepository.find({ where: { userId: userId } });
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
