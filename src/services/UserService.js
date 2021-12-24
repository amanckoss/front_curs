import axios from 'axios';

const USERS_API = 'http://localhost:8080/users'

class UserService{

    getUsers(){
        console.log("afgsrdhtf")
        const res = axios.get(USERS_API + '/all');
        console.log(res.data)
        return res;
    }

    postUser(user){
        console.log("action")
        console.log(user)
        return axios.post(USERS_API + '/new', user)
    }

}

export default new UserService();