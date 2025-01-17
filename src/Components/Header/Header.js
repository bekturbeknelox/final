import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const setActive = ({ isActive }) => (isActive ? "active_page" : "");
const Header = (props) => {
  return (
    <>
      <header>
        <div className="nav-placeholder"></div>
        <Navbar fixed="top" collapseOnSelect expand="md">
          <Container>
            {/* Лого */}
            <Navbar.Brand className="logo" href="/">
              Resnichki-KG
            </Navbar.Brand>
            {/* Появляющийся бургер */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* Часть,которая останется в бургере */}
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/" className={setActive}>
                  Главная
                </NavLink>
                <NavLink to="/catalog" className={setActive}>
                  Услуги
                </NavLink>
                {/* <NavLink to="/blog" className={setActive}>Блог</NavLink> */}
                <NavLink to="/cart" className={setActive}>
                  Моя бронь
                </NavLink>
                <NavLink to="/login" className={setActive}>
                  Войти
                </NavLink>

                {/* <NavLink to="/contacts" className={setActive}>Контакты</NavLink> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
export default Header;
