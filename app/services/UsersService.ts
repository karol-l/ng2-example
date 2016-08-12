import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../dataModel/User';
import { DelayedResult, DelayedCallbackResult, ArrayHelper } from '../utils/Utils';


let lastUserID:number = 1;


let usersTest:User[] = [
    User.getNew(lastUserID++, "demo", "demo@demo.pl", "demo"),
    User.getNew(lastUserID++, "demo2", "demo@demo.pl", "demo"),
    User.getNew(lastUserID++, "demo3", "demo@demo.pl", "demo"),
    User.getNew(lastUserID++, "demo4", "demo@demo.pl", "demo")
];



@Injectable()
export class UsersService {

    private usersList:User[];
    

    loadUsers():Promise<User[]>
    {
        if (this.usersList != null)
            return DelayedResult(0, this.usersList);

        this.usersList = usersTest;
        return DelayedResult(1500, this.usersList);
    }


    findUserById(id:number):Promise<User>
    {
        return this.loadUsers().then(users => {
            return ArrayHelper.findByProperty(this.usersList, "id", id);
        });
    }


    findUserByName(name:string):Promise<User>
    {
        return this.loadUsers().then(users => {
            return ArrayHelper.findByProperty(this.usersList, "name", name);
        });  
    }


    addNewUser(user:User):Promise<User>
    {
        return this.loadUsers().then(u => {

            user.id = lastUserID;
            user.modifyTime = new Date();
            this.usersList.push(user);
            lastUserID++;

            return  user;
        });
    }


    deleteUser(id:number):Promise<User>
    {
        return this.loadUsers().then(u => {
            let user = ArrayHelper.remove(this.usersList, item => item.id === id);
            return  user;
        });        
    }

}