import React from 'react'
import {NavLink} from "react-router-dom"
import s from './Navbar.module.css'
import pluce from '../../assets/pluce.png'
import sberbank from "../../assets/sber.png";
import {SBER_ROUTE} from "../../utils/consts";
import Profile from "../../pages/Profile/Profile";

const Navbar = () => {
    return (
                <nav className={s.navbar_main}>
                    <div className={s.navbar_main_left}>
                        <NavLink to={SBER_ROUTE}>
                            <img src={sberbank} alt="sber"/>
                        </NavLink>

                    </div>
                    <div className={s.navbar_main_center}>
                        <div className={s.text_navbar_main}><NavLink to={SBER_ROUTE}>Главная</NavLink></div>
                        <div className={s.text_navbar_main}><NavLink to={SBER_ROUTE}>Друзья</NavLink></div>
                        <div className={s.text_navbar_main}><NavLink to={SBER_ROUTE}>Мероприятия</NavLink></div>
                        <div className={s.text_navbar_main}><NavLink to={SBER_ROUTE}>Вопросы на собеседование</NavLink>
                        </div>
                    </div>
                    <div className={s.navbar_main_right}>
                        <div className={s.profile_main_right}>
                            <img src="" alt=""/>
                            Александр
                        </div>
                        <div className={s.pluce_main_right}>
                            <img src={pluce} alt="pluce"/>
                        </div>
                    </div>
                </nav>
    );
};

export default Navbar;