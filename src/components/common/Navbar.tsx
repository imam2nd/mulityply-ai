import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import * as style from "@/styles/navbar.module.css";
import brandLogo from "@/images/brand-logo.svg";
import menuBtn from "@/images/hamburger.svg";
import NavLinks from "@/components/common/NavLinks";

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(false);
  }, [location.href]);

  useEffect(() => {
    const changeNavBg = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", changeNavBg);
    return () => window.removeEventListener("scroll", changeNavBg);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    isMobile
      ? body?.classList.add(style.stopOverflowY)
      : body?.classList.remove(style.stopOverflowY);

    return () => body?.classList.remove(style.stopOverflowY);
  }, [isMobile]);

  return (
    <section
      aria-label="navbar section"
      className={
        isScrolled ? `${style.navWrapper} ${style.changeBg}` : style.navWrapper
      }
    >
      <nav className={style.nav}>
        <Link to="/">
          <img src={brandLogo} alt="brand-logo" className={style.navLogo} />
        </Link>
        <img
          src={menuBtn}
          alt="menu button"
          className={style.menuBtn}
          onClick={() => setIsMobile(!isMobile)}
        />
        <NavLinks isMobile={isMobile} />
      </nav>
    </section>
  );
};

export default Navbar;
