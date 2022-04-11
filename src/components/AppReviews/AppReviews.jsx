import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import classes from './AppReviews.module.scss';
import ReviewVideo from '../../assets/images/content/review.png';
import ReviewVideo2 from '../../assets/images/content/review2.png';
import ReviewVideo3 from '../../assets/images/content/review3.png';
import ReviewVideo4 from '../../assets/images/content/review4.png';

SwiperCore.use([Navigation, Pagination]);

const AppReviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      video: ReviewVideo,
      name: 'Виктория Шамурина',
      status: 'копирайтер, UX-дизайнер, 24 года',
    },
    {
      id: 2,
      video: ReviewVideo2,
      name: 'Виктория Шамурина',
      status: 'копирайтер, UX-дизайнер, 24 года',
    },
    {
      id: 3,
      video: ReviewVideo3,
      name: 'Виктория Шамурина',
      status: 'копирайтер, UX-дизайнер, 24 года',
    },
    {
      id: 4,
      video: ReviewVideo4,
      name: 'Виктория Шамурина',
      status: 'копирайтер, UX-дизайнер, 24 года',
    },
    {
      id: 5,
      video: ReviewVideo,
      name: 'Виктория Шамурина',
      status: 'копирайтер, UX-дизайнер, 24 года',
    },
    {
      id: 6,
      video: ReviewVideo2,
      name: 'Виктория Шамурина',
      status: 'копирайтер, UX-дизайнер, 24 года',
    },
    {
      id: 7,
      video: ReviewVideo3,
      name: 'Виктория Шамурина',
      status: 'копирайтер, UX-дизайнер, 24 года',
    },
    {
      id: 8,
      video: ReviewVideo4,
      name: 'Виктория Шамурина',
      status: 'копирайтер, UX-дизайнер, 24 года',
    },
    {
      id: 9,
      video: ReviewVideo,
      name: 'Виктория Шамурина',
      status: 'копирайтер, UX-дизайнер, 24 года',
    },
  ])

  const sliderReviewsRef = React.useRef(null);

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Впечатления и результаты джунов и мидлов после курса</h2>
        <Swiper
          id="reviewsSlider"
          className={classes.slider}
          loop={true}
          initialSlide={1}
          spaceBetween={30}
          slidesPerView={"auto"}
          grabCursor={true}
          ref={sliderReviewsRef}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{
            type: "fraction",
          }}
          // breakpoints={{
          //   320: {
          //     slidesPerView: 1,
          //   },
          //   950: {
          //     slidesPerView: 2,
          //   },
          //   1300: {
          //     slidesPerView: 4
          //   }
          // }}
        >
          {reviews.map(review =>
            <SwiperSlide className={classes.slide} key={review.id}>
              <div className={classes.video}>
                <img src={review.video} alt="avatar"/>
              </div>
              <h3 className={classes.name}>{review.name}</h3>
              <p className={classes.status}>{review.status}</p>
            </SwiperSlide>
          )}
        </Swiper>

        <div className={classes.sliderButtons}>
          <button className={classes.sliderButton} onClick={() => sliderReviewsRef.current.swiper.slidePrev()}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" stroke="#FFFFFF"/>
              <path d="M15 8L10 13L15 18" stroke="#FFFFFF"/>
            </svg>
          </button>
          <button className={classes.sliderButton} onClick={() => sliderReviewsRef.current.swiper.slideNext()}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-0.5" y="0.5" width="25" height="25" rx="12.5" transform="matrix(-1 0 0 1 25 0)" stroke="#FFFFFF"/>
              <path d="M11 8L16 13L11 18" stroke="#FFFFFF"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppReviews;