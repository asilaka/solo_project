import React from 'react'
import s from './Hero.module.scss'
const Hero = () => {
  return (
   <>
   <section className={s.fon}>
<div className="container">

  <div className={s.wrap}>
  <div className={s.step}>
    <h1>Step into the <br /> Anime Universe <br />   With Geekozi</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </p>
        <button>Discover More</button>
    </div>
  {
    }
    <div className={s.fire}>
    <img  src="/public/knight.png" alt="" />
    <img src="/public/naruto.png" alt="" />
    <img src="/public/academy.png" alt="" />
  </div>
  </div>

</div>

   </section>
   </>
  )
}

export default Hero