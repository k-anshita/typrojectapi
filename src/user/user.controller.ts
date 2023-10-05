import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDetail } from './user.model';
import { LoginDetail } from './user.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';

type NewType = swagger_api_response;

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  async register(@Body() model: RegisterDetail): Promise<swagger_api_response> {
    return await this.userService.register(model);
  }

  @Post('login')
  async login(@Body() model: LoginDetail): Promise<swagger_api_response> {
    return await this.userService.login(model)
  }

  @Put('profile')
  async profile(@Body() model: RegisterDetail): Promise<swagger_api_response> {
    return await this.userService.profile(model);
  }

  @Delete('profile/:id')
  async deleteProfile(@Param('id', new ParseIntPipe()) id: number): Promise<NewType> {
    return await this.userService.deleteProfile(id);
  }

}
