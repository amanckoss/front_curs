import axios from 'axios';

const AUTHOR_API = 'http://localhost:8080/authors'

class AuthorService{

    getAuthors(){
        const res = axios.get(AUTHOR_API + '/all');
        console.log(res.data)
        return res;
    }

    postAuthor(author){
        return axios.post(AUTHOR_API + '/new', author)
    }

}

export default new AuthorService();