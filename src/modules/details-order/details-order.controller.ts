import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailsOrderService } from './details-order.service';
import { CreateDetailsOrderDto } from './dto/create-details-order.dto';
import { UpdateDetailsOrderDto } from './dto/update-details-order.dto';

@Controller('details-order')
export class DetailsOrderController {
  constructor(private readonly detailsOrderService: DetailsOrderService) {}

  @Post()
  create(@Body() createDetailsOrderDto: CreateDetailsOrderDto) {
    return this.detailsOrderService.create(createDetailsOrderDto);
  }

  @Get()
  findAll() {
    return this.detailsOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailsOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailsOrderDto: UpdateDetailsOrderDto) {
    return this.detailsOrderService.update(+id, updateDetailsOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailsOrderService.remove(+id);
  }
}
