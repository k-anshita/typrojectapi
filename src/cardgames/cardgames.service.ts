import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cardgames } from './cardgames.entity';
import { CardgamesDetail } from './cardgames.model';


@Injectable()
export class CardgamesService {


  constructor(
    @InjectRepository(Cardgames)
    private _cardgameRepository: Repository<Cardgames>
  ) { }

  cardgamehistory(model: CardgamesDetail): string {
    const user = this._cardgameRepository.find({ where: { userId: model.userId } });
    if (user) {
      this._cardgameRepository.save({
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
      return 'You are registered successfully.'
    }
  }
}
