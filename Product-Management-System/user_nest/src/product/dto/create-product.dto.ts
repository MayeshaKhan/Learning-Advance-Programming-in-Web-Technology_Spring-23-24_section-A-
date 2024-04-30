
import { IsNotEmpty, IsString, IsEmail, IsNumber } from 'class-validator';
export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}