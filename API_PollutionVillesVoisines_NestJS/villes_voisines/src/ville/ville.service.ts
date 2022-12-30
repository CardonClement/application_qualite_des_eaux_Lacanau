import { Injectable } from '@nestjs/common';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Ville } from './entities/ville.entity';

@Injectable()
export class VilleService {
  constructor(
    @InjectRepository(Ville)
    private villeRepository: Repository<Ville>,
    private dataSource: DataSource
  ){}
  create(createVilleDto: CreateVilleDto) {
    return this.villeRepository.create(createVilleDto);
  }

  findAll() {
    return this.villeRepository.find();
  }

  findOne(id: number) {
    return this.villeRepository.findOneBy({ id });
  }

  update(id: number, updateVilleDto: UpdateVilleDto) {
    return this.villeRepository.update(updateVilleDto,{ id });
  }

  remove(id: number) {
    return this.villeRepository.delete(id);
  }
}
