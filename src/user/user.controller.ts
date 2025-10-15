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

  @ApiOperation({ summary: 'Barcha foydalanuvchilarni olish' })
  @ApiResponse({ status: 200, description: 'Foydalanuvchilar ro‘yxati', type: [User] })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'ID orqali foydalanuvchini olish' })
  @ApiResponse({ status: 200, description: 'Topilgan foydalanuvchi', type: User })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({ summary: 'Yangi foydalanuvchi yaratish' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Foydalanuvchi yaratildi', type: User })
  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @ApiOperation({ summary: 'Foydalanuvchini yangilash' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Yangilangan foydalanuvchi', type: User })
  @Put(':id')
  update(@Param('id') id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(+id, body);
  }

  @ApiOperation({ summary: 'Foydalanuvchini o‘chirish' })
  @ApiResponse({ status: 200, description: 'Foydalanuvchi o‘chirildi' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
}
