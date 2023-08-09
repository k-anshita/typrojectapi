import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { And, IsNull, Repository } from "typeorm";
import { NumbergamesDetail } from './numbergames.model';
import { Numbergames } from './numbergames.entity';



@Injectable()
export class NumbergamesService {

  constructor(
    @InjectRepository(Numbergames)
    private _numbergameRepository: Repository<Numbergames>
  ) { }

  numbergames(model: NumbergamesDetail): string {
    const user = this._numbergameRepository.find({ where: { userId: model.userId } });
    if (user) {
      // throw ''
      this._numbergameRepository.save({
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
      return 'You are registered successfully.'
    }
    // else {
    //   this._numbergameRepository.save({
    //     message: model.message,
    //     userId: model.userId,
    //     iswin: true,
    //     isActive: true,
    //     isDeleted: false,
    //   });
    //   return 'You are registered successfully.'
    // }

  }


}
