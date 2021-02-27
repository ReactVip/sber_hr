import React,{useState, useContext} from 'react';
import s from './Auth.module.css'
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {ALLFEED_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SBER_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {login, registration} from "../../http/userApi";
import axios from "axios";

const Auth = observer(() => {
    const {user} = useContext(Context)

    const history = useHistory()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [username, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data;
            if (isLogin) {
                const form_data = new FormData();
                form_data.append('username', username);
                form_data.append('password', password);
                data = await login(form_data);
            } else {
                data = await registration(username, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(ALLFEED_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <div className={s.auth}>
            <div className={s.auth_block}>
                <h1>HR SBER</h1>
                <div className={s.auth_block_content}>
                    <form method="POST">
                        <input
                            placeholder="Имя пользователя"
                            value={username}
                            onChange={e => setEmail(e.target.value)}
                            className={s.input}/>
                        <input
                            placeholder="Пароль"
                            className={s.input}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <button type="submit"
                            className={s.button}
                                onClick={click}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </button>
                        {isLogin ?
                            <div className={s.text}>
                                <span>Нет аккаунта?</span> <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div className={s.text}>
                                <span>Есть аккаунт?</span> <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
});

export default Auth;