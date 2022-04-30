import React from 'react';
import TopSearches from './News/TopSearches';
import SideBar from './SideBar';
import styles from '../styles/HomePage.module.css';
import News from './News/News';
import RecentSearchs from './RecentSearchs';
import Follow from './Follow';

function HomePage() {
   return (
      <div className={styles.container}>
         <SideBar />
         <div>
            <TopSearches />
            <News />
         </div>
         <div>
            <RecentSearchs />
            <Follow />
         </div>
      </div>
   );
}

export default HomePage;
