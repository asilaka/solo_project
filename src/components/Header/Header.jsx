import React from 'react'
import s from './Header.module.scss'
const Header = () => {
  return (
   <>
   <section  >
    <div className={s.start}>
    <div className={s.container}>
      <div className={s.main}>
        <input className={s.input} placeholder='Search fro artworks' type="text" />
      <div className={s.menu}>
        <a href="">Currency
<img src="/public/coin.png" alt="" />
        </a>
        <a href="">Join
          <img src="/public/man.png" alt="" />
        </a>
        <a href="">Wishlist
          <img src="/public/like.png" alt="" />
        </a>
        <a href="">Cart
          <img src="/public/buy.png" alt="" />
        </a>
      </div>

      </div>
    </div>
    </div>
   </section>
   </>
  )
}

export default Header