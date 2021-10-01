import style from "./Nav.module.css";

const Nav = (props) =>{
    return (
        <nav className="Nav">
            <div className="content" >
                <div className="item">
                    <a href="/example1"> <h3>Example 1</h3></a>

                </div>
                <div className="item">
                    <a href="/example2"><h3>Example 2</h3></a>

                </div>
                <div className="item">
                    <a href="/example3"> <h3>Example 3</h3></a>

                </div>
                <div className="item">
                    <a href="/example4"><h3>Example 4</h3></a>

                </div>
            </div>
        </nav>
    )
}
export  default Nav;