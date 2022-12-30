import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VilleModule } from './ville/ville.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ville } from './ville/entities/ville.entity';


@Module({
  imports: [VilleModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'pollutionvilles.cduljgrohepz.eu-central-1.rds.amazonaws.com',
    port: 5432,
    username: 'postgres',
    password: 'PGAWS5958',
    database: 'postgres',
    entities: [Ville],
    autoLoadEntities: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
