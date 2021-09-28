import { ProcessStatusInterface } from '@/interfaces/processStatus.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Columns } from './columns.model';

@Entity()
export class Process {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  patientFile: string;

  @Column()
  tretmentFile: string;

  @Column('text')
  mapperObject: string;

  @Column({
    type: 'enum',
    enum: ProcessStatusInterface,
    default: ProcessStatusInterface.Open,
  })
  status: ProcessStatusInterface;
}
