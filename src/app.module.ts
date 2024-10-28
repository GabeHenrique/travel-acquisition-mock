import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FranchiseEntity } from './models/franchise.model';
import { ProductInfoModule } from './modules/product-info/product-info.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
    }),
    ProductInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
