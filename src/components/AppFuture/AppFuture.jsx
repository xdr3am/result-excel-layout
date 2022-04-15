import React from 'react';
import classes from './AppFuture.module.css';
import ImageLowSkills from '../../assets/images/content/low-skills.jpg';
import ImageHighSkills from '../../assets/images/content/high-skills.gif';

const AppFuture = () => {
  return (
    <section className={classes.section}>

      <div className={classes.content}>
        <div className={classes.blockBefore}>
          <div className={classes.pictureBeforeContainer}>
            <div className={classes.pictureBefore}>
              <img src={ImageLowSkills} alt="code-before"/>
            </div>
            <p className={classes.signature}>твой код до курса Excel</p>
          </div>
        </div>
        <div className={classes.descriptionBefore}>
          <h3 className={classes.titleBefore}>Сейчас твои знания приводят тебя к такому результату</h3>
          <ul className={classes.list}>
            <li>не умеешь автоматизировать процессы</li>
            <li>не знаешь как выйти за рамки стандартных функций</li>
            <li>работаешь скорее хаотично, чем структурно</li>
            <li>пытаешься слепить вместе все отдельно взятые знания</li>
            <li>не видишь картину программирования целиком</li>
            <li>в процессе разработки плохо структурируешь свой код</li>
            <li>когда пытаешься усложнить приложение — всё летит</li>
            <li>твой конечный результат разработки сильно ограничен</li>
          </ul>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.blockAfter}>
          <div className={classes.pictureAfterContainer}>
            <div className={classes.pictureAfter}>
              <img src={ImageHighSkills} alt="code-after"/>
            </div>
            <p className={classes.signature}>твой код после курса Excel</p>
          </div>
        </div>
        <div className={classes.descriptionAfter}>
          <h3 className={classes.titleAfter}>Курс Excel приведёт тебя к абсолютно новому уровню Frontend разработки</h3>
          <div className={classes.text}>
            <p>Пока что у тебя нет структуры и системности, поэтому твой код способен лишь на «домики».</p>
            <p>Структура и система поможет тебе построить «небоскрёб», который не лагает и не крашится.</p>
            <p>«Высокий уровень кода» это когда ты правильно распределяешь потоки данных, обрабатывая и отображая данные максимально эффективно.</p>
            <p>Простыми словами — так ты создаёшь намного больше качественных результатов при меньшем количестве действий и строчек кода.</p>
          </div>
          <p className={classes.textDecoration}>Если <span className={classes.textPrimary}>до курса ты мыслил «кусками»</span>,
            потому что нахватался везде всего по отдельности, то <span className={classes.textBlack}>после курса у тебя
            выстроится конкретное системное и методологическое мышление</span>, которое упростит и улучшит твою работу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppFuture;