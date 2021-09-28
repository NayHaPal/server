import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Patient } from './patietn.model';

@Entity()
export class Treatment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Patient)
  patient: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  status: boolean;

  @Column()
  displayName: string;

  @Column()
  diagnoses: string;

  @Column()
  numberOfCycles: string;

  @Column()
  protocolId: number;
}
