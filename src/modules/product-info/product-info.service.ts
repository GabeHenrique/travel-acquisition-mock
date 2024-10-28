import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { countriesMocks } from 'src/mocks/countriesMocks';
import { franchisesMock } from 'src/mocks/franchisesMock';
import { CountryEntity } from 'src/models/country.model';
import { FranchiseEntity } from 'src/models/franchise.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProductInfoService {
  constructor(
    @InjectRepository(FranchiseEntity)
    private readonly franchiseRepository: Repository<FranchiseEntity>,
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  async getProductInfo(productType: string): Promise<FranchiseEntity> {
    const response = await this.franchiseRepository.findOne({
      where: { product_id: productType },
    });
    console.log('response', JSON.stringify(response));
    return response;
  }

  async getProductInfoCountries(productType: string): Promise<CountryEntity[]> {
    const response = await this.countryRepository.find({
      where: { product_id: productType },
    });
    console.log('response', response);
    return response;
  }

  async getProducts(): Promise<FranchiseEntity[]> {
    const response = await this.franchiseRepository.find();
    return response;
  }

  async onModuleInit() {
    await this.franchiseRepository.save(franchisesMock);
    await this.countryRepository.save(countriesMocks);
  }
}
