import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('User')
export class User {
    @PrimaryColumn('varchar')
    public id: number;

    @Column({type: 'varchar', length: 48, unique: true})
    public uuid: string;

    @Column({type: 'varchar', length: 48, unique: true})
    public userName: string;

    @Column({type: 'varchar', length: 128, unique: true})
    public email: string;

    @Column({type: 'varchar', length: 128, unique: false})
    public fullName: string;

    @Column({type: 'varchar', nullable: true})
    public phone: string;

    constructor(uuid: string, username: string, email: string, fullname: string, phone: string) {
        if (this.hasWhiteSpace(username)) {
            throw Error('hasWhiteSpace');
        }
        this.uuid = uuid;
        this.userName = username;
        this.email = email;
        this.fullName = fullname;
        this.phone = phone;
    }

    hasWhiteSpace(value: string) {
        return /\s/g.test(value);
    }
}