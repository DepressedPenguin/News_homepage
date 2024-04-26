import styles from "./navbar.module.scss";

// LOGO IMG
import logo from "../../assets/imgs/logo.svg";
import menu_icon from "../../assets/menu_imgs/icon-menu.svg";
import close_icon from "../../assets/menu_imgs/icon-menu-close.svg";
import { useState } from "react";

export default function Navbar() {
  // STATE TOGGLE BTW THE SIDEBAR HIDE AND SHOW
  const [displaysidebar, Setdisplaysidebar] = useState(false);

  // HANDDISPLAY
  const handDsiplay = () => {
    Setdisplaysidebar(!displaysidebar);
  };

  return (
    <>
      <div className={styles.main_nav}>
        <nav className={styles.sub_nav}>
          <div className={styles.side_logo}>
            <img className={styles.logo_news} src={logo} alt="Logo" />
          </div>
          <div className={styles.side_elements}>
            <ul className={styles.ul_nav}>
              <li className={styles.li_nav}>Home</li>
              <li className={styles.li_nav}>New</li>
              <li className={styles.li_nav}>Popular</li>
              <li className={styles.li_nav}>Trending</li>
              <li className={styles.li_nav}>Categories</li>
              <img
                className={styles.icon_close_first}
                onClick={handDsiplay}
                src={menu_icon}
                alt=""
              />
            </ul>
          </div>
          {/* I WANT TRY NEW APPPPROACH */}
          {/* FOR MOBILE */}
          {displaysidebar ? (
            <div className={styles.mobile_side_bar}>
              <ul className={styles.ul_nav_mobile}>
                <img
                  className={styles.icon_close}
                  onClick={handDsiplay}
                  src={close_icon}
                  alt=""
                />
                <li className={styles.li_nav_mobile}>Home</li>
                <li className={styles.li_nav_mobile}>New</li>
                <li className={styles.li_nav_mobile}>Popular</li>
                <li className={styles.li_nav_mobile}>Trending</li>
                <li className={styles.li_nav_mobile}>Categories</li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </nav>
      </div>
    </>
  );
}
