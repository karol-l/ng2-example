
export class User {
    public id:number;
    public name:string;
    public email:string;
    public password:string;
    public modifyTime:Date;


    static getNew(id:number, name:string, email:string, password:string):User {

        let user = new User;
        
        user.id = id;
        user.name = name;
        user.email = email;
        user.password = password;
        user.modifyTime = new Date;
        
        return user;
    }
}
