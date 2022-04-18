import React from 'react';
import classes from './AppPlan.module.css';
import ExcelMask from '../../assets/images/content/excel-mask.svg';
import ExcelContent from '../../assets/images/content/excel-content-anim.gif';

const AppPlan = () => {
  return (
    <section className={classes.section}>

      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2 className={classes.title}>
            План обучения построен так, что ты поэтапно пройдешь
            <span>полный цикл создания <span className={classes.textAccent}>любого</span> приложения.</span>
          </h2>
          <div className={classes.picture}>
            <img className={classes.pictureMask} src={ExcelMask} alt="excel-mask"/>
            <img className={classes.pictureContent} src={ExcelContent} alt="excel-content"/>
          </div>
        </div>
      </div>

      <p className={classes.text}>Шаг за шагом ты будешь изучать методики и способы решения задач, а вместе с тем — перенимать эффективный и системный образ мышления во время разработки.</p>
      <p className={classes.textPrimary}>В итоге — создашь свой Excel и выйдешь на новый уровень.</p>

    </section>
  );
};

export default AppPlan;