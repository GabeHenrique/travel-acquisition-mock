import { Module } from '@nestjs/common';
import { ProductInfoController } from './product-info.controller';
import { ProductInfoService } from './product-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FranchiseEntity } from 'src/models/franchise.model';
import { CountryEntity } from 'src/models/country.model';

@Module({
  imports: [TypeOrmModule.forFeature([FranchiseEntity, CountryEntity])],
  controllers: [ProductInfoController],
  providers: [ProductInfoService],
})
export class ProductInfoModule {}
