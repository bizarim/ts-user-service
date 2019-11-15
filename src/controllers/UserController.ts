import { Post, JsonController as Controller, Body, Get, Param, Delete, Req, OnUndefined, BadRequestError, HttpError, NotFoundError, UseBefore } from 'routing-controllers';
import { UserService } from '../services/UserService';

@Controller('/user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Get('/test')
    public async test(): Promise<string> {
        return this.userService.test();
    }
}
