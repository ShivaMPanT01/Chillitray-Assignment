import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SideBar.module.css';
import { sideBarList } from '../script/data';

function SideBar() {
   return (
      <div className={styles['side-bar']}>
         <ul className={styles['side-bar__container']}>
            {sideBarList.map((item) => {
               return (
                  <li className={styles['side-bar__item']} key={item.id}>
                     <img src={item.img} alt={item.name} />
                     <Link to="/">{item.name}</Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default SideBar;
