import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ville {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  taux_pollution: number;
}