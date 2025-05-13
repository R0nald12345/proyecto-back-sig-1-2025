import { Order } from 'src/modules/order/entities/order.entity';
import { Route } from 'src/modules/route/entities/route.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
// import { Route } from './route.entity';
// import { Order } from './order.entity';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @Column({ name: 'order_delivery' })
  orderDelivery: number;

  @Column()
  state: string;

  @Column({ name: 'location_delivery' })
  locationDelivery: string;

  @Column({ name: 'actual_delivery_date' })
  actualDeliveryDate: Date;

  @Column({ name: 'payment_type' })
  paymentType: string;

  @Column({ type: 'float' })
  latitude: number;

  @Column({ type: 'float' })
  longitude: number;

  @Column()
  sequence: number;

  @ManyToOne(() => Route, route => route.deliveries)
  @JoinColumn()
  route: Route;

  @OneToOne(() => Order, order => order.delivery)
  order: Order;
}