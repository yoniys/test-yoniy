import { IsEmail } from 'class-validator';
import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
    // description": "sample description", "name": "sample name", "price": "sample price
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    name: string;

    @Column()
    price: number;

   
}
