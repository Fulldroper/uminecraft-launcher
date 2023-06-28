import classes from "./Server.module.css";
import ServerIcon from '../../assets/images/serverIcon.jpg';
import Avatar from '../../assets/images/friend_avatar.jpg';
import Button from "../../components/Button/Button";
import {
    BackIcon,
    ContextIcon,
    DeleteIcon,
    DownloadIcon,
} from "../../components/svg/Icons";

const Server = () => {
    const isUpdated = '';

    const modList = [
        'Kitchen Carrot',
        'Kitchen Carrot',
        'Panda\'s Falling Trees',
        'Stackable Flowers',
        'Meteor Hell',
        'Kitchen Carrot',
    ]

    return (
        <div className={classes['server']}>
            <div className={classes['server__header']}>
                <img className={classes['server__header-poster']} src={ServerIcon} alt={'ServerIcon'} />
                <div className={classes['server__header-box']}>
                    <div className={classes['server__header-title-row']}>
                        <span className={classes['server__header-title']}>TechnoMagic</span>

                        <Button className={classes['server__header-back']} leftIcon={<BackIcon />} label={'Всі сервери'}/>
                        <Button className={classes['server__header-context']} icon={<ContextIcon/>}/>
                    </div>
                    <div className={classes['server__header-meta']}>
                        <span className={classes['server__header-players']}>
                            10 / 125
                        </span>
                        <span className={classes['server__header-version']}>1.12.2</span>
                        <Button className={classes['server__header-mods-btn']} label={'Переглянути усі моди (74)'}/>
                    </div>
                    <div className={classes['server__header-tags']}>
                        {modList.map(mod => <div className={classes['server__header-tag']}>{mod}</div>)}
                    </div>
                </div>
            </div>
            <div className={classes['server__description']}>
                <span className={classes['server__description-name']}>Опис сервера:</span>
                <p className={classes['server__description-text']}>Текст заповнення Lorem ipum використовується графічними дизайнерами, програмістами та друкарями з метою зайняття простору веб -сайту, рекламного продукту чи редакційного виробництва, остаточний текст якого ще не готовий.</p>
            </div>
            <div className={classes['server__friends']}>
                <span className={classes['server__friends-name']}>Друзі онлайн:</span>
                <div className={classes['server__friends-box']}>
                    <div className={classes['server__friend']}>
                        <img className={classes['server__friend-img']} src={Avatar} alt={'A'}/>
                        <span className={classes['server__friend-name']}>Маркус</span>
                    </div>
                    <div className={classes['server__friend']}>
                        <img className={classes['server__friend-img']} src={Avatar} alt={'A'}/>
                        <span className={classes['server__friend-name']}>Маркус</span>
                    </div>
                    <div className={classes['server__friend']}>
                        <img className={classes['server__friend-img']} src={Avatar} alt={'A'}/>
                        <span className={classes['server__friend-name']}>Маркус</span>
                    </div>
                </div>
                <span className={classes['server__friends-count']}>Всього: 4</span>
            </div>
            <div>
                <Button rightIcon={<DownloadIcon />} label={'Завантажити 41.2mb'} accent  />
                {isUpdated === 'ready' && <Button leftIcon={<DeleteIcon />} label={'Видалити'} />}
                {isUpdated === '' && <span></span>}
            </div>
        </div>
    )
}

export default Server
