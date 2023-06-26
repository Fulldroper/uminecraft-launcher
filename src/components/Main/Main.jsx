import classes from './Main.module.css';
import Router from "../../App/Router";
import { useUI } from "../../store/ui-context";

const Main = ({className}) => {
    const uiContext = useUI();



    const mainClasses = `
        ${className} 
        ${classes['main']}
        ${uiContext.isAsideOpen ? classes['main_blackout'] : ''}
    `;

    return (
        <div className={mainClasses}>
            <Router />
        </div>
    );
}

export default Main;
