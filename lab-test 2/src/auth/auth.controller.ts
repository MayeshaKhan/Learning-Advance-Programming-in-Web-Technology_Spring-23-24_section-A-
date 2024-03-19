import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException, ValidationPipe } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService, private jwtService: JwtService ) {}



    @Post("register")
    async register(@Body(ValidationPipe) createUserDto: CreateUserDto)
    {

        return this.authService.register(createUserDto);
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ) {
        const user = await this.authService.findOne(email);

        if (!user) {
            throw new BadRequestException('invalid credentials');
        }
        const jwt= await this.jwtService.signAsync({id: user.id});


        response.cookie("jwt", jwt, {httpOnly: true})
        

        return "Success";
    }

    @Get("user")
    async user(@Req() request: Request)
    {   
        try {
            const cookie = request.cookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            const user = await this.authService.findById(data['id']);


            return user;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        };
    }

    
}

