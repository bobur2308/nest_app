import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'string' })
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '12345678'})
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ example: '********'})
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
