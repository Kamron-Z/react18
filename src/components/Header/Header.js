import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {loginOut} from "../../redux/auth-reducer";

const Header = (props) => {
    return (
        <header>
            {
                props.isAuth ? <div>
                    <div>
                        {props.email}
                    </div>
                    <button onClick={props.loginOut}>
                        login out
                    </button>
                </div> : <NavLink to={`/login`}>Login</NavLink>
            }
        </header>
    );
}

export default Header;