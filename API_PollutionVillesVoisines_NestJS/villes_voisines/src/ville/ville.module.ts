import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VilleService } from './ville.service';
import { VilleController } from './ville.controller';
import { Ville } from './entities/ville.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Ville])],
  exports: [TypeOrmModule],
  controllers: [VilleController],
  providers: [VilleService]
})
export class VilleModule {}
