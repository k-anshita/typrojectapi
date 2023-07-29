import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from './user.entity';
import { RegisterDetail } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _userRepository: Repository<User>
  ) { }

  register(model: RegisterDetail): string {
    const user = this._userRepository.find({ where: { email: model.email } });
    if (user) {
      throw 'You have alredy registered, Please try to login'
    } else {
      this._userRepository.save({
        firstName: model.firstname,
        isActive: true,
        isDeleted: false,
        lastName: model.lastname,
        email:model.email,
        username:model.username,
        password:model.password,
        gender:model.gender,
        date:model.date
      });
      return 'You are registered successfully.'
    }
    return 'Hello World!';
  }
}
