import { UserModel } from "../types/UserModel";
const axios = require('axios');

export class UserService {

    public async getUsers(): Promise<UserModel[]> {
        let userFetchAPI = "https://gorest.co.in/public/v2/users";
        const response = await axios.get(userFetchAPI);
        return JSON.parse(JSON.stringify(response.data));
    }

}