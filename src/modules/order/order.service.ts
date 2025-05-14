import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ClientService } from '../client/client.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private clientService: ClientService,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderRepository.find({
      relations: ['client', 'details'],
    });
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['client', 'details'],
    });
    if (!order) {
      throw new NotFoundException(`Orden con ID ${id} no encontrada`);
    }
    return order;
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    // Verificar que el cliente existe
    await this.clientService.findOne(createOrderDto.cliente_id);
    
    const order = this.orderRepository.create(createOrderDto);
    return await this.orderRepository.save(order);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.findOne(id);
    
    // Si se está actualizando el cliente, verificar que existe
    if (updateOrderDto.cliente_id) {
      await this.clientService.findOne(updateOrderDto.cliente_id);
    }
    
    Object.assign(order, updateOrderDto);
    return await this.orderRepository.save(order);
  }

  async remove(id: number): Promise<void> {
    const result = await this.orderRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Orden con ID ${id} no encontrada`);
    }
  }

  async getOrdersByClientId(clientId: number): Promise<Order[]> {
    return await this.orderRepository.find({
      where: { cliente_id: clientId },
      relations: ['details'],
    });
  }

  async updateOrderStatus(id: number, state: string): Promise<Order> {
    const order = await this.findOne(id);
    order.state = state;
    return await this.orderRepository.save(order);
  }
}