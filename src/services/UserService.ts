import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entity/User';
import { UserDto } from '../dto/UserDto';

@Service()
export class UserService {
    constructor(
    ) { }

    public async test(): Promise<string> {
        console.log('UserService test');
        return 'test';
    }

}
