import { Post, JsonController as Controller, Body, Get, Param, Delete, Req, OnUndefined, BadRequestError, HttpError, NotFoundError, UseBefore } from 'routing-controllers';
import { UserService } from '../services/UserService';
import { UserDto } from 'src/dto/UserDto';
import { User } from 'src/entity/User';

@Controller('/user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Get('/test')
    public async test(): Promise<string> {
        return this.userService.test();
    }

    @Post('/signup')
    public async signUp(@Body() dto: UserDto): Promise<User> {
        return this.userService.create(dto);
    }
}
