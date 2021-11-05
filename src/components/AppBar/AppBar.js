import Navigation from "../Navigation/Navigation";
import s from './AppBar.module.css';

function AppBar() {
    return (
        <header className={s.navigator}>
            <Navigation/>
        </header>
    )
}
export default AppBar;
