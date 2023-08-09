import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDetail } from './user.model';
import { LoginDetail } from './user.model';
import { swagger_api_response } from 'src/common/swaggerApiResponse.entity';

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


}
