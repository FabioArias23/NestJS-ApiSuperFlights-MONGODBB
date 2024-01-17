/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
/* eslint-disable prettier/prettier */

//Armamos la clase nuestro DTO
export class UserDTO{
   @IsNotEmpty()
   @IsString()
   readonly name: string;

   @IsNotEmpty()
   @IsString()
   readonly username: string;

   @IsNotEmpty()
   @IsEmail()
   readonly email: string;

   @IsNotEmpty()
   @IsString()
   readonly password: string;
}
