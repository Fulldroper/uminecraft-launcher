import classes from "./SwitchedInput.module.css";
import Button from "../Button/Button";
import {useState} from "react";

export const SwitchedInput = ({className ,label, initValue = '', error, filters, disabled = false, onTrigger, triggerLabel, triggerIcon , autoResize = true}) => {
    const [value, setValue] = useState(() => {
        return  initValue;
    });

    const onInput = (event) => {
        if(filters) {
            setValue(filters(event.target.value));
        } else{
            setValue(event.target.value)
        }

        if(autoResize) {
            event.target.style.width = 0;
            event.target.style.width = event.target.scrollWidth + 'px';
        }
    }

    return (
        <>
            <label className={`${className} ${classes['input']}`}>
                <span className={classes['input__label']}>{label}</span>
                <input
                    className={classes['input__field']}
                    value={value}
                    onInput={onInput}
                    {...(disabled && {disabled: true})}
                />
                <Button
                    className={classes['input__trigger']}
                    label={triggerLabel}
                    leftIcon={triggerIcon}
                    onClick={onTrigger}
                />
            </label>
            {error && <p className={classes['field__error']}>{error}</p>}
        </>
    )
}
