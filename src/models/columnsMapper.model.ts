import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Columns } from './columns.model';

@Entity()
export class ColumnsMapper {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Columns, column => column.columnMapper)
  column: number;

  @Column()
  name: string;
}
