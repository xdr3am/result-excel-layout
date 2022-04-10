import React, {useState} from 'react';
import classes from './AppFaq.module.scss';
import 'tw-elements';

const AppFaq = () => {
  const [faq] = useState([
    {
      id: 1,
      title: 'Magnis sed etiam consectetur nulla netus tempor. Ipsum facilisis nec, magna nunc',
      content: 'Quis consequat elementum nisl tellus sit quis quis sit consequat. Feugiat commodo commodo dolor nulla leo. Facilisi pharetra elementum dictum viverra eu ultricies metus proin. Cursus nibh commodo aenean fermentum penatibus dignissim scelerisque. Consectetur metus porttitor eu elit. Gravida ut posuere dui tortor velit, viverra proin. Turpis suscipit sed laoreet porttitor dui massa duis. Est, suscipit leo massa id egestas. Adipiscing donec viverra sapien massa dictum tempor hendrerit. Lorem vitae enim convallis morbi semper. Etiam egestas aliquam mauris dolor quis orci turpis.'
    },
    {
      id: 2,
      title: 'Magnis sed etiam consectetur nulla netus tempor. Ipsum facilisis nec, magna nunc',
      content: 'Quis consequat elementum nisl tellus sit quis quis sit consequat. Feugiat commodo commodo dolor nulla leo. Facilisi pharetra elementum dictum viverra eu ultricies metus proin. Cursus nibh commodo aenean fermentum penatibus dignissim scelerisque. Consectetur metus porttitor eu elit. Gravida ut posuere dui tortor velit, viverra proin. Turpis suscipit sed laoreet porttitor dui massa duis. Est, suscipit leo massa id egestas. Adipiscing donec viverra sapien massa dictum tempor hendrerit. Lorem vitae enim convallis morbi semper. Etiam egestas aliquam mauris dolor quis orci turpis.'
    },
    {
      id: 3,
      title: 'Magnis sed etiam consectetur nulla netus tempor. Ipsum facilisis nec, magna nunc',
      content: 'Quis consequat elementum nisl tellus sit quis quis sit consequat. Feugiat commodo commodo dolor nulla leo. Facilisi pharetra elementum dictum viverra eu ultricies metus proin. Cursus nibh commodo aenean fermentum penatibus dignissim scelerisque. Consectetur metus porttitor eu elit. Gravida ut posuere dui tortor velit, viverra proin. Turpis suscipit sed laoreet porttitor dui massa duis. Est, suscipit leo massa id egestas. Adipiscing donec viverra sapien massa dictum tempor hendrerit. Lorem vitae enim convallis morbi semper. Etiam egestas aliquam mauris dolor quis orci turpis.'
    },
    {
      id: 4,
      title: 'Magnis sed etiam consectetur nulla netus tempor. Ipsum facilisis nec, magna nunc',
      content: 'Quis consequat elementum nisl tellus sit quis quis sit consequat. Feugiat commodo commodo dolor nulla leo. Facilisi pharetra elementum dictum viverra eu ultricies metus proin. Cursus nibh commodo aenean fermentum penatibus dignissim scelerisque. Consectetur metus porttitor eu elit. Gravida ut posuere dui tortor velit, viverra proin. Turpis suscipit sed laoreet porttitor dui massa duis. Est, suscipit leo massa id egestas. Adipiscing donec viverra sapien massa dictum tempor hendrerit. Lorem vitae enim convallis morbi semper. Etiam egestas aliquam mauris dolor quis orci turpis.'
    },
    {
      id: 5,
      title: 'Magnis sed etiam consectetur nulla netus tempor. Ipsum facilisis nec, magna nunc',
      content: 'Quis consequat elementum nisl tellus sit quis quis sit consequat. Feugiat commodo commodo dolor nulla leo. Facilisi pharetra elementum dictum viverra eu ultricies metus proin. Cursus nibh commodo aenean fermentum penatibus dignissim scelerisque. Consectetur metus porttitor eu elit. Gravida ut posuere dui tortor velit, viverra proin. Turpis suscipit sed laoreet porttitor dui massa duis. Est, suscipit leo massa id egestas. Adipiscing donec viverra sapien massa dictum tempor hendrerit. Lorem vitae enim convallis morbi semper. Etiam egestas aliquam mauris dolor quis orci turpis.'
    }
  ])

  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Часто задаваемые вопросы</h2>
      <div className={classes.accordionList} id="accordion">
        {faq.map(item =>
          <div className={classes.accordionItem} key={item.id}>
            <h3 className={classes.accordionHeader} id={`heading${item.id}`}>
              <button
                className={classes.accordionButton}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded="true"
                aria-controls={`collapse${item.id}`}
              >
                {item.title}
              </button>
            </h3>
            <div
              className="accordion-collapse collapse"
              id={`collapse${item.id}`}
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#accordion"
            >
              <div className={classes.accordionBody}>
                {item.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppFaq;