import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination, Loop} from "swiper/modules";
import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <>
      <section>
        <div className={s.start}>
          <h1>Shop by Anime</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
            nonummy nibh euismod tincidunt ut <br /> laoreet dolore magn. Lorem
            ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
            nonummy
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation,Loop]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={s.cards}
        >
          <SwiperSlide>
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/I/81rEhhwbubL.jpg"
                alt=""
              />
              <h2>One Piece</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg"
                alt=""
              />
              <h2>Jujutsu Kaisen</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwP7usRIxfQNj841lU1eALx_vFTlD8ZN-fA&s"
                alt=""
              />
              <h2>My Hero Academia</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                alt=""
              />
              <h2>Naruto</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                src="https://animemania7.wordpress.com/wp-content/uploads/2020/09/wp4275387.jpg?w=921"
                alt=""
              />
              <h2>Leveling Up Alone</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                src="https://assets-prd.ignimgs.com/2021/10/14/demon-slayer-the-hinokami-chronicles-button-fin-1634173484356.jpg"
                alt=""
              />
              <h2>Demon Slayer</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                src="https://anilibria.top/storage/releases/posters/5255/8uLSlG62NcQIpYF32mvJ4nPJgqiSrrHX.webp"
                alt=""
              />
              <h2>Black Clover</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg"
                alt=""
              />
              <h2>Death Note</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Footer;
