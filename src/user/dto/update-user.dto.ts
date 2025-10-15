import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsPhoneNumber } from 'class-validator/types/decorator/string/IsPhoneNumber';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: '["admin", "user"]' })
  roles: string[];
  @ApiProperty({ example: true })
  isActive: boolean;
}
