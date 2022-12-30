import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';
import { DataSource, Repository } from 'typeorm';
import { Ville } from './entities/ville.entity';
export declare class VilleService {
    private villeRepository;
    private dataSource;
    constructor(villeRepository: Repository<Ville>, dataSource: DataSource);
    create(createVilleDto: CreateVilleDto): Ville;
    findAll(): Promise<Ville[]>;
    findOne(id: number): Promise<Ville>;
    update(id: number, updateVilleDto: UpdateVilleDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
