import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import classes from './AppAuthors.module.scss';
import AvatarAuthor from '../../assets/images/content/author.png';
import IconPrev from '../../assets/images/icons/icon-prev.svg';
import IconNext from '../../assets/images/icons/icon-next.svg';

SwiperCore.use([Navigation]);

const AppAuthors = () => {
  const [authors] = useState([
    {
      id: 1,
      avatar: AvatarAuthor,
      name: 'Владилен Минин',
      level: 'Senior Frontend Developer',
      achievements: [
        '2008 до 2015 – удалённый специалист по Front End ',
        'С 2015 по сегодня – основатель и владелец агентства Front End',
        'Провел 114 живых обучающих мероприятий по теме Front End',
        'Провел 1000 обучающих вебинаров для начинающих и опытных специалистов',
        'Выступал как спикер на 20 международных бизнес-конференциях '
      ],
      socials: [
        {label: 'Instagram', value: 'instagram', link: '#'},
        {label: 'Вконтакте', value: 'vk', link: '#'},
        {label: 'Telegram', value: 'telegram', link: '#'}
      ]
    },
    {
      id: 2,
      avatar: AvatarAuthor,
      name: 'Владилен Минин',
      level: 'Senior Frontend Developer',
      achievements: [
        '2008 до 2015 – удалённый специалист по Front End ',
        'С 2015 по сегодня – основатель и владелец агентства Front End',
        'Провел 114 живых обучающих мероприятий по теме Front End',
        'Провел 1000 обучающих вебинаров для начинающих и опытных специалистов',
        'Выступал как спикер на 20 международных бизнес-конференциях '
      ],
      socials: [
        {label: 'Instagram', value: 'instagram', link: '#'},
        {label: 'Вконтакте', value: 'vk', link: '#'},
        {label: 'Telegram', value: 'telegram', link: '#'}
      ]
    },
    {
      id: 3,
      avatar: AvatarAuthor,
      name: 'Владилен Минин',
      level: 'Senior Frontend Developer',
      achievements: [
        '2008 до 2015 – удалённый специалист по Front End ',
        'С 2015 по сегодня – основатель и владелец агентства Front End',
        'Провел 114 живых обучающих мероприятий по теме Front End',
        'Провел 1000 обучающих вебинаров для начинающих и опытных специалистов',
        'Выступал как спикер на 20 международных бизнес-конференциях '
      ],
      socials: [
        {label: 'Instagram', value: 'instagram', link: '#'},
        {label: 'Вконтакте', value: 'vk', link: '#'},
        {label: 'Telegram', value: 'telegram', link: '#'}
      ]
    },
    {
      id: 4,
      avatar: AvatarAuthor,
      name: 'Владилен Минин',
      level: 'Senior Frontend Developer',
      achievements: [
        '2008 до 2015 – удалённый специалист по Front End ',
        'С 2015 по сегодня – основатель и владелец агентства Front End',
        'Провел 114 живых обучающих мероприятий по теме Front End',
        'Провел 1000 обучающих вебинаров для начинающих и опытных специалистов',
        'Выступал как спикер на 20 международных бизнес-конференциях '
      ],
      socials: [
        {label: 'Instagram', value: 'instagram', link: '#'},
        {label: 'Вконтакте', value: 'vk', link: '#'},
        {label: 'Telegram', value: 'telegram', link: '#'}
      ]
    }
  ])

  const swiperRef = React.useRef(null);

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Авторы обучения</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        className={classes.slider}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        ref={swiperRef}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          950: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3
          }
        }}
      >
        {authors.map(author =>
          <SwiperSlide className={classes.slide} key={author.id}>

            <div className={classes.slideHeader}>
              <div className={classes.avatar}>
                <img src={author.avatar} alt="avatar"/>
              </div>
              <div className={classes.nameContainer}>
                <h3 className={classes.name}>{author.name}</h3>
                <p className={classes.level}>{author.level}</p>
              </div>
            </div>

            <ul className={classes.slideList}>
              {author.achievements.map((achievement, index) =>
                <li key={index}>{achievement}</li>
              )}
            </ul>

            <div className={classes.slideSocials}>
              {author.socials.map(social =>
                <a className={classes[social.value]} href={social.link} key={social.value}>{social.label}</a>
              )}
            </div>

          </SwiperSlide>
        )}
      </Swiper>
      <div className={classes.sliderButtons}>
        <button className={classes.sliderButton} onClick={() => swiperRef.current.swiper.slidePrev()}>
          <img src={IconPrev} alt="Назад"/>
        </button>
        <button className={classes.sliderButton} onClick={() => swiperRef.current.swiper.slideNext()}>
          <img src={IconNext} alt="Вперед"/>
        </button>
      </div>
    </div>
  );
};

export default AppAuthors;