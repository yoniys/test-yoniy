import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { ProductRepository } from './product/product.repository';
import { ProductService } from './product/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'ys301987',
      database: 'test_db',
      logging:true,
      entities: [Product],
      synchronize: true,
    }),ProductModule
   ],
  controllers: [AppController,ProductController],
  providers: [AppService,ProductService],
})
export class AppModule {}
