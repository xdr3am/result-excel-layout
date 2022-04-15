import React from 'react';
import classes from './AppPromo.module.css';
import IconExcel from '../../assets/images/icons/icon-excel.svg';
import ExcelAnim from '../../assets/images/content/excel-anim.mov';

const AppPromo = () => {

  return (
    <section className={classes.section}>

      <div className={classes.top}>
        <div className={classes.wrapper}>
          <div className={classes.promo}>
            <h2 className={classes.title}>Excel from scratch</h2>
            <p className={classes.subtitle}>Научись создавать более сложные апликухи без крашей, используя меньше строк кода</p>
            <p className={classes.text}>
              Научись работать с JavaScript и фреймворками намного эффективнее, чтобы создавать более крутые разработки,
              и&nbsp;стать востребованным Frontend <span className={classes.link}>с зарплатой от 120 т.р.</span></p>
            <button className={classes.btnPrimary}>Приступить к обучению</button>
          </div>

          <div className={classes.video}>
            <video autoPlay muted loop>
              <source type="video/mp4" src={ExcelAnim}/>
            </video>
          </div>

          <div className={classes.circles}>
            <div className={classes.circle} />
            <div className={classes.circle} />
            <div className={classes.circle} />
          </div>
        </div>
      </div>

      <div className={classes.bottom}>
        <div className={classes.cloud}>
          <div className={classes.cloudIcon}>
            <img src={IconExcel} alt="excel-icon"/>
          </div>
          <p className={classes.cloudText}>
            На курсе <span className={classes.blackText}>ты самостоятельно</span> <span className={classes.primaryText}>создашь
            Excel</span> <span className={classes.blackText}>без фреймворков,</span> при этом <span className={classes.blackText}>улучшишь
            навыки JS</span> и поймёшь суть фреймворков
          </p>
        </div>
      </div>

    </section>
  );
};

export default AppPromo;