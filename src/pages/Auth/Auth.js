import React,{useState, useContext} from 'react';
import s from './Auth.module.css'
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SBER_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const Auth = observer(() => {
    const {user} = useContext(Context)

    const history = useHistory()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click =  () => {
        // try {
            // let data;
            // if (isLogin) {
            //     data = await login(email, password);
            // } else {
            //     data = await registration(email, password);
            // }
            // user.setUser(user)
console.log(user.isAuth)
            user.setIsAuth(true)
            history.push(PROFILE_ROUTE)
        // } catch (e) {
        //     alert(e.response.data.message)
        // }

    }

    return (
        <div className={s.auth}>
            <div className={s.auth_block}>
                <h1>HR SBER</h1>
                <div className={s.auth_block_content}>
                    <form>
                        <input
                            placeholder="Имя пользователя"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={s.input}/>
                        <input
                            placeholder="Пароль"
                            className={s.input}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <button className={s.button}
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