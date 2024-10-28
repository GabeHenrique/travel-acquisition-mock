import { Controller, Get, Param } from '@nestjs/common';
import { ProductInfoService } from './product-info.service';
import { FranchiseEntity } from 'src/models/franchise.model';
import { CountryEntity } from 'src/models/country.model';

@Controller('product-info')
export class ProductInfoController {
  constructor(private readonly productInfoService: ProductInfoService) {}

  @Get(':productType')
  async getProductInfo(
    @Param('productType') productType: string,
  ): Promise<FranchiseEntity> {
    return await this.productInfoService.getProductInfo(productType);
  }

  @Get('country/:productType')
  async getProductInfoCountries(
    @Param('productType') productType: string,
  ): Promise<CountryEntity[]> {
    return await this.productInfoService.getProductInfoCountries(productType);
  }

  @Get()
  async getProducts(): Promise<FranchiseEntity[]> {
    return await this.productInfoService.getProducts();
  }
}
