import React from 'react';
import Card from '../components/ui/Card';
import { followTopics } from '../script/data';
import Cross from '../Assets/images/Cross.png';
import styles from '../styles/Follow.module.css';

function Follow() {
   return (
      <Card className={styles['follow']}>
         <div className={styles['follow-container']}>
            <h2>Topics to follow</h2>
            <ul>
               {followTopics.map((topic, index) => {
                  return (
                     <li key={index} className={styles['follow-topic']}>
                        <div className={styles['follow-topic__content']}>
                           <h4>{topic.topic}</h4>
                           <p>{topic.topicName}</p>
                        </div>
                        <div className={styles['follow-topic__cta']}>
                           <button>Follow</button>

                           <img src={Cross} alt="Close" />
                        </div>
                     </li>
                  );
               })}
               <li className={styles['follow-topic']}>
                  <p>Show more</p>
               </li>
            </ul>
         </div>
      </Card>
   );
}

export default Follow;
