import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem("token");
    axios.create({
        headers: {authorization: token},
        baseURL: 'http://localhost:5000/api'
    });
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth