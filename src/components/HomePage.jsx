import React from 'react';
import TopSearchs from './News/TopSearchs';
import SideBar from './SideBar';
import styles from '../styles/HomePage.module.css';
import News from './News/News';

function HomePage() {
   return (
      <div className={styles.container}>
         <SideBar />
         <div>
            <TopSearchs />
            <News />
         </div>
      </div>
   );
}

export default HomePage;
