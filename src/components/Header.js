import React, { useState } from "react";
import { Route } from "react-router-dom";
import "../css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import { GiSpaceship } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "../scss/header.scss";

const Header = () => {
  const [active, setActive] = useState("navbar");

  const showNav = () => {
    setActive("navbar activeNavBar");
  };

  const removeNav = () => {
    setActive("navbar");
  };

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h4 className="flex logoName">
              space
              <GiSpaceship className="icon" />
              voyege
            </h4>
          </a>
        </div>

        <div className={active}>
          <ul className="navlists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contacts
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>

            <div className="headerbtns flex">
              <button className="btn loginBtn">
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i> LogIn
                    </Nav.Link>
                  </LinkContainer>
                )}

                {/* <a href="#">Login</a> */}
              </button>

              <button className="btn">
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
    // <header>
    //   <Navbar
    //     className="navbar"
    //     bg=""
    //     variant="dark"
    //     expand="lg"
    //     collapseOnSelect
    //   >
    //     <Container>
    //       <LinkContainer to="/">
    //         <Navbar.Brand>Space Voyege</Navbar.Brand>
    //       </LinkContainer>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Route render={({ history }) => <SearchBox history={history} />} />
    //         <Nav className="ml-auto">
    //           <LinkContainer to="/services">
    //             <Nav.Link>services</Nav.Link>
    //           </LinkContainer>
    //           <NavDropdown title="services" id="servicesmenu">
    //             <LinkContainer to="/vr">
    //               <NavDropdown.Item>VR</NavDropdown.Item>
    //             </LinkContainer>
    //             <LinkContainer to="/events">
    //               <NavDropdown.Item>Events</NavDropdown.Item>
    //             </LinkContainer>
    //             <LinkContainer to="/guides">
    //               <NavDropdown.Item>Guides</NavDropdown.Item>
    //             </LinkContainer>
    //             <LinkContainer to="/forum">
    //               <NavDropdown.Item>Forum</NavDropdown.Item>
    //             </LinkContainer>
    //             <LinkContainer to="/rpg">
    //               <NavDropdown.Item>RPG Game</NavDropdown.Item>
    //             </LinkContainer>
    //             <LinkContainer to="/news">
    //               <NavDropdown.Item>News Feed</NavDropdown.Item>
    //             </LinkContainer>
    //             <LinkContainer to="/vip">
    //               <NavDropdown.Item>Become VIP</NavDropdown.Item>
    //             </LinkContainer>
    //           </NavDropdown>
    //           <LinkContainer to="/contacts">
    //             <Nav.Link>Contacts</Nav.Link>
    //           </LinkContainer>
    //           {userInfo ? (
    //             <NavDropdown title={userInfo.name} id="username">
    //               <LinkContainer to="/profile">
    //                 <NavDropdown.Item>Profile</NavDropdown.Item>
    //               </LinkContainer>
    //               <NavDropdown.Item onClick={logoutHandler}>
    //                 Logout
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //           ) : (
    //             <LinkContainer to="/login">
    //               <Nav.Link>
    //                 <i className="fas fa-user"></i> Sign In
    //               </Nav.Link>
    //             </LinkContainer>
    //           )}
    //           {userInfo && userInfo.isAdmin && (
    //             <NavDropdown title="Admin" id="adminmenu">
    //               <LinkContainer to="/admin/userlist">
    //                 <NavDropdown.Item>Users</NavDropdown.Item>
    //               </LinkContainer>
    //               <LinkContainer to="/admin/productlist">
    //                 <NavDropdown.Item>Products</NavDropdown.Item>
    //               </LinkContainer>
    //               <LinkContainer to="/admin/orderlist">
    //                 <NavDropdown.Item>Orders</NavDropdown.Item>
    //               </LinkContainer>
    //             </NavDropdown>
    //           )}
    //           <LinkContainer to="/cart">
    //             <Nav.Link>
    //               <i className="fas fa-shopping-cart"></i> Cart
    //             </Nav.Link>
    //           </LinkContainer>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </header>
  );
};

export default Header;
