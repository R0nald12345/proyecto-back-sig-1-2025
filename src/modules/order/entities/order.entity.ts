import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Client } from '../../client/entities/client.entity';
import { DetailsOrder } from '../../details-order/entities/details-order.entity';
import { Delivery } from '../../delivery/entities/delivery.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'cliente_id' })
  cliente_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dateOrder: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column()
  state: string;

  @Column()
  ubication: string;

  @Column({ type: 'timestamp', nullable: true })
  estimatedDeliveryDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  longitude: number;

  @Column({ type: 'boolean', default: false })
  paid: boolean;

  @ManyToOne(() => Client, client => client.orders)
  @JoinColumn({ name: 'cliente_id' })
  client: Client;

  @OneToOne(() => Delivery, delivery => delivery.order)
  @JoinColumn()
  delivery: Delivery;

  @OneToMany(() => DetailsOrder, detailsOrder => detailsOrder.orders)
  details: DetailsOrder[];
} 