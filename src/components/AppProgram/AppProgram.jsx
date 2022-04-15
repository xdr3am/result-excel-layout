import React, {useState} from 'react';
import classes from './AppProgram.module.css';

const AppProgram = () => {
  const [program] = useState([
    {
      id: 1,
      title: 'Вводный модуль',
      programList: [
        'Приветственное видео от автора курса',
        'Знакомство. О программе курса.',
        'Личный кабинет ученика',
        'Правила обучения на курсе',
        'Бонусные рубли за дз, курсовые',
        'Анкета ученика. Цель на курс',
        'Стратегия повышения квалификации и з/п'
      ],
      resultList: [
        'Введение в обучение, базовая информация о курсе и программе.',
        'Знакомство с преподавателями.',
        'Возможности Junior Front End Developer и перспективы развития.'
      ]
    },
    {
      id: 2,
      title: 'Вводный модуль',
      programList: [
        'Приветственное видео от автора курса',
        'Знакомство. О программе курса.',
        'Личный кабинет ученика',
        'Правила обучения на курсе',
        'Бонусные рубли за дз, курсовые',
        'Анкета ученика. Цель на курс',
        'Стратегия повышения квалификации и з/п'
      ],
      resultList: [
        'Введение в обучение, базовая информация о курсе и программе.',
        'Знакомство с преподавателями.',
        'Возможности Junior Front End Developer и перспективы развития.'
      ]
    },
    {
      id: 3,
      title: 'Вводный модуль',
      programList: [
        'Приветственное видео от автора курса',
        'Знакомство. О программе курса.',
        'Личный кабинет ученика',
        'Правила обучения на курсе',
        'Бонусные рубли за дз, курсовые',
        'Анкета ученика. Цель на курс',
        'Стратегия повышения квалификации и з/п'
      ],
      resultList: [
        'Введение в обучение, базовая информация о курсе и программе.',
        'Знакомство с преподавателями.',
        'Возможности Junior Front End Developer и перспективы развития.'
      ]
    },
    {
      id: 4,
      title: 'Вводный модуль',
      programList: [
        'Приветственное видео от автора курса',
        'Знакомство. О программе курса.',
        'Личный кабинет ученика',
        'Правила обучения на курсе',
        'Бонусные рубли за дз, курсовые',
        'Анкета ученика. Цель на курс',
        'Стратегия повышения квалификации и з/п'
      ],
      resultList: [
        'Введение в обучение, базовая информация о курсе и программе.',
        'Знакомство с преподавателями.',
        'Возможности Junior Front End Developer и перспективы развития.'
      ]
    }
  ])

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Программа обучения</h2>
        <ul className={classes.list}>
          {program.map((module, idx) =>
            <li className={classes.item} key={module.id}>
              <div className={classes.itemCol}>
                <p className={classes.itemColTitle}>Модуль {idx + 1}</p>
                <h3 className={classes.itemTitle}>{module.title}</h3>
              </div>
              <div className={classes.itemCol}>
                <p className={classes.itemColTitle}>Занятия</p>
                <ul className={classes.itemList}>
                  {module.programList.map((item, index) =>
                    <li key={index}>{index + 1}. {item}</li>
                  )}
                </ul>
              </div>
              <div className={classes.itemCol}>
                <p className={classes.itemColTitle}>Результат</p>
                <div className={classes.itemText}>
                  {module.resultList.map((item, index) =>
                    <p key={index}>{item}</p>
                  )}
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default AppProgram;