import { Client } from 'src/modules/client/entities/client.entity';
import { DetailsOrder } from 'src/modules/details-order/entities/details-order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
// import { Client } from './client.entity';
// import { DetailsOrder } from './details-order.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, (client) => client.orders)
  client: Client;

  @Column()
  dateOrder: Date;

  @Column('float')
  total: number;

  @Column()
  state: string;

  @Column()
  ubication: string;

  @Column()
  estimatedDeliveryDate: Date;

  @Column('float')
  latitude: number;

  @Column('float')
  length: number;

  @Column()
  paid: boolean;

  @OneToMany(() => DetailsOrder, (detailsOrder) => detailsOrder.order)
  detailsOrders: DetailsOrder[];
}