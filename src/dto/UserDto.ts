import { User } from '../entity/User';

export class UserDto {
    readonly uuid: string;
    readonly username: string;
    readonly email: string;

    toUser() {
        return {
            uuid: this.uuid,
            userName: this.username,
            email: this.email
        } as User;
    }
}