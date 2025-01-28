import React from "react";
import styles from "./HeaderComponent.module.css";
import Cart from "../../icons/Cart";
import Heart from "../../icons/HeartIcon";
import Search from "../../icons/Search";
import Logo from "../../icons/Logo";

function HeaderComponent() {
  return (
    <div className={styles.headerSection}>
      <Logo />
      <div className={styles.headerRight}>
        <Search />
        <div className={styles.favIcon}>
          {" "}
          <Heart />
        </div>
        <div className={styles.cartIcon}>
          {" "}
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
