import classes from './Button.module.css'

const Button = ({className, leftIcon, rightIcon, icon, iconClassName, label, accent, onClick, type = 'button'}) => {


    return (
        <button
            className={`
                ${className ? className : ''}
                ${classes['button']} 
                ${accent ? classes['button_accent'] : ''}
            `}
            onClick={onClick}
            type={type}
        >
            {leftIcon &&
                <div
                    className={`
                        ${iconClassName ? iconClassName : ''}
                        ${classes['button__icon']} 
                        ${classes['button__icon_left']}
                    `}
                >
                    {leftIcon}
                </div>
            }
            {icon &&
                <div
                    className={`
                        ${iconClassName ? iconClassName : ''}
                        ${classes['button__icon']} 
                    `}
                >
                    {icon}
                </div>
            }
            {label &&
                <label className={classes['button__label']}>
                    {label}
                </label>
            }
            {rightIcon &&
                <div
                    className={`
                        ${iconClassName ? iconClassName : ''}
                        ${classes['button__icon']} 
                        ${classes['button__icon_right']}
                    `}
                >
                    {rightIcon}
                </div>
            }
        </button>
    )
}

export default Button;
