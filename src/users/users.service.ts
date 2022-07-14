import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {id: 1, name: 'Nabendu Biswas', desc: 'Software Trainer'},
        {id: 2, name: 'Shikha Biswas', desc: 'English Trainer'},
        {id: 3, name: 'Hriday Biswas', desc: 'Student'},
        {id: 4, name: 'Hriday Biswas', desc: 'Painter'}
    ];

    findAll(name?: string): User[] {
        if(name) return this.users.filter(user => user.name === name);
        return this.users;
    }

    findById(userId: number): User{
        return this.users.find(user => user.id === userId);
    }

    createUser(createUserDto: CreateUserDto): User{
        const newUser = { id: Date.now(), ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }
}
