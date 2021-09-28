import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Columns } from './columns.model';

@Entity()
export class MapperGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  GroupList: string;
}
