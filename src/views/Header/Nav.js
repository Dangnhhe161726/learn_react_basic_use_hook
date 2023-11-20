import "./Nav.scss";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                <NavLink to="/list-pokemon" activeClassName="active">Pokemon</NavLink>
                <NavLink to="/count-down-class" activeClassName="active">Count Down Brith Day (Class)</NavLink>
                <NavLink to="/count-down-hook" activeClassName="active">Count Down Brith Day (Hook)</NavLink>
                <NavLink to="/blogs" activeClassName="active">Blog</NavLink>
            </div>
        </>
    )
}

