import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import {
    CubeIcon,
    DeleteIcon,
    DropdownIcon,
    FolderIcon,
    SaveIcon,
    ServerIcon as ServIcon,
    ToolIcon
} from "../components/svg/Icons";
import {Clear} from "../components/svg/Control";
import Checkbox from "../components/Checkbox/Checkbox";
import classes from "./Settings.module.css";
import {SwitchedInput} from "../components/Input/SwitchedInput";
import ContextMenu from "../components/ContextMenu/ContextMenu";
import ServerIcon from "../assets/images/serverIcon.jpg";
import {useState} from "react";

export const Settings = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cum = [
        {
            onClick: () => {},
            color: '#00D9B2',
            icon: <ToolIcon/>,
            label: 'Налаштування'
        },
        {
            onClick: () => {},
            color: '#8080FF',
            icon: <ServIcon/>,
            label: 'Системні вимоги'
        },
        {
            onClick: () => {},
            color: '#D9D000',
            icon: <CubeIcon/>,
            label: 'Встановлені моди'
        },
        {
            onClick: () => {},
            color: '#F99',
            icon: <DeleteIcon/>,
            label: 'Видалити'
        },
        {
            onClick: () => {},
            color: '#F99',
            icon: <img src={ServerIcon} alt={''} />,
            label: 'TechnoMagic'
        }
    ]

    const onDropdownToggleHandler = (event) => {
        setIsDropdownOpen((value) => !value);
    };



    return (
        <form className={classes['settings']}>
            <div className={classes['settings__header']}>
                <span className={classes['settings__header-label']}>Налаштування</span>
                <div className={`${classes['settings__select']} ${isDropdownOpen ? classes['settings__select_active'] : ''}`}>
                    <div
                        className={classes['settings__select-toggle']}
                        onClick={onDropdownToggleHandler}>
                        <span className={classes['settings__select-toggle-lable']}>Глобальні</span>
                        <DropdownIcon className={classes['settings__select-toggle-icon']}/>
                    </div>
                    <div className={classes['settings__select-dropdown']}>
                        <ContextMenu
                            className={classes['settings__select-dropdown-menu']}
                            title={'Оберіть зону налаштувань'}
                            items={cum}
                        />
                    </div>
                </div>
            </div>
            <div className={classes['settings__checkboxes']}>
                <Checkbox className={classes['settings__checkbox']} label={'На повний екран'}/>
                <Checkbox className={classes['settings__checkbox']} label={'Ще якась залупа'}/>
                <Checkbox className={classes['settings__checkbox']} label={'Ще якась залупа'}/>
                <Checkbox className={classes['settings__checkbox']} label={'Ще залупа'}/>
                <Checkbox className={classes['settings__checkbox']} label={'Шейдери'}/>
            </div>
            <div className={classes['settings__inputs']}>
                <Input
                    className={classes['settings__input']}
                    label={"Оперативна пам'ять:"}
                    placeholder={'(G) 1024'}
                    initValue={'1024'}
                    unit={'Mb'}
                />
                <div className={`${classes['settings__input']} ${classes['settings__input-select']}`}>
                    <label className={classes['settings__input-select-label']}>Тема:</label>
                    <select className={classes['settings__input-select-field']} >
                        <option>Default</option>
                    </select>
                </div>
                <Input
                    className={classes['settings__input']}
                    placeholder={'(G) 900'}
                    label={'Висота вікна:'}
                    unit={'Px'}
                />
                <Input
                    className={classes['settings__input']}
                    placeholder={'(G) 600'}
                    label={'Ширина вікна:'}
                    unit={'Px'}
                />
                <SwitchedInput
                    className={classes['settings__fs']}
                    label={'Розташування файлів:'}
                    disabled={true}
                    initValue={'(G) D:/Games/Minecraft/'}
                    triggerIcon={<FolderIcon/>}
                    triggerLabel={'Змінити'}
                />
            </div>
            <div className={classes['settings__controls']}>
                <Button
                    className={''}
                    label={'Зберегти зміни'}
                    accent
                    rightIcon={<SaveIcon className={''}/>}
                />
                <Button
                    className={''}
                    label={'Скасувати зміни'}
                    leftIcon={<Clear className={''}/>}
                />
            </div>
        </form>
    )
}
