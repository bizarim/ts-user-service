import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entity/User';
import { UserDto } from '../dto/UserDto';

@Service()
export class UserService {
    constructor(
        @InjectRepository()
        private readonly userRepository: UserRepository
    ) { }
        public async test(): Promise<string> {
            return 'test';
        }

    public async create(userDto: UserDto): Promise<User> {
        console.log('UserService test');
        const user = userDto.toUser();
        this.userRepository.create(user);
        return user;
    }

}
