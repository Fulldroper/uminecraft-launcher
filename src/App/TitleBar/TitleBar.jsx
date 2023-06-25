import classes from './TitleBar.module.css';
import {Logo} from "../../components/svg/Logo";
import {Control, Minimize} from "../../components/svg/Control";

const ipcRenderer = window.require('electron').ipcRenderer;

const TitleBar = ({className}) => {

    const titleBarClass = `
        ${className}
        ${classes['title-bar']} 
    `;

    const minimizeHandler = () => {
        ipcRenderer.invoke('minimize-event').then();
    }

    const closeHandler = () => {
        ipcRenderer.invoke('close-event').then();
    }

    return (
        <div className={titleBarClass}>
            <div className={classes['title-bar__drag-region']} />
            <Logo className={classes['title-bar__logo']} />
            <div className={classes['title-bar__controls']}>
                <button className={classes['title-bar__control']} onClick={minimizeHandler} type='button'>
                    <Minimize className={classes['title-bar__control-svg']}/>
                </button>
                <button className={classes['title-bar__control']} onClick={closeHandler} type='button'>
                    <Control className={classes['title-bar__control-svg']}/>
                </button>
            </div>
        </div>
    );
};

export default TitleBar;

