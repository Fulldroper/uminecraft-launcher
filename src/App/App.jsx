import TitleBar from "./TitleBar/TitleBar";
import Main from "../components/Main/Main";
import classes from './App.module.css';
function App() {
    return (
        <div className={classes['app']}>
            <TitleBar className={classes['app__title-bar']} />
            <Main className={classes['app__main']} />
        </div>
    );
}

export default App;
