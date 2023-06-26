import {useState} from "react";
import classes from "./Checkbox.module.css";
import {CheckIcon} from "../svg/Icons";

const Checkbox = ({className, label = '', checked = false, name}) => {
    const [isChecked, setIsChecked] = useState(checked);

    const onChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <label className={`${className} ${classes['checkbox']}`}>
            <div className={classes['checkbox__input']}>
                <input type="checkbox" checked={isChecked} onChange={onChange} hidden/>
                {isChecked && <CheckIcon />}
            </div>
            <span className={classes['checkbox__label']}>{label}</span>
        </label>
    )
}

export default Checkbox;
