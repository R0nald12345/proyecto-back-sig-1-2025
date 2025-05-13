import { Dealer } from 'src/modules/dealer/entities/dealer.entity';
import { Delivery } from 'src/modules/delivery/entities/delivery.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({ name: 'hour_end' })
  hourEnd: string;

  @Column({ name: 'delivery_quantity' })
  deliveryQuantity: number;

  @Column({ name: 'hour_start' })
  hourStart: string;

  @Column({ name: 'total_distance' })
  totalDistance: number;

  @Column({ type: 'text' })
  polyline: string;

  @ManyToOne(() => Dealer, dealer => dealer.routes)
  @JoinColumn()
  dealer: Dealer;

  @OneToMany(() => Delivery, delivery => delivery.route)
  deliveries: Delivery[];
}