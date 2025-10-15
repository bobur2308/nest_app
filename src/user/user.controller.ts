import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ status: 200,  type: [User] })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }


  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, type: User })
  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, type: User })
  @Put(':id')
  update(@Param('id') id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(+id, body);
  }

  @ApiResponse({ status: 200 })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
}
