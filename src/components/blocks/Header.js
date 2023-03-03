import React from "react";
import {NavLink, Link} from "react-router-dom";
import {Logo} from "components/base";
import {useThemeContext} from "context";
import {ifElse} from "function";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-regular-svg-icons";

//scss

export const Header = () => {
  const navItems = [
    {id: 1, text: "Home", path: "/"},
    {id: 2, text: "Products", path: "/products"},
  ];

  const {theme, setTheme} = useThemeContext();

  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="container d-flex align-items-center">
            <Link to="/" className="navbar-brand">
              <Logo />
            </Link>
            <ul className="navbar-nav justify-content-center w-100">
              {navItems.map((item) => (
                <li className="nav-item fs-5 fw-bolder" key={item.id}>
                  <NavLink className="nav-link" to={item.path}>
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <FontAwesomeIcon
              onClick={() =>
                ifElse.setState({
                  setState: setTheme,
                  condition: theme === "dark",
                  ifTrue: "light",
                  ifFalse: "dark",
                })
              }
              icon={ifElse.ternary({
                condition: theme === "dark",
                ifTrue: faMoon,
                ifFalse: faSun,
              })}
              className={`fs-1 cursor-pointer text-${ifElse.ternary({
                condition: theme === "dark",
                ifTrue: "white",
                ifFalse: "warning",
              })}`}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
