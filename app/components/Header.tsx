'use client'
import React, { useState } from "react";
import Logo from "../images/logo.png";
import { FaBars } from "react-icons/fa6";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import styles from './Header.module.css'
import Image from 'next/image';
import Link from 'next/link'

import DarkMode from "./DarkMode/DarkMode";

import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogoAndHeader}>
          <Link href="/" className="nav_logo" onClick={closeNavHandler}>
            <Image 
              src={Logo}
              width={50}
              height={50}
              alt="Picture of the author"/>
            
          </Link>

          <h3>   Webodle Blog</h3>
        </div>
        {isNavShowing && (
          <div className={styles.navbarMenu}>
            <Link
              href="/writers"
              className={styles.navbarMenuInner}
              onClick={closeNavHandler}
            >
              Writers
            </Link>
            <Link
              href="/posts"
              className={styles.navbarMenuInner}
              onClick={closeNavHandler}
            >
             Posts
            </Link>
            
            <Link
              href="/contactus"
              className={styles.navbarMenuInner}
              onClick={closeNavHandler}
            >
              Contact
            </Link>
            <DarkMode/>
            
          </div>
        )}
        <button
          className={styles.navbarToggleBtn}
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

const changeColor = () => {
  const root = document.documentElement;
  root.style.setProperty("--main-color", "red");
  // setColor('red'); // Update state variable if needed
};

export default Header;
