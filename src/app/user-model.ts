export class UserModel {
    Name : string;
    Email: string;
    Mobile: string;
    Age: number;
    id: number;
    isShowDob: boolean;

    constructor(Name: string, Email: string, Mobile: string, Age: number, id: number, isShowDob: boolean) {
        this.Name= Name;
        this.Email= Email;
        this.Mobile=Mobile;
        this.Age= Age;
        this.id= id;
        this.isShowDob=isShowDob;
    }
}
