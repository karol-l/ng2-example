import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DelayedResult, DelayedCallbackResult } from '../utils/Utils';
import { User } from '../dataModel/User';
import { UsersService } from './UsersService';


@Injectable()
export class AuthService {

    private currentUserName:string;

    currentUser: User;
    redirectUrl: string;


    constructor(private usersService:UsersService) {
    }


    login(userName:string, password:string, rememberUser:boolean):Promise<User> {
        
        return this.usersService.findUserByName(userName).then(user => {

            if (user != null && user.password != password) user = null;

            if (user != null) this.currentUser = user;  

            return DelayedResult(1500, user);
        })
    }

    logout() {
        this.currentUser = null;
    }

    getUserName():string {
        return this.currentUser != null ? this.currentUser.name : "";
    }

    isLoggedIn():boolean {
        return this.currentUser != null;
    }
}