/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';


@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post()
    @ApiOperation({summary: 'Create a new user'})
    create(@Body() userDTO: UserDTO){
        return this.userService.create(userDTO);
    }
    @Get()
    findAll(){
     return this.userService.findAll();    
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDTO: UserDTO){
       return this.userService.update(id, userDTO); 
    }
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.userService.delete(id);
    }

}
