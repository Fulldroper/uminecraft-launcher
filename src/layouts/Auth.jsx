import Steve from "../assets/images/steve.png";
import classes from './Auth.module.css';
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className={`${classes['main__auth']} ${classes['auth']}`}>
            <div className={classes['auth__page']}>
                <Outlet />
            </div>
            <img className={classes['auth__steve']} src={Steve} alt='logo'/>
        </div>
    )
}

export default AuthLayout;
