import React from 'react'
import s from './Wrap.module.scss'
const Wrap = () => {
  return (
   <>
<div className={s.nep}>
    <div className="container">
    <div className={s.title}>
    <h1>Shop by Anime</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt <br /> ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy</p>
</div>
   <div className={s.wrap}>


    <img src="piece.png" alt="" />
    <div className={s.naruto}>
        <img src="/Rectangle 24589.png" alt="" />
        <img src="/Rectangle 24590.png" alt="" />
        <img src="/Rectangle 24591.png" alt="" />
        <img src="/Rectangle 24592.png" alt="" />
        <img src="/Rectangle 24593.png" alt="" />
        <img src="/Rectangle 24594.png" alt="" />
    </div>
   </div>

    </div>

    
</div>

    </>
  )
}

export default Wrap