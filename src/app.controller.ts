import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDTO } from './product/dto/create-product.dto';
import { ProductService } from './product/product.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private ps:ProductService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
    findOne(@Param('id') id: string) {
      // throw new BadRequestException();
      return this.ps.getProduct(+id)
    }

    @Get()
    findAll() {
      return this.ps.getProducts()
    }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ps.deleteProduct(+id)
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() createProductDto: CreateProductDTO) {
    return this.ps.editProduct(+id,createProductDto)
  }
}
