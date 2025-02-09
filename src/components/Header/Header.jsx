import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <section>
      <div className={s.start}>
        <div className={s.container}>
          <div className={s.main}>
            <input
              className={s.input}
              placeholder="Search for artworks"
              type="text"
            />
            <div className={s.menu}>
              <Link to="/currency">
                Currency
                <img src="/public/coin.png" alt="Currency" />
              </Link>
              <Link to="/join">
                Join
                <img src="/public/man.png" alt="Join" />
              </Link>
              <Link to="/wishlist">
                Wishlist
                <img src="/public/like.png" alt="Wishlist" />
              </Link>
              <Link to="/cart">
                Cart
                <img src="/public/buy.png" alt="Cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
