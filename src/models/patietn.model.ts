import { GenderInterface } from '@/interfaces/gender.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateOfBirth: Date;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: GenderInterface,
    default: GenderInterface.Male,
  })
  gender: GenderInterface;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column()
  MRN: number;

  @Column()
  isDeceased: boolean;

  @Column()
  dateOfDeath: Date;
}
