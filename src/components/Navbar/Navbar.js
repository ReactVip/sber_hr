import React from 'react'
import {NavLink} from "react-router-dom"
import s from './Navbar.module.css'
import sberbank from "../../assets/sber.png";
import {ALLFEED_ROUTE, ALLRATING_ROUTE, PROFILE_ROUTE, SBER_ROUTE, SUBSFEED_ROUTE} from "../../utils/consts";
import avatar from '../../assets/avatar.jpg'

const Navbar = () => {

    return (
        <nav className={s.navbar_main}>
            <div className={s.navbar_main_left}>
                <NavLink to={SBER_ROUTE}>
                    <img src={sberbank} alt="sber"/>
                </NavLink>

            </div>
            <div className={s.navbar_main_center}>
                <div className={s.text_navbar_main}><NavLink to={ALLFEED_ROUTE} activeClassName={s.current}>Вся лента</NavLink></div>
                <div className={s.text_navbar_main}><NavLink to={SUBSFEED_ROUTE} activeClassName={s.current}>Лента подписчиков</NavLink></div>
                <div className={s.text_navbar_main}><NavLink to={ALLRATING_ROUTE} activeClassName={s.current}>Глобальный рэйтинг</NavLink></div>
            </div>
            <NavLink to={PROFILE_ROUTE} className={s.navbar_main_right}>
                <div className={s.navbar_main_right}>
                    <div className={s.profile_main_right}>
                        Александр
                    </div>
                    <div className={s.pluce_main_right}>
                        <img src={avatar} alt="pluce"/>
                    </div>
                </div>
            </NavLink>
        </nav>
    );
};

export default Navbar;