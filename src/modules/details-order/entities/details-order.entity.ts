import { Order } from 'src/modules/order/entities/order.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Order } from './order.entity';
// import { Product } from './product.entity';

@Entity()
export class DetailsOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.detailsOrders)
  order: Order;

  @ManyToOne(() => Product, (product) => product.detailsOrders)
  product: Product;

  @Column('int')
  amount: number;

  @Column('float')
  unitPrice: number;

  @Column()
  deliveryAddress: string;

  @Column('float')
  subTotal: number;
}
