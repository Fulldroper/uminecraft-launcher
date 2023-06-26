import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import classes from "./Profile.module.css";
import Avatar from '../assets/images/big_avatar.png';
import {EditIcon, LogoutIcon, SaveIcon} from "../components/svg/Icons";
import {Clear} from "../components/svg/Control";
import {SwitchedInput} from "../components/Input/SwitchedInput";

export const Profile = () => {
    return (
        <div className={classes['profile']}>
            <div className={classes['profile__account']}>
                <img className={classes['profile__avatar']} src={Avatar} alt={'avatar'}/>
                <div className={classes['profile__account-some']}>
                    <span className={classes['profile__name']}>UserName</span>
                    <button className={classes['profile__avatar-btn']}>Додати фото</button>
                </div>
                <Button
                    className={classes['profile__logout']}
                    label={'Вийти'}
                    leftIcon={<LogoutIcon/>}
                />
            </div>
            <div className={classes['profile__inputs']}>
                <div className={classes['profile__input']}>
                    <SwitchedInput
                        className={'profile__input'}
                        label={'Нікнейм:'}
                        initValue={'UserName'}
                        disabled={true}
                        triggerIcon={<EditIcon />}
                        triggerLabel={'Змінити'}
                    />
                </div>
                <div className={classes['profile__input']}>
                    <SwitchedInput
                        className={'profile__input'}
                        label={'Email:'}
                        initValue={'username@gmail.com'}
                        disabled={true}
                        triggerIcon={<EditIcon />}
                        triggerLabel={'Змінити'}
                    />
                </div>
                <div className={classes['profile__password']}>
                    <label className={classes['profile__password-label']}>Змінити пароль:</label>
                    <div className={classes['profile__password-inputs']}>
                        <Input className={'profile__password-input'} placeholder={'Новий пароль'} name={''} type={''} />
                        <Input className={'profile__password-input'} placeholder={'Повторити пароль'} name={''} type={''} />
                    </div>
                </div>
            </div>

            <div className={classes['profile__buttons']}>
                <Button
                    className={classes['profile__save']}
                    accent label={'Зберегти зміни'}
                    rightIcon={<SaveIcon />}
                />
                <Button
                    className={classes['profile__cancel']}
                    label={'Скасувати зміни'}
                    leftIcon={<Clear />}
                />
            </div>
        </div>
    )
}
