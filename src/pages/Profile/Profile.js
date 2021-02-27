import React from 'react';
import s from './Profile.module.css'
import avatar from '../../assets/avatar.jpg'
import rate from '../../assets/rate.png'

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
                        Таймлайн
                    </div>
                    <div className={s.link}>
                        Подписки
                    </div>
                    <div className={s.link}>
                        Подписчики
                    </div>
                    <div className={s.link}>
                        Репосты
                    </div>
                </div>
                <div className={s.edit_profile}>
                    <div className={s.edit_profile_butt}>
                        Редактировать профиль</div>
                </div>
            </div>
            <div className={s.line}>

            </div>


            <div className={s.top_cards}>
                <div className={s.card_info}>
                    доп инфа о профиле
                </div>
                <div>
                    <div className={s.xz}>
                        хз
                    </div>
                    <div className={s.xzxz}>
                        хз
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
    );
};

export default Profile;