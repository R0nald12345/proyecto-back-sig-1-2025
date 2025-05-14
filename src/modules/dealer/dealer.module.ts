import { Module } from '@nestjs/common';
import { DealerService } from './dealer.service';
import { DealerController } from './dealer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dealer } from './entities/dealer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dealer])],
  controllers: [DealerController],
  providers: [DealerService],
  exports: [DealerService],
})
export class DealerModule {}
