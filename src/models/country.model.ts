import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CountryEntity {
  @PrimaryColumn()
  product_id: string;

  @PrimaryColumn()
  alpha: string;

  @Column()
  emoji: string;

  @Column()
  country: string;

  @Column()
  check: boolean;
}
