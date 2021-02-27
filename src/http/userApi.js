import {$authHost} from "./inder";
import axios from "axios";

export const registration = (username, password) => {
    const instance = axios.create({
        baseURL: "https://sberhr.herokuapp.com/",
    })

    instance.post('/registration', {username,password}).then(data =>{
        return data
    })

}

export const login = (form_data) => {
    const instance = axios.create({
        baseURL: "https://sberhr.herokuapp.com/",
        withCredentials: true
    })

    const {data} = instance.post('/login', form_data)
        .then(res => {
            alert(res.headers)
            for (let key in res.headers) {
                console.log(key, res.headers[key]);
            }
            return res.data // Результат ответа от сервера
        });
    // instance.get('/api/getUseId')
    //     .then(res => {
    //         alert(res)
    //         return res.data // Результат ответа от сервера
    //     });
}

export const userInfo = (id) => {
    const instance = axios.create({
        baseURL: "https://sberhr.herokuapp.com/",
    })
    const {data} = instance.get('/api/getUserInfo/')
        .then(res => {
            alert(res)
            return res.data // Результат ответа от сервера
        });
}

export const userInfoId = () => {
    const instance = axios.create({
        baseURL: "https://sberhr.herokuapp.com/",
    })
    const {data} = instance.get('/api/getUseId')
        .then(res => {
            return res.data // Результат ответа от сервера
        });
}