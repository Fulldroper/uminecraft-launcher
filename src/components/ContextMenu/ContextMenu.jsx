import classes from "./ContextMenu.module.css";

const ContextMenu = ({className, title, items}) => {
    return (
        <div className={`${className} ${classes['context-menu']}`}>
            {title &&
                <span className={classes['context-menu__title']}>{title}</span>
            }
            <div className={classes['context-menu__items']}>
                {
                    items.map(item =>
                        <button className={classes['context-menu__item']} onClick={item.onClick}>
                            <span
                                className={classes['context-menu__item-icon']}
                                style={{backgroundColor: item.color}}
                            >
                                {item.icon}
                            </span>
                            <span className={classes['context-menu__item-label']}>{item.label}</span>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default ContextMenu;
