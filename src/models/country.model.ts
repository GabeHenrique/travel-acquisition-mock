import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CountryEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  product_id: string;

  @Column()
  alpha: string;

  @Column()
  emoji: string;

  @Column()
  country: string;

  @Column()
  check: boolean;
}
