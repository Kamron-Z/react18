import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>Ahmad</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Damir</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Karim</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Lorem ipsum dolor.</div>
                <div className={classes.message}>Lorem ipsum dolor sit amet.</div>
            </div>
        </div>
    );
}

export default Dialogs;