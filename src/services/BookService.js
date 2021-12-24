import axios from 'axios';

const BOOK_API = 'http://localhost:8080/books'

class BookService{

    getBooks(){
        console.log("afgsrdhtf")
        const res = axios.get(BOOK_API + '/all');
        console.log(res.data)
        return res;
    }

    postBook(user){
        console.log("action")
        console.log(user)
        return axios.post(BOOK_API + '/new', user)
    }

}

export default new BookService();