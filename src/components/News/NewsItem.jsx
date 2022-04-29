import React from 'react';
import Card from '../ui/Card';
import styles from '../../styles/NewsItem.module.css';

function NewsItem(props) {
   const {
      title,
      heading,
      content,
      img: { share, like, pocket, phone },
   } = props;
   return (
      <Card className={styles.newsItem}>
         <div className={styles['newsItem-content']}>
            <p className={styles['newsItem-content__title']}>{title}</p>
            <h2>{heading}</h2>
            <p className={styles['newsItem-content__content']}>{content}</p>
            <div className={styles['newsItem-ua']}>
               <div className={styles['newsItem-ua__items']}>
                  <div className={styles['newsItem-ua__item']}>
                     <img src={like} alt={like} />
                     <p>Relevant</p>
                  </div>
                  <div className={styles['newsItem-ua__item']}>
                     <img src={share} alt={share} />
                     <p>Share</p>
                  </div>
                  <div className={styles['newsItem-ua__item']}>
                     <img src={pocket} alt={pocket} />
                     <p>Read Later</p>
                  </div>
               </div>
               <div
                  className={`${styles['newsItem-ua__items']} ${styles['newsItem-time']}`}
               >
                  <p>[Source]</p>
                  <span></span>
                  <p>15 mins ago</p>
               </div>
            </div>
         </div>
         <div className={styles['newsItem-image']}>
            <img src={phone} alt="Phone" />
         </div>
      </Card>
   );
}

export default NewsItem;
