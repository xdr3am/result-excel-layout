import React from 'react';
import classes from './AppResult.module.scss';
import IconArrow from '../../assets/images/icons/icon-arrow-right.svg';

const AppResult = () => {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>
          Твои результаты после курса поместятся в одну простую модель
        </h2>
        <ul className={classes.list}>
          <li className={classes.item}>
            Excel
            <div className={classes.description}>
              <p className={classes.text}>EXCEL — проходишь этот курс и выполняешь все задания</p>
            </div>
          </li>
          <li className={classes.arrow}>
            <img src={IconArrow} alt="icon-arrow"/>
          </li>
          <li className={classes.item}>JS</li>
          <li className={classes.item}>FW</li>
          <li className={classes.item}>APP</li>
          <li className={classes.arrow}>
            <img src={IconArrow} alt="icon-arrow"/>
          </li>
          <li className={classes.item}>(A,B,C) AND !(X,Y,Z)</li>
        </ul>
      </div>
    </section>
  );
};

export default AppResult;