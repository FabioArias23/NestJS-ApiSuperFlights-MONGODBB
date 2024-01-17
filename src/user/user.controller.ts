/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post()
    create(@Body() userDTO: UserDTO){
        return this.userService.create(userDTO);
    }
    @Get()
    findAll(){
     return this.userService.findAll();   
    }
}
