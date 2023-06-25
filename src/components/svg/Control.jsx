import classes from "./Control.module.css";
export const Control = ({className}) => {
    return (
        <svg className={`${className} ${classes['close']}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.63599 5.63605L18.3639 18.364" />
            <path d="M5.63599 18.364L18.3639 5.63603" />
        </svg>
    )
}

export const Clear = ({className}) => {
    return (
        <svg className={`${className} ${classes['clear']}`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12" />
            <path d="M4 4L12 12" />
        </svg>
    )
}

export const Minimize = ({className}) => {
    return (
        <svg className={`${className} ${classes['minimize']}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18H20" />
        </svg>
    );
}
