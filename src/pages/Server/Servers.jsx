import ServerCard from "./ServerCard";
import classes from "./Servers.module.css";

const Servers = () => {
    return (
        <div className={classes['servers']}>
            <div className={classes['servers__row']}>
                <ServerCard className={classes['servers__server-card']}/>
                <ServerCard className={classes['servers__server-card']}/>
                <ServerCard className={classes['servers__server-card']}/>
            </div>
            <div className={classes['servers__row']}>
                <ServerCard className={classes['servers__server-card']}/>
                <ServerCard className={classes['servers__server-card']}/>
            </div>
        </div>
    )
}

export default Servers;
