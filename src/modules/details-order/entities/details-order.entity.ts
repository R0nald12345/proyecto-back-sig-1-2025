import { Order } from 'src/modules/order/entities/order.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class DetailsOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column()
  amount: number;

  @Column({ name: 'unit_price' })
  unitPrice: number;

  @Column({ name: 'delivery_address' })
  deliveryAddress: string;

  @Column({ name: 'sub_total' })
  subTotal: number;

  @OneToMany(() => Order, order => order.detailsOrder)
  orders: Order[];

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}