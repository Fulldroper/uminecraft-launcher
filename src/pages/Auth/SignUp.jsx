import classes from "./Auth.module.css";
import {FullLogo} from "../../components/svg/Logo";
import Input from "../../components/Input/Input";

const SignUp = () => {
    return (
        <div className={classes['login']}>
            <FullLogo className={classes['login__logo']}/>
            <form className={classes['login__form']}>
                <div className={classes['login__inputs']}>
                    <Input className={classes['login__input']} placeholder={'Email'} type={'email'}/>
                    <Input className={classes['login__input']} placeholder={'Нікнейм'}/>
                    <Input className={classes['login__input']} placeholder={'Пароль'} type={'password'}/>
                    <Input className={classes['login__input']} placeholder={'Повторити пароль'} type={'password'}/>
                </div>
                <button className={classes['login__submit']} type='button'>Увійти</button>
            </form>
            <div className={classes['login__links']}>
                <a className={classes['login__link']} href={'/auth/sign-in'}>У мене є аккаунт</a>
            </div>
        </div>
    )
}

export default SignUp;
