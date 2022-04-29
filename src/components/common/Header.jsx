import React from 'react';

import styles from '../../styles/Header.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './NavBar';
import CreditsBar from './CreditsBar';
import MainLogo from '../../Assets/images/MainLogo.png';
import Bell from '../../Assets/images/Bell.png';
import DisplayProfile from '../../Assets/images/DisplayProfile.jpg';

function Header() {
   return (
      <header className={styles.header}>
         <div className={styles['header-container']}>
            <div className={styles['logo-container']}>
               <img src={MainLogo} alt="Logo" className={styles.logo} />
               <h2>Zintlr</h2>
            </div>
            <NavBar />
            <div className={styles.search}>
               <div className={styles['search-container']}>
                  <input type="text" placeholder="Search any keyword..." />
                  <div className={styles['search-icon']}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
               </div>
            </div>

            <CreditsBar />
            <div className={styles.user}>
               <div className={styles['user-notification']}>
                  <img src={Bell} alt="notification bell" />
                  <span className={styles['notification-badge']}></span>
               </div>
               <select className={styles['user-menu']} name="user">
                  <option value="Bansilal Brata">Bansilal Brata</option>
                  <option value="options">Options</option>
                  <option value="logout">logout</option>
               </select>
            </div>
            <div className={styles.profile}>
               <img
                  className={styles['profile-img']}
                  src={DisplayProfile}
                  alt="Display Profile"
               />
            </div>
            <div className={styles['header-cta']}>
               <button className={styles['header-cta__btn']}>Upgrade</button>
            </div>
         </div>
      </header>
   );
}

export default Header;
