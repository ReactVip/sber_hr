import {$authHost} from "./inder";

export const registration = async (form_data) => {

    await $authHost.post('registration', form_data)
            .then(function(response) {
                console.log(1)
            })

    // let res = await $authHost.post('registration', form_data);
    //
    // let data = res.data;
    // console.log(data);
}

export const login = async (username, password) => {
    const {data} = await $authHost.post('login', {username, password})
    return data
}