import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  findAll(): User[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: this.idCounter++, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
