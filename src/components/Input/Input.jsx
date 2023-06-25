import {useState} from "react";
import classes from './Input.module.css';
import {Clear} from "../svg/Control";

const Input = ({className, error, filters, label, name, placeholder, initValue, type, unit, active}) => {
    if(!initValue) {
        initValue = '';
    }

    const [value, setValue] = useState(initValue);

    const onInput = (event) => {
        if(filters) {
            setValue(filters(event.target.value));
        } else{
            setValue(event.target.value)
        }
        console.log(value);
        //props.callback(value);
    }

    const onClearHandler = () => {
        setValue('');
    }

    return (
        <>
            <label className={`${className} ${classes['field']}`}>
                {label && <span className={classes['field__label']}>{label}</span>}
                <input
                    className={classes['field__input']}
                    placeholder={placeholder}
                    type={!type ? 'text' : type}
                    value={value}
                    name={name}
                    onInput={onInput}
                />
                {value !== '' &&
                    <button className={classes['field__clear']} onClick={onClearHandler}>
                        <Clear className={classes['field__clear-icon']} />
                    </button>
                }
                {unit && <span className={classes['field__unit']}>{unit}</span>}
            </label>
            {error && <p className={classes['field__error']}>{error}</p>}
        </>
    )
}

export default Input;
