import React from "react";
import {NavLink, Link} from "react-router-dom";
import {Button, Logo} from "components/base";
import {useThemeContext} from "context";

//scss

export const Header = () => {
  const navItems = [
    {id: 1, text: "Home", path: "/"},
    {id: 2, text: "Products", path: "/products"},
  ];

  const {theme, setTheme} = useThemeContext();

  const handleTheme = (darkMode, lightMode) => {
    setTheme(theme === darkMode ? lightMode : darkMode);
  };

  const themeButtonColor = (themeColor, darkMode, lightMode) => {
    return theme === themeColor ? darkMode : lightMode;
  };

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
            <Button
              className="w-20"
              onClick={() => handleTheme("dark", "light")}
              variant={themeButtonColor("dark", "primary", "success")}>
              Change Theme to {themeButtonColor("dark", "Light", "Dark")}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
