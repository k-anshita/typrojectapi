import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NumbergamesController } from './numbergames.controller';
import { Numbergames } from './numbergames.entity';
import { NumbergamesService } from './numbergames.service';


@Module({
  imports: [TypeOrmModule.forFeature([Numbergames])],
  controllers: [NumbergamesController],
  providers: [NumbergamesService],
})
export class NumbergamesModule { }
