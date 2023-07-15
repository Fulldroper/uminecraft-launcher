import classes from './Main.module.css';
import Router from "../../App/Router";
import {UIContextProvider, useUI} from "../../store/ui-context";
import React from "react";

const Main = ({className}) => {
    const uiContext = useUI();



    const mainClasses = `
        ${className} 
        ${classes['main']}
        ${uiContext.isAsideOpen ? classes['main_blackout'] : ''}
    `;

    return (
        <UIContextProvider>
            <div className={mainClasses}>
                <Router />
            </div>
        </UIContextProvider>
    );
}

export default Main;
