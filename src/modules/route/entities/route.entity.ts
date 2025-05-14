import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Delivery } from '../../delivery/entities/delivery.entity';
import { Dealer } from '../../dealer/entities/dealer.entity';

@Entity()
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  hour_end: string;

  @Column({ type: 'int' })
  delivery_quantity: number;

  @Column({ type: 'time' })
  hour_start: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_distance: number;

  @Column({ type: 'text', nullable: true })
  polyline: string;

  @ManyToOne(() => Dealer, dealer => dealer.routes)
  @JoinColumn()
  dealer: Dealer;

  @OneToOne(() => Delivery, delivery => delivery.route)
  @JoinColumn()
  delivery: Delivery;
}