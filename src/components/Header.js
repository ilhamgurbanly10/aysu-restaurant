
import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from './Images';
import { Modal, ModalBtn } from './Modal';
import {useEffect} from 'react';
import flashNavbarAnimation from '../assets/js/library.js';
import closeNavbarNav from './navbar/Navbar';



const Header = () => {

  useEffect(() => {
    const nav = document.querySelector('.navbar');
    const toggler = document.querySelector('.navbar-toggler');
    const buttons = document.querySelectorAll('.nav-link');
    flashNavbarAnimation(nav);
    closeNavbarNav(toggler, buttons);
  }, []);

  return (
    <>
      <header className="header">

        <nav className="navbar navbar-expand-lg position-fixed start-0 w-100 py-3">

          <div className="container-1 d-flex flex-wrap justify-content-between align-items-center align-content-center">

            <a className="navbar-brand" href="#">
              <img src={logo} alt="Navbar Brand" className="brand-img" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-line"></span>
            </button>

            <div className="collapse navbar-collapse flex-grow-0 mt-4 mt-lg-0" id="navbarSupportedContent">

              <ul className="navbar-nav align-items-lg-center p-3 p-lg-0 align-content-lg-center">

                <li className="nav-item me-lg-4 mt-4 mt-lg-0">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/">HOME</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-4 mt-lg-0">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/menu">MENU</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-4 mt-lg-0">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/gallery">GALLERY</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-4 mt-lg-0">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/story">STORY</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-4 mt-lg-0">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/news">NEWS</NavLink>
                </li>

                <li className="nav-item me-lg-4 mt-4 mt-lg-0">
                  <NavLink className={isActive => "nav-link text-btn btn-underline " + (isActive.isActive ? "active" : "") } to="/contact">CONTACT</NavLink>
                </li>

                <li className="me-lg-4 mt-4 mt-lg-0">
                  <ModalBtn />
                </li>  

              </ul> 

            </div>

          </div>

        </nav>  

        <Modal />

      </header>  

    </>
  )
};

export default Header;