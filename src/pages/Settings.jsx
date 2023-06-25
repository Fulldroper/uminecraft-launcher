import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import {SaveIcon} from "../components/svg/Icons";
import {Clear} from "../components/svg/Control";

export const Settings = () => {

    return (
        <div>
            <div>
                <label>Налаштування</label>
                <select>
                    <option value={'global'}>Глобальні</option>
                    <option value={'TechnoMagic'}>TechnoMagic</option>
                </select>
            </div>
            <div>
                <input type={'checkbox'} id={'option1'} name={'option1'} value={'fullscreen'}/>
                <label>На повний екран</label>

                <input type={'checkbox'} id={'option2'} name={'option2'} value={''}/>
                <label>Ще якась залупа</label>

                <input type={'checkbox'} id={'option3'} name={'option3'} value={''}/>
                <label>Ще якась залупа</label>

                <input type={'checkbox'} id={'option4'} name={'option4'} value={''}/>
                <label>Ще якась залупа</label>

                <input type={'checkbox'} id={'option5'} name={'option5'} value={'shaders'}/>
                <label>Шейдери</label>
            </div>
            <div>
                <Input className={''} label={"Оперативна пам'ять"} unit={'Mb'}/>
                <div>
                    <label>Тема</label>
                    <select>
                        <option>Default</option>
                    </select>
                </div>
                <Input className={''} label={'Висота вікна'} unit={'Px'}/>
                <Input className={''} label={'Ширина вікна'} unit={'Px'}/>
            </div>
            <div>
                <span>Розташування файлів</span>
                <span>D:/Games/Minecraft/</span>
                <button>
                    <span>Змінити</span>
                </button>
            </div>
            <div>
                <Button variant={'2'} className={''} label={'Зберегти зміни'} icon={<SaveIcon className={''}/>}/>
                <Button variant={'1'} className={''} label={'Скасувати зміни'} icon={<Clear className={''}/>}/>
            </div>
        </div>
    )
}
