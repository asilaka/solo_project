import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <section>
        <div className="container">
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
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            navigation
            pagination={{
              clickable: true,
              el: `.${s.pagination}`, // Кастомный класс для пагинации
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
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
                  alt="One Piece"
                />
                <h2>One Piece</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_.jpg"
                  alt="Jujutsu Kaisen"
                />
                <h2>Jujutsu Kaisen</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                  alt="My Hero Academia"
                />
                <h2>My Hero Academia</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                  alt="Naruto"
                />
                <h2>Naruto</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="https://animemania7.wordpress.com/wp-content/uploads/2020/09/wp4275387.jpg?w=921"
                  alt="Leveling Up Alone"
                />
                <h2>Leveling Up Alone</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="https://assets-prd.ignimgs.com/2021/10/14/demon-slayer-the-hinokami-chronicles-button-fin-1634173484356.jpg"
                  alt="Demon Slayer"
                />
                <h2>Demon Slayer</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="https://anilibria.top/storage/releases/posters/5255/8uLSlG62NcQIpYF32mvJ4nPJgqiSrrHX.webp"
                  alt="Black Clover"
                />
                <h2>Black Clover</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg"
                  alt="Death Note"
                />
                <h2>Death Note</h2>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className={s.pagination}></div> {/* Контейнер для пагинации */}
        </div>
      </section>
    </>
  );
};

export default Footer;
