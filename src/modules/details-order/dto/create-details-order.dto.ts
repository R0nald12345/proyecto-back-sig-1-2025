import { IsNumber, IsNotEmpty, IsString, Min, IsDecimal } from 'class-validator';

export class CreateDetailsOrderDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @Min(1)
  amount: number;

  @IsNumber()
  @Min(0)
  unitPrice: number;

  @IsString()
  @IsNotEmpty()
  deliveryAddress: string;

  @IsNumber()
  @Min(0)
  subTotal: number;
}