import {Outlet, useLocation} from "react-router-dom";
import classes from "./Default.module.css";
import {FullLogo} from "../components/svg/Logo";
import {AsideBar} from "./AsideBar";
import {useUI} from "../store/ui-context";
import {useEffect} from "react";

const DefaultLayout = () => {
    const uiContext = useUI();

    const location = useLocation();

    useEffect(() => {
        uiContext.AsideToggle(false);
    }, [location])

    const defaultClass = `
        ${classes['main__default']} 
        ${classes['default']} 
        ${uiContext.isAsideOpen ? classes['default-aside-open'] : ''}
    `;

    const pageClass = `
        ${classes['default__page']}
        ${uiContext.isAsideOpen ? classes['default__page-aside-open'] : ''}
    `;

    return (
        <div className={defaultClass}>
            <div className={pageClass}>
                <FullLogo className={classes['default__logo']}/>
                <Outlet />
            </div>
            <AsideBar className={classes['default__aside']}/>
        </div>
    )
}

export default DefaultLayout;
