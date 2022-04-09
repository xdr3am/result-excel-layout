import React, {useState} from 'react';
import classes from './AppStatistic.module.scss';

const AppStatistic = () => {
  const [statistic] = useState([
    {number: '100', text: 'HD видео уроков содержит курс'},
    {number: '3-15', text: 'минут длятся видео уроки'},
    {number: '23', text: 'тестовых заданий для закрепления'}
  ])
  return (
    <section className={classes.section}>
      <ul className={classes.list}>
        {statistic.map((item, index) =>
          <li className={classes.item} key={index}>
            <span className={classes.number}>{item.number}</span>
            <p className={classes.text}>{item.text}</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default AppStatistic;