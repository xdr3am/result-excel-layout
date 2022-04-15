import React, {useState} from 'react';
import classes from './AppRates.module.css';

const AppRates = () => {
  const [rates] = useState([
    {
      id: 1,
      title: 'Базовый',
      subtitle: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы',
      options: [
        'Доступ ко всем урокам в HD качестве'
      ],
      price: 9900
    },
    {
      id: 2,
      title: 'Продвинутый',
      subtitle: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы',
      options: [
        'Доступ ко всем урокам в HD качестве',
        '4 бонуса'
      ],
      price: 14900
    },
    {
      id: 3,
      title: 'Специалист',
      subtitle: 'в общем ты понял сюда нужно дать инфу чтобы создать такие вот уточняющие абзацы',
      options: [
        'Доступ ко всем урокам в HD качестве',
        '4 бонуса',
        'Дополнительный курс на выбор: Vue, Node JS Angular'
      ],
      price: 19900
    }
  ])

  const numberWithSpaces = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Выбирай свой стек для обучения</h2>
      <ul className={classes.list}>
        {rates.map((rate, idx) =>
          <li className={classes.item} key={rate.id}>

            <div className={classes.itemHeader}>
              <div className={classes.itemLevel}>
                {rates.map((el, index) =>
                  <span className={index <= idx ? classes.levelActive : ''} key={el.id}/>
                )}
              </div>
              <h3 className={classes.itemTitle}>{rate.title}</h3>
            </div>

            <p className={classes.itemSubtitle}>{rate.subtitle}</p>

            <ul className={classes.itemList}>
              {rate.options.map((option, index) =>
                <li key={index}>{option}</li>
              )}
            </ul>

            <div className={classes.itemFooter}>
              <div className={classes.itemPrice}>
                <span>Стоимость</span>
                <p>{numberWithSpaces(rate.price)} ₽</p>
              </div>
              <button className={classes.itemButton}>Выбрать стек</button>
            </div>

          </li>
        )}
      </ul>
    </section>
  );
};

export default AppRates;