import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import classes from './AppVacancies.module.scss';
import IconArrow from '../../assets/images/icons/icon-arrow-right.svg';
import VacancyWidget from '../../assets/images/content/vacancy-widget.png';

const AppVacancies = () => {
  const [vacancies] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <section className={classes.section}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>Больше умеешь, лучше работаешь</h2>
        <div className={classes.arrow}>
          <img src={IconArrow} alt="icon-arrow"/>
        </div>
        <h2 className={classes.title}>Сложнее проекты, больше заработок</h2>
      </div>
      <Swiper
        className={classes.slider}
        spaceBetween={20}
        slidesPerView={'auto'}
        loop={true}
        speed={5000}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{delay: 0, disableOnInteraction: false}}
      >
        {vacancies.map(vacancy =>
          <SwiperSlide className={classes.slide} key={vacancy}>
            <div className={classes.widget}>
              <img src={VacancyWidget} alt="vacancy"/>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        className={classes.slider}
        spaceBetween={20}
        slidesPerView={'auto'}
        loop={true}
        speed={6000}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{delay: 0, disableOnInteraction: false}}
      >
        {vacancies.map(vacancy =>
          <SwiperSlide className={classes.slide} key={vacancy}>
            <a className={classes.widget} href="#">
              <img src={VacancyWidget} alt="vacancy"/>
            </a>
          </SwiperSlide>
        )}
      </Swiper>
      <p className={classes.text}>Список вакансий, на которые ты сможешь пройти, если выполнишь все задания и усвоишь курс Excel </p>
    </section>
  );
};

export default AppVacancies;