import classes from "./AsideBar.module.css";
import {BurgerIcon, CloseBurgerIcon} from "../components/svg/Icons";
import Avatar from "../assets/images/small_avatar.jpg";
import {useUI} from "../store/ui-context";
import {NavLink} from "react-router-dom";
import Button from "../components/Button/Button";

export const AsideBar = ({className}) => {
    const uiContext = useUI();
    const onAsideTriggerHandler = () => {
        uiContext.onAsideToggle();
    };

    /*className={`
        ${classes['aside__navbar-link']}
        ${({ isActive }) =>
            isActive ? classes['aside__navbar-link_active'] : ''
        }`
    }*/

    const navLinkClasses = ({isActive}) => isActive ? `${classes['aside__navbar-link']} ${classes['aside__navbar-ling_active']}` : classes['aside__navbar-link'];

    return (
        <div className={`${className} ${classes['aside']} `}>
            <Button
                className={classes['aside__trigger']}
                onClick={onAsideTriggerHandler}
                accent
                iconClassName={classes['aside__trigger-icon']}
                icon={!uiContext.isAsideOpen ?
                    <BurgerIcon className={classes['aside__trigger-icon']} /> :
                    <CloseBurgerIcon className={classes['aside__trigger-icon']} />
                }
            />
            <div className={classes['aside-bar']}>
                <NavLink to={'/auth/sign-in'} className={classes['aside__profile']} href={'/auth/sign-in'}>
                    <span className={classes['aside__profile-name']}>UserName</span>
                    <button className={classes['aside__profile-avatar']}>
                        <img className={classes['profile__avatar-icon']} src={Avatar} alt={'avatar'}/>
                    </button>
                </NavLink>
                <div className={classes['aside__navbar']}>
                    <NavLink to={'/'} className={navLinkClasses} >Сервери</NavLink>
                    <NavLink to={'/profile'} className={navLinkClasses} >Мій профіль</NavLink>
                    <NavLink to={'/settings'} className={navLinkClasses} >Налаштування</NavLink>
                </div>
                <div className={classes['aside__version']}>
                    <span className={classes['aside__version-text']}>v0.12 beta</span>
                </div>
            </div>
        </div>
    )
}
