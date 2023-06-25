import classes from "./AsideBar.module.css";
import {BurgerIcon, CloseBurgerIcon} from "../components/svg/Icons";
import Avatar from "../assets/images/small_avatar.jpg";
import {useUI} from "../store/ui-context";
import {Link} from "react-router-dom";

export const AsideBar = ({className}) => {
    const uiContext = useUI();
    const onAsideTriggerHandler = () => {
        uiContext.onAsideToggle();
    };

    return (
        <div className={`${className} ${classes['aside']} `}>
            <button className={classes['aside__trigger']} onClick={onAsideTriggerHandler}>
                {!uiContext.isAsideOpen ?
                    <BurgerIcon className={classes['aside__trigger-icon']}/>
                    :
                    <CloseBurgerIcon className={classes['aside__trigger-icon']}/>
                }
            </button>
            <div className={classes['aside-bar']}>
                <Link to={'profile'} className={classes['aside__profile']}>
                    <span className={classes['aside__profile-name']}>UserName</span>
                    <button className={classes['aside__profile-avatar']}>
                        <img className={classes['profile__avatar-icon']} src={Avatar} alt={'avatar'}/>
                    </button>
                </Link>
                <div className={classes['aside__navbar']}>
                    <a className={classes['aside__navbar-link']} href={'/'}>Сервери</a>
                    <a className={classes['aside__navbar-link']} href={'/auth/sign-in'}>Мій профіль</a>
                    <a className={classes['aside__navbar-link']} href={'/settings'}>Налаштування</a>
                </div>
                <div className={classes['aside__version']}>
                    <span className={classes['aside__version-text']}>v0.12 beta</span>
                </div>
            </div>
        </div>
    )
}
