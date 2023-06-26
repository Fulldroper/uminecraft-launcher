import {useState} from "react";
import classes from './Input.module.css';
import {Clear} from "../svg/Control";

const Input = ({className, error, filters, label, name, placeholder, initValue = '', type, unit, autoResize = true}) => {

    const [value, setValue] = useState(initValue);

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

    const onClearHandler = () => {
        setValue('');
    }

    return (
        <>
            <label className={`${className} ${classes['field']}`}>
                {label && <span className={classes['field__label']}>{label}</span>}
                <input
                    className={`
                        ${classes['field__input']} 
                        ${autoResize ? classes['field__input_auto-resizable'] : ''}
                    `}
                    placeholder={placeholder}
                    type={!type ? 'text' : type}
                    value={value}
                    name={name}

                    onInput={onInput}
                />
                {value !== '' &&
                    <button
                        className={classes['field__clear']}
                        onClick={onClearHandler}
                    >
                        <Clear className={classes['field__clear-icon']} />
                    </button>
                }
                {unit &&
                    <span className={classes['field__unit']}>{unit}</span>
                }
            </label>
            {error &&
                <p className={classes['field__error']}>{error}</p>
            }
        </>
    )
}

export default Input;
