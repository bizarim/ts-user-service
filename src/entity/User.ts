import { Entity, Column, PrimaryColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WhiteSpaceException } from '../exception/WhiteSpaceException';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', length: 48, unique: true })
    public uuid: string;

    @Column({ type: 'varchar', length: 48, unique: true })
    public userName: string;

    @Column({ type: 'varchar', length: 128, unique: true })
    public email: string;

    constructor(uuid: string, username: string, email: string) {
        // todo
        // check white space
        // check email format
        // check encode password
        this.uuid = uuid;
        this.userName = username;
        this.email = email;
    }

    // hasWhiteSpace(value: string) {
    //     return /\s/g.test(value);
    // }
}