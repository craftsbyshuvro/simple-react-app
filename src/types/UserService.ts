import { UserModel } from "./UserModel";
const axios = require('axios');


export class UserService {

    public async getUsers(): Promise<Array<UserModel>> {
        let userFetchAPI = "https://gorest.co.in/public/v2/users";
        const response = await axios.get(userFetchAPI);
        return response.data;
    }

}