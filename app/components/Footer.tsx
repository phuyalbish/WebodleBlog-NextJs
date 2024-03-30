import React from "react";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import styles from "./assets/css/Footer.module.css";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaMapMarkerAlt,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooterInfo}>
        <div className={styles.footer_outer}>
          <h2>Contact us:</h2>
          <div className={styles.inner_footer}>
            <FaPhoneAlt className={styles.footer_icon} />
            <p>+977 9869023901</p>
          </div>
          <div className={styles.inner_footer}>
            <FaMapMarkerAlt className={styles.footer_icon} />
            <p>Kathmandu, Nepal KTM 44600</p>
          </div>
          <div className={styles.inner_footer}>
            <MdEmail className={styles.footer_icon} />
            <p>webodleinc@gmail.com</p>
          </div>
        </div>

        <div className={styles.footer_outer}>
          <h2>Follow us:</h2>
          <div className={styles.inner_footer}>
            <FaFacebook className={styles.footer_icon} />
            <p>facebook.com/webodle</p>
          </div>
          <div className={styles.inner_footer}>
            <FaInstagram className={styles.footer_icon} />
            <p>instagram.com/webodle</p>
          </div>
          <div className={styles.inner_footer}>
            <FaTwitterSquare className={styles.footer_icon} />
            <p>twitter.com/webodle</p>
          </div>
          <div className={styles.inner_footer}>
            <FaLinkedin className={styles.footer_icon} />
            <p>linkedin.com/company/webodle</p>
          </div>
          <div className={styles.inner_footer}>
            <FaGithubSquare className={styles.footer_icon} />
            <p>github.com/webodle</p>
          </div>
        </div>

        <div className={styles.footer_outer}>
          <h2>About Us:</h2>
          <p>
            Webodle Inc. is the common place for reading and posting interesting
            blogs. Join webodle family to showcase your talent.
          </p>
          <h2>Webodle Inc</h2>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        All rights reserved 2024. Webodle. Inc
      </div>
    </footer>
  );
}

export default Footer;
