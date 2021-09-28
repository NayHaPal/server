import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Columns } from './columns.model';

@Entity()
export class Oprations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  code: string;
}
