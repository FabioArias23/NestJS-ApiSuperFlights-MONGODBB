import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerDTO } from './dto/passenger.dto';

@Controller('api/v1/passenger')
export class PassengerController {
    constructor(private readonly passengerService:PassengerService){}
    @Post()
    create(@Body() passengerDTO:PassengerDTO){
        return this.passengerService.create(passengerDTO);

    }
    @Get()
    findALL(){
        return this.passengerService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.passengerService.findOne(id);

    }
    @Put(':id')
    update(@Param('id') id:string, @Body() passengerDTO:PassengerDTO){
        return this.passengerService.update(id, passengerDTO);
    }
   
}
