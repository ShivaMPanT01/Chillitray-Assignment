import React from 'react';

import styles from '../../styles/TopSearchs.module.css';
import { topSearchs } from '../../script/data';

function TopSearchs() {
   return (
      <div className={styles['top-searchs']}>
         <h2>Top Topics for you</h2>
         <div className={styles['top-searchs__content']}>
            <ul className={styles['top-searchs__list']}>
               {topSearchs.map((search) => {
                  return (
                     <li key={search} className={styles['top-searchs__item']}>
                        {search}
                     </li>
                  );
               })}
            </ul>
            <div className={styles.dots}>
               <span className={styles['dot']}></span>
               <span className={styles['dot']}></span>
               <span className={styles['dot']}> </span>
            </div>
         </div>
      </div>
   );
}

export default TopSearchs;
