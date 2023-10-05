import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { And, IsNull, Repository } from "typeorm";
import { User } from './user.entity';
import { RegisterDetail } from './user.model';
import { LoginDetail } from './user.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _userRepository: Repository<User>
  ) { }

  async register(model: RegisterDetail): Promise<swagger_api_response> {
    const user = await this._userRepository.findOne({ where: { email: model.email, username: model.username } });
    // const userfeild = this._userRepository.findOne({
    //   where: {
    //     firstname: IsNull(),
    //     lastname: IsNull(),
    //     email: IsNull(),
    //     username: IsNull(),
    //     password: IsNull(),
    //     gender: IsNull(),
    //     date: IsNull()
    //   }
    // });
    if (model.firstname == null || model.lastname == null || model.date == null
      || model.email == null || model.gender == null || model.username == null
      || model.password == null) {
      throw new Error('All Feilds are complusory,please fill it');
    }

    if (user) {
      throw new Error('You have alredy registered, Please try to login');
    }
    else {
      await this._userRepository.save({
        firstname: model.firstname,
        isActive: true,
        isDeleted: false,
        lastname: model.lastname,
        email: model.email,
        username: model.username,
        password: model.password,
        gender: model.gender,
        date: model.date,
        createdBy: 0,
        createdDate: new Date(),
        modifyBy: 0,
        modifyDate: new Date(),
        roleId: 2
      });
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'You are registered successfully.';
      return data;
    }
  }

  async login(model: LoginDetail): Promise<swagger_api_response> {
    if (model.username == null || model.password == null) {
      throw new Error('All Feilds are complusory,please fill it');
    }
    const loginuser = await this._userRepository.findOne({ where: { username: model.username, password: model.password } });

    if (!loginuser) {
      throw new Error('your email or password wrong');
    }
    else {
      // await this._userRepository.save({
      //   username: model.username,
      //   password: model.password,
      // });
      // return 'login successfully'
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'You are login successfully.';
      data.data = loginuser;
      return data;
    }

  }

  // async login(model: LoginDetail): Promise<swagger_api_response> {
  //   this.http.get<register[]>(`http://localhost:3000/api/user/register?username=${model.username}&password=${model.password}`,{observe:'response'})
  //   .subscribe((x)=>{
  //     if(x){
  //       return 'success'
  //     }
  //   })
   
  //   }

  async profile(model: RegisterDetail): Promise<swagger_api_response> {
    const user = await this._userRepository.findOne({ where: { id: model.id, username: model.username } });
    // const userfeild = this._userRepository.findOne({
    //   where: {
    //     firstname: IsNull(),
    //     lastname: IsNull(),
    //     email: IsNull(),
    //     username: IsNull(),
    //     password: IsNull(),
    //     gender: IsNull(),
    //     date: IsNull()
    //   }
    // });
    if (model.firstname == null || model.lastname == null || model.date == null ||
      model.gender == null) {
      throw new Error('All Fields are compulsory, please fill it');
    }

    if (!user) {
      throw new Error('User does not exist, Please contact administrator.');
    }
    else {
      const updateDetail = {
        ...user,
        firstname: model.firstname,
        lastname: model.lastname,
        email: model.email,
        gender: model.gender,
        date: model.date,
        modifyBy: user.id,
        modifyDate: new Date(),
      };
      await this._userRepository.update(user.id, updateDetail);
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'Your profile details are updated successfully.';
      delete updateDetail.password;
      data.data = updateDetail;
      return data;
    }
  }

  async deleteProfile(id: number): Promise<swagger_api_response> {
    if (!id) {
      throw new Error('Please contact admin');
    }
    const loginuser = await this._userRepository.findOne({ where: { id: id } });

    if (!loginuser) {
      throw new Error('Invalid detail, You can\'t permitted to delete your profile');
    }
    else {
      await this._userRepository.delete(loginuser);
      delete loginuser.password;
      const data = new swagger_api_response();
      data.code = 200;
      data.isSuccess = true;
      data.message = 'You are login successfully.';
      data.data = loginuser;
      return data;
    }

  }
}
