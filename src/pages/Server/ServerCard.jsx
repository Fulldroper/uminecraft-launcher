import classes from "./ServerCard.module.css";
import {DownloadIcon, PlayIcon} from "../../components/svg/Icons";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";

const ServerCard = ({className, serverPreviewInfo}) => {

    const { title, icon, version, currentPlayers, maxPlayers, serverActive, isUpdated } = serverPreviewInfo;

    const onlineClasses = `
        ${classes['server-card__online']} 
        ${serverActive === 'active' ? 
            classes['server-card__online-icon_active'] : 
            serverActive === 'bad-connection' ? 
                classes['server-card__online-icon_bad-connection'] : 
                serverActive === 'closed' ? 
                    classes['server-card__online-icon_closed'] : ''}
    `;

    const updatedClasses = `
        ${classes['server-card__download-icon']}
        ${isUpdated === 'updated' ? 
            classes['server-card__download-icon_active'] : 
            isUpdated === 'need-update' ? 
                classes['server-card__download-icon_need-update'] : 
                isUpdated === 'need-download' ? 
                    classes['server-card__download-icon_need-download'] : ''}
    `;

    return (
        <div className={`${className} ${classes['server-card']}`}>
            <div className={classes['server-card__header']}>
                <DownloadIcon className={updatedClasses} />
                <Link to={'/server'} className={classes['server-card__title']}>{title}</Link>
            </div>
            <Link to={'/server'} className={classes['server-card__preview']}>
                <img className={classes['server-card__preview-img']} src={icon} alt={'ServerIcon'}/>
                <Button className={classes['server-card__preview-icon']} icon={<PlayIcon/>}/>
            </Link>
            <div className={classes['server-card__footer']}>
                <span className={classes['server-card__version']}>{version}</span>
                <span className={onlineClasses}>{currentPlayers} / {maxPlayers}</span>
            </div>
        </div>
    )
}

export default ServerCard;
