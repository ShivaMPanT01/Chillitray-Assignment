import React from 'react';

import Credits from '../../Assets/images/Credits.png';
// import creditsBar from '../../Assets/images/CreditsBar.png';

import styles from '../../styles/CreditsBar.module.css';

function CreditsBar() {
   return (
      <div className={styles['header-credits']}>
         <div className={styles['header-credits__container']}>
            <div className={styles['header-credits__content']}>
               <img src={Credits} alt="creadits" />
               <p>Credits</p>
            </div>
            <div className={styles['credits-bar']}>
               <span className={styles['credits-bar__fill']}></span>
            </div>
         </div>
      </div>
   );
}

export default CreditsBar;
