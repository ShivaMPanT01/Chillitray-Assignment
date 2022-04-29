import React from 'react';
import { newsData } from '../../script/data';
import NewsItem from './NewsItem';
import styles from '../../styles/News.module.css';

function News() {
   return (
      <div className={styles['news']}>
         <div className={styles['news-container']}>
            {newsData.map((data) => {
               return (
                  <NewsItem
                     key={data.id}
                     title={data.title}
                     heading={data.heading}
                     content={data.content}
                     img={data.img}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default News;
