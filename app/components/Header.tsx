'use client'
import React from "react";
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
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogoAndHeader}>
          <Link href="/" className="nav_logo">
            <Image 
              src={Logo}
              width={50}
              height={50}
              alt="Picture of the author"/>
            
          </Link>

          <h3>   Webodle Blog</h3>
        </div>
          <div className={styles.navbarMenu}>
            <Link
              href="/writers"
              className={styles.navbarMenuInner}
              
            >
              <p>Writers</p>
            </Link>
            <Link
              href="/posts"
              className={styles.navbarMenuInner}
            >
             <p>Posts</p>
            </Link>
            
            <Link
              href="/contactus"
              className={styles.navbarMenuInner}
            >
              <p>Contact</p>
            </Link>
            <div className="darkMode">
              <DarkMode/>
            </div>
            
          </div>
        
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
