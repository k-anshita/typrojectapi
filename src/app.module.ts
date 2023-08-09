import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { Cardgames } from './cardgames/cardgames.entity';
import { Ticgames } from './ticgames/ticgames.entity';
import { Numbergames } from './numbergames/numbergames.entity';
import { Review } from './review/review.entity';
import { Role } from './role/role.entity';
import { CardgamesModule } from './cardgames/cardgames.module';
import { NumbergamesModule } from './numbergames/numbersgames.module';
import { TicgamesModule } from './ticgames/ticgames.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'archivirani01',
      database: 'gaming',
      entities: [User, Cardgames, Ticgames, Numbergames, Review, Role],
      synchronize: true,
    }),
    UserModule,
    CardgamesModule,
    NumbergamesModule,
    TicgamesModule,
    ReviewModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
