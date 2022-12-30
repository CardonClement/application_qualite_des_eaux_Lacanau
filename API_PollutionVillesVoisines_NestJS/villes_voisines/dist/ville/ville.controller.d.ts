import { VilleService } from './ville.service';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';
export declare class VilleController {
    private readonly villeService;
    constructor(villeService: VilleService);
    create(createVilleDto: CreateVilleDto): import("./entities/ville.entity").Ville;
    findAll(): Promise<import("./entities/ville.entity").Ville[]>;
    findOne(id: string): Promise<import("./entities/ville.entity").Ville>;
    update(id: string, updateVilleDto: UpdateVilleDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
