import { Module } from '@nestjs/common';
import { CardgamesController } from './cardgames.controller';
import {CardgamesService } from './cardgames.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cardgames } from './cardgames.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Cardgames])],
  controllers: [CardgamesController],
  providers: [CardgamesService],
})
export class CardgamesModule { }
