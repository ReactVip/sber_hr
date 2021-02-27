import React from 'react';
import s from './Profile.module.css'
import avatar from '../../assets/avatar.jpg'
import rate from '../../assets/rate.svg'
import {NavLink} from "react-router-dom";

const Profile = () => {
    return (
        <div className={s.container}>
            <div className={s.profile_card}>
                <div className={s.ava_name_rate}>
                    <div><img className={s.avatar} src={avatar}/></div>
                    <div className={s.aaa}>
                        <div className={s.name_rate}>
                            <h1 className={s.profile_name}>Онуфриенко Артем Юрьевич</h1>
                            <img className={s.rate} src={rate}/>
                            <div className={s.achivs}>место для ваших достижений</div>
                        </div>

                        <div className={s.all_descr}>
                            <div className={s.spec}>
                                Менеджер
                            </div>
                            <div className={s.other_spec}>
                                Дивизион "HR платформа"
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.all_inline_links}>
                <div className={s.inline_links}>
                    <div className={s.links}>
                        <NavLink to={'profile'}>Таймлайн</NavLink>
                    </div>
                    <div className={s.link}>
                        <NavLink to={'profile/subs'}>Подписки</NavLink>
                    </div>
                    <div className={s.link}>
                        <NavLink to={'profile/mysubs'}>Подписчики</NavLink>
                    </div>
                    <div className={s.link}>
                        <NavLink to={'profile/reposts'}>Репосты</NavLink>
                    </div>
                </div>
                <div className={s.edit_profile}>
                    <button className={s.edit_profile_butt}>
                        Редактировать профиль</button>
                </div>
            </div>
            <div className={s.line}>

            </div>

            <div className={s.cards_back}>
                <div className={s.top_cards}>
                    <div className={s.card_info}>
                        <div className={s.info}><div className={s.info_title}>Почта: </div><div className={s.inform}>nufr1sh@mail.ru</div></div>
                        <div className={s.info}><div className={s.info_title}>Дата рождения: </div><div className={s.inform}>01.11.2000</div></div>
                        <div className={s.info}><div className={s.info_title}>Телефон: </div><div className={s.inform}>8(985)187-08-45</div></div>
                        <div className={s.info}>...</div>
                        <div className={s.info}>...</div>
                        <div className={s.info}>...</div>
                    </div>
                    <div>
                        <div className={s.xz}>

                        </div>
                        <div className={s.xzxz}>

                        </div>
                    </div>
                </div>
                <div className={s.flex_cards}>
                    <div className={s.post}>
                        пост
                    </div>
                    <div className={s.post}>
                        пост
                    </div>
                    <div className={s.post}>
                        пост
                    </div>
                    <div className={s.post}>
                        пост
                    </div>
                    <div className={s.post}>
                        пост
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;