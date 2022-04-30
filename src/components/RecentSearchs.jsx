import React from 'react';
import { Link } from 'react-router-dom';
import { recentSearchesTopics } from '../script/data';
import styles from '../styles/RecentSearches.module.css';
import Card from './ui/Card';

function RecentSearchs() {
   return (
      <Card className={styles['recent-searches']}>
         <div className={styles['recent-searches__container']}>
            <h2>Recent Searches</h2>
            <ul>
               {recentSearchesTopics.map((search, index) => {
                  if (search && search?.topic && search?.img) {
                     return (
                        <li
                           key={index}
                           className={styles['recent-searches__topics']}
                        >
                           <div className={styles['recent-searches__topic']}>
                              <img src={search.icon} alt={search.topic} />
                              <Link to="/">{search.topic}</Link>
                           </div>
                           <img src={search.img} alt={search.name} />
                        </li>
                     );
                  } else {
                     return (
                        <li
                           key={index}
                           className={styles['recent-searches__topics']}
                        >
                           <div className={styles['recent-searches__topic']}>
                              <img src={search.icon} alt={search.topic} />
                              <Link to="/">{search.topic}</Link>
                           </div>
                        </li>
                     );
                  }
               })}
               <div className={styles['recent-searches__topics']}>
                  <Link to="/">Show More</Link>
               </div>
            </ul>
         </div>
      </Card>
   );
}

export default RecentSearchs;
