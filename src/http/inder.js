import axios from "axios";

const $authHost = axios.create({
    baseURL: 'https://sberhr.herokuapp.com'
});

export {
    $authHost
}