import classes from "./Auth.module.css";
import {FullLogo} from "../../components/svg/Logo";
import Input from "../../components/Input/Input";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";

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
                <Button className={classes['login__submit']} accent label={'Зареєструватися'} />

            </form>
            <div className={classes['login__links']}>
                <Link to={'/auth/sign-in'} className={classes['login__link']}>У мене є аккаунт</Link>
            </div>
        </div>
    )
}

export default SignUp;
