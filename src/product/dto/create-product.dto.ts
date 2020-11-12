import { IsEmail, IsString } from 'class-validator';

export class CreateProductDTO {
    
    id: number;

    
    description: string;

    
    name: string;

    @IsEmail()
    price: number;
}
