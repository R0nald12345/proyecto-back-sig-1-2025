import { IsNumber, IsString, IsOptional, IsBoolean, IsDateString, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  cliente_id: number;

  @IsOptional()
  @IsDateString()
  dateOrder?: Date;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  total: number;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  ubication: string;

  @IsOptional()
  @IsDateString()
  estimatedDeliveryDate?: Date;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  latitude?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  longitude?: number;

  @IsOptional()
  @IsBoolean()
  paid?: boolean;
}