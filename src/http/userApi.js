import {$authHost} from "./inder";
import axios from "axios";

export const registration = (username, password) => {
    const instance = axios.create({
        baseURL: "https://sberhr.herokuapp.com/",
        timeout: 1000
    })

    instance.post('/registration', {username,password}).then(data =>{
        return data
    })

}

export const login = (form_data) => {
    const instance = axios.create({
        baseURL: "https://sberhr.herokuapp.com/",
        timeout: 1000
    })

    instance.post('/login', form_data)
        .then(res => {
            console.log(res); // Результат ответа от сервера
        });
}