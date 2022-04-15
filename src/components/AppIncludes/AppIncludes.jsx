import React, {useState} from 'react';
import classes from './AppIncludes.module.css';
import IconHD from '../../assets/images/icons/icon-hd.svg';
import IconTime from '../../assets/images/icons/icon-time.svg';
import IconCode from '../../assets/images/icons/icon-code.svg';
import IconInfinity from '../../assets/images/icons/icon-infinity.svg';
import IconMessage from '../../assets/images/icons/icon-message.svg';
import IconCloud from '../../assets/images/icons/icon-cloud.svg';

const AppIncludes = () => {
  const [list] = useState([
    {
      id: 1,
      icon: IconHD,
      title: '175 уроков в HD',
      content: 'все уроки записаны в нормальном качестве, с хорошим звуком, захваты экрана чёткие и без лагов'
    },
    {
      id: 2,
      icon: IconTime,
      title: 'от 3 до 15 минут',
      content: 'структура обучения тщательно продумана, чтобы не грузить тебя лишней информацией, но при этом давать самую главую суть'
    },
    {
      id: 3,
      icon: IconCode,
      title: '17 тестовых задач',
      content: 'теория это конечно же хорошо, но ещё лучше закреплять теорию практикой, поэтому тебя ждут ещё и проверки усвоенных из уроков знаний'
    },
    {
      id: 4,
      icon: IconInfinity,
      title: 'Доступ навсегда',
      content: 'не будет такого, что обучение нужно продлевать за доплату, курс останется у тебя навсегда, сможешь растянуть прохождение или пересматривать'
    },
    {
      id: 5,
      icon: IconMessage,
      title: 'Служба заботы',
      content: 'сервис, созданный для поддержки учеников курса, есть 3 категории службы под разные виды вопросов'
    },
    {
      id: 6,
      icon: IconCloud,
      title: 'Онлайн доступ',
      content: 'все уроки хранятся на платформе GetCourse, так что ты сможешь учиться онлайн с любого устройства'
    }
  ])

  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Что включено в курс Vue.js</h2>
      <ul className={classes.list}>
        {list.map(item =>
          <li className={classes.item} key={item.id}>
            <div className={classes.itemTitle}>
              <img src={item.icon} width={40} height={40} alt="icon"/>
              <h3>{item.title}</h3>
            </div>
            <p className={classes.itemContent}>{item.content}</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default AppIncludes;