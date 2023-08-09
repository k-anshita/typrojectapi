import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticgames } from './ticgames.entity';
import { TicgamesController } from './ticgames.controller';
import { TicgamesService } from './ticgames.service';


@Module({
  imports: [TypeOrmModule.forFeature([Ticgames])],
  controllers: [TicgamesController],
  providers: [TicgamesService],
})
export class TicgamesModule { }
