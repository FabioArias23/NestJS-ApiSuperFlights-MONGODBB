import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { PassengerDTO } from './dto/passenger.dto';
import { Model } from 'mongoose';
import { PASSENGER } from 'src/common/models/models';

@Injectable()
export class PassengerService {
   
    constructor(@InjectModel(PASSENGER.name) private readonly model:Model<IPassenger>,){}
    
    async create(passengerDTO: PassengerDTO): Promise<IPassenger>{
        const newPassenger = new this.model(passengerDTO);
        return await newPassenger.save();

    }
    async findAll(): Promise<IPassenger[]>{
        return await this.model.find();
    }
    async findOne(id:string):Promise<IPassenger>{
        return await this.model.findById(id);
    }
    async update(id:string, passengerDTO: PassengerDTO): Promise<IPassenger>{
        return await this.model.findByIdAndUpdate(id, passengerDTO,{new: true});
    }
    
}
