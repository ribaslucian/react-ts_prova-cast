import { UserFormLogin } from '../dtos/UserFormLogin';

export class UsersController {

    static signIn(data: UserFormLogin) {
        console.log(data)
        return true
    }
}