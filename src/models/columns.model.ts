import { CoulmsInterface } from '@/interfaces/Coulms.Interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnsMapper } from './columnsMapper.model';

@Entity()
export class Columns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: CoulmsInterface,
    default: CoulmsInterface.Patient,
  })
  entity: CoulmsInterface;

  @OneToMany(() => ColumnsMapper, columnMapper => columnMapper.column)
  columnMapper: ColumnsMapper[];
}
