import axios from "axios";

const $authHost = axios.create({
    baseURL: 'sberhr.herokuapp.com/'
})

export {
    $authHost
}