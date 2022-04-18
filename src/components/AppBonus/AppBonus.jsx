import React, {useState} from 'react';
import classes from './AppBonus.module.css';

const AppBonus = () => {
  const [bonuses] = useState([
    {
      id: 1,
      title: 'Как быстро расти по карьерной лестнице',
      content: 'Урок о том, как быстро и эффективно развиваться по карьерной лестнице. Ты узнаешь, как можнр расти стабильно — раз в полгода повышать зарплату и устраиваться на более интересные проекты.'
    },
    {
      id: 2,
      title: 'Как составлять привлекательное резюме',
      content: 'Все секреты правильного составления резюме. Здесь ты получишь конкретный план действий, чтобы улучшить свое резюме и многократно повысить шансы попасть на собеседование.'
    },
    {
      id: 3,
      title: 'Как обеспечить себе достаточно практики',
      content: 'У начинающих часто возникает вопрос, где получить практический опыт. В этом бонусном уроке покажу проверенный способ, который поможет тебе получить достаточно большое количество практики.'
    },
    {
      id: 4,
      title: 'Как гарантировано найти работу Junior Frontend',
      content: 'Помимо того, что ты уже станешь на шаг впереди конкурентов после прохождения курса, в этом уроке ты узнаешь, как повысить вероятность устроиться на интересный и высокооплачиваемый проект.'
    }
  ])

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>#Бонусы</h2>
        <p className={classes.subtitle}>
          И несколько <span className={classes.textAccent}>дополнительных уроков</span>, чтобы у тебя точно всё получилось
        </p>
        <ul className={classes.list}>
          {bonuses.map(bonus =>
            <li className={classes.item} key={bonus.id}>
              <h3 className={classes.itemTitle}>{bonus.title}</h3>
              <p className={classes.itemContent}>{bonus.content}</p>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default AppBonus;