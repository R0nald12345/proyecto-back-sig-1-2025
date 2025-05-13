import { DetailsOrder } from 'src/modules/details-order/entities/details-order.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { DetailsOrder } from './details-order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @Column()
  stock: number;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column()
  color: string;

  @Column()
  size: string;

  @Column('float')
  price: number;

  @Column()
  description: string;

  @OneToMany(() => DetailsOrder, (detailsOrder) => detailsOrder.product)
  detailsOrders: DetailsOrder[];
}
