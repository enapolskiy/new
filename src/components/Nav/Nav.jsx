import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";


const Nav = (props) =>{
    return (
        <nav className="Nav">
            <div className="content" >
                <div className="item">
                    <NavLink to="/example1"> <h3>Example 1</h3></NavLink>

                </div>
                <div className="item">
                    <NavLink to="/example2"><h3>Example 2</h3></NavLink>

                </div>
                <div className="item">
                    <NavLink to="/example3"> <h3>Example 3</h3></NavLink>

                </div>
                <div className="item">
                    <NavLink to="/example4"><h3>Example 4</h3></NavLink>

                </div>
                <div className="item">
                    <NavLink to="/messages"><h3>Messages</h3></NavLink>

                </div>
                <div className="item">
                    <NavLink to="/users"><h3>Users</h3></NavLink>

                </div>
            </div>

        </nav>
    )
}
export  default Nav;