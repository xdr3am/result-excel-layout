import React, {useState} from 'react';
import classes from './AppLearn.module.scss';

const AppLearn = () => {
  const [data] = useState([
    {
      id: 1,
      tags: ['Системность', 'Автоматизация'],
      widgets: [
        {
          id: 1,
          title: 'Серверный код на NodeJS',
          content: 'автоматизированная рабочая среда и автоматические тесты (можно назвать пункт автоматизацией)'
        },
        {
          id: 2,
          title: 'Тестирование с Jest',
          content: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы максимум на 3 строчки текста'
        },
        {
          id: 3,
          title: 'Настройка Webpack',
          content: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы максимум на 3 строчки текста'
        },
        {
          id: 4,
          title: 'Качество кода c ESlint',
          content: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы максимум на 3 строчки текста'
        }
      ]
    },
    {
      id: 2,
      tags: ['Структура', 'Архитектура'],
      widgets: [
        {
          id: 1,
          title: 'Data Layer',
          content: 'автоматизированная рабочая среда и автоматические тесты (можно назвать пункт автоматизацией)'
        },
        {
          id: 2,
          title: 'State Managers',
          content: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы максимум на 3 строчки текста'
        },
        {
          id: 3,
          title: 'ООП на JavaScript',
          content: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы максимум на 3 строчки текста'
        },
        {
          id: 4,
          title: 'Шаблоны проектирования',
          content: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы максимум на 3 строчки текста'
        }
      ]
    },
    {
      id: 3,
      tags: ['Оптимизация', 'Эффективность'],
      widgets: [
        {
          id: 1,
          title: 'Работа с Git',
          content: 'автоматизированная рабочая среда и автоматические тесты (можно назвать пункт автоматизацией)'
        },
        {
          id: 2,
          title: 'Продвинутый JS (ES2020)',
          content: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы максимум на 3 строчки текста'
        },
        {
          id: 3,
          title: 'Работа с данными Redux',
          content: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы максимум на 3 строчки текста'
        },
        {
          id: 4,
          title: 'Вёрстка на SASS + BEM',
          content: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы максимум на 3 строчки текста'
        }
      ]
    }
  ])

  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Чему именно ты научишься на курсе Excel</h2>
      <div className={classes.layout}>
        {data.map(col =>
          <div className={classes.col} key={col.id}>
            <div className={classes.tags}>
              {col.tags.map((tag, index) =>
                <span key={index}>#{tag}</span>
              )}
            </div>
            <ul className={classes.list}>
              {col.widgets.map(item =>
                <li className={classes.item} key={item.id}>
                  <p className={classes.itemTitle}>{item.title}</p>
                  <p className={classes.itemContent}>{item.content}</p>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppLearn;