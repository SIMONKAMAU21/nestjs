import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // http://localhost:3000/users users ? role = value & age = value
  getAllUsers(@Query('role') role?: 'INTERN' | "ADMIN" | "ENGINEER", @Query('age') age?: number) {
    console.log(role,age)
    return [];
  }
  @Get(':id') // http://localhost:3000/users/1
  getUser(@Param('id') id: string) {
    return { id };
  }
  @Post() // http://localhost:3000/users
  create(@Body() user: {}) {
    return user;
  }
  @Put(':id') // http://localhost:3000/users/1
  update(@Body() userUpdate: {}, @Param('id') id: string) {
    return { id, ...userUpdate };
  }
  @Delete(':id') // http://localhost:3000/users/1
  delete(@Param('id') id:string){
    return{id}
  }
}
