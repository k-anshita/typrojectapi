import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDetail } from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  register(@Body() model: RegisterDetail): string {
    return this.userService.register(model);
  }
}
