import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get('all')
    public async getProducts(): Promise<[]> {
        // const products = await this.productService.getProducts();
        // return products;
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);
    }
}
