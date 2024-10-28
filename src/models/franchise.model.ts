import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class FranchiseEntity {
  @PrimaryColumn()
  product_id: string;

  @Column()
  data: string;

  @Column()
  voice: string;

  @Column()
  sms: string;

  @Column()
  duration: string;

  @Column()
  value: number;
}
