import { Client } from 'src/modules/client/entities/client.entity';
import { Delivery } from 'src/modules/delivery/entities/delivery.entity';
import { DetailsOrder } from 'src/modules/details-order/entities/details-order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
// import { Client } from './client.entity';
// import { Delivery } from './delivery.entity';
// import { DetailsOrder } from './details-order.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'cliente_id' })
  clienteId: number;

  @Column({ name: 'date_order' })
  dateOrder: Date;

  @Column()
  total: number;

  @Column()
  state: string;

  @Column()
  ubication: string;

  @Column({ name: 'estimated_delivery_date' })
  estimatedDeliveryDate: Date;

  @Column({ type: 'float' })
  latitude: number;

  @Column()
  length: number;

  @Column()
  paid: boolean;

  @ManyToOne(() => Client, client => client.orders)
  @JoinColumn({ name: 'cliente_id' })
  client: Client;

  @OneToOne(() => Delivery, delivery => delivery.order)
  @JoinColumn()
  delivery: Delivery;

  @ManyToOne(() => DetailsOrder, detailsOrder => detailsOrder.orders)
  @JoinColumn({ name: 'details_order_id' })
  detailsOrder: DetailsOrder;
}