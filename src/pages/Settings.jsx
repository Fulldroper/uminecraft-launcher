import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import {FolderIcon, SaveIcon} from "../components/svg/Icons";
import {Clear} from "../components/svg/Control";
import Checkbox from "../components/Checkbox/Checkbox";
import classes from "./Settings.module.css";
import {SwitchedInput} from "../components/Input/SwitchedInput";

export const Settings = () => {

    return (
        <form className={classes['settings']}>
            <div className={classes['settings__header']}>
                <span className={classes['settings__header-label']}>Налаштування</span>
                <select className={classes['settings__header-select']}>
                    <option value={'global'}>Глобальні</option>
                    <option value={'TechnoMagic'}>TechnoMagic</option>
                </select>
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
                <div className={classes['settings__input']}>
                    <label>Тема</label>
                    <select>
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
