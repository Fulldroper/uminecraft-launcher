import classes from './Button.module.css'

const Button = ({variant ,className, icon, label}) => {
    return (
        <>
            {variant === '1' && <Button1 className={className} icon={icon} label={label} />}
            {variant === '2' && <Button2 className={className} icon={icon} label={label} />}
        </>
    )
}

const Button1 = ({className, icon, label}) => {
    return (
        <button className={`${className} ${classes['btn1']}`}>
            <div className={classes['btn-icon']}>{icon}</div>
            <label className={classes['btn1-label']}>{label}</label>
        </button>
    )
}

const Button2 = ({className, icon, label}) => {
    return (
        <button className={`${className} ${classes['btn2']}`}>
            <label className={classes['btn2-label']}>{label}</label>
            <div className={classes['btn-icon']}>{icon}</div>
        </button>
    )
}

export default Button;
