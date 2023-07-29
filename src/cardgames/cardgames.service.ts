import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cardgames } from './cardgames.entity';
// import { RegisterDetail } from './user.model';

@Injectable()
export class CardgamesService {
  // constructor(
  //   @InjectRepository(Cardgames)
  //   private _cardRepository: Repository<Cardgames>
  // ) { }

  // register(model: RegisterDetail): string {
  //   const user = this._userRepository.find({ where: { email: model.email } });
  //   if (user) {
  //     throw 'You have alredy registered, Please try to login'
  //   } else {
  //     this._userRepository.save({
  //       firstName: model.firstname,
  //       isActive: true,
  //       isDeleted: false,
  //       lastName: model.lastname
  //     });
  //     return 'You are registered successfully.'
  //   }
  //   return 'Hello World!';
  // }
}
