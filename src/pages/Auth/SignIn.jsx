import {FullLogo} from "../../components/svg/Logo";
import classes from "./Auth.module.css";
import Input from "../../components/Input/Input";
import GoogleLogo from '../../assets/images/google.svg';
import FacebookLogo from '../../assets/images/facebook.png';
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";

const SignIn = () => {

    return (
        <div className={classes['login']}>
            <FullLogo className={classes['login__logo']}/>
            <form className={classes['login__form']}>
                <div className={classes['login__inputs']}>
                    <Input className={classes['login__input']} placeholder={'Email'}/>
                    <Input className={classes['login__input']} placeholder={'Пароль'} type={'password'}/>
                </div>
                <Button className={classes['login__submit']} accent label={'Увійти'} type={'submit'}/>
                <div className={classes['login__oauths']}>
                    <button className={classes['login__oauth']} type='button'>
                        <img className={classes['login__oauth-logo']} src={FacebookLogo} alt='Facebook Logo'/>
                    </button>
                    <button className={classes['login__oauth']} type='button'>
                        <img className={classes['login__oauth-logo']} src={GoogleLogo} alt='Google Logo'/>
                    </button>
                </div>
            </form>
            <div className={classes['login__links']}>
                <Link to={'/'} className={classes['login__link']}>Забули пароль?</Link>
                <Link to={'/auth/sign-up'} className={classes['login__link']}>Регістрація нового аккаунту</Link>
            </div>
        </div>
    )
}

export default SignIn;
