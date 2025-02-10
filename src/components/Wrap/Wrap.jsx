import React, { useState } from 'react';
import s from './Wrap.module.scss';

const images = {
  'One Piece': 'https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTYmlge88J4-0ouuHWDsP8VZBuoM_3FPfGZo-YMOixHeB1qduoBni9iahxi3zkEXNvwZ4Xez_JoRDiPq3hyLRyef43_fNRUJziyD.jpg?r=d90',
  'Jujutsu Kaisen': 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/jujutsu-kaisen-s-main-cast.jpg',
  'Naruto': 'narutos.jpg',
};

const Wrap = () => {
  const [selectedImage, setSelectedImage] = useState(images['One Piece']);
  const [activeButton, setActiveButton] = useState('One Piece');

  return (
    <div className={s.nep}>
      <div className="container">
        <div className={s.title}>
          <h1>Shop by Anime</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod
            tincidunt <br /> ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi
            scing elit, sed diam nonummy
          </p>
        </div>
        <div className={s.wrap}>
          <div className={s.btns}>
            {Object.keys(images).map((anime) => (
              <button
                key={anime}
                onClick={() => {
                  setSelectedImage(images[anime]);
                  setActiveButton(anime);
                }}
                className={activeButton === anime ? s.activeButton : ''}
              >
                {anime}
              </button>
            ))}
          </div>
          <img src={selectedImage} alt="Anime" className={s.image} />
        </div>
      </div>
    </div>
  );
};

export default Wrap;