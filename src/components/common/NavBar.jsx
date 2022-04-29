import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../styles/NavBar.module.css';

const Links = ['Feed', 'Dashboard', 'Lookup', 'List', 'Team'];

function NavBar() {
   return (
      <nav className={styles.navbar}>
         <ul className={styles['navLinks']}>
            {Links.map((link) => (
               <li className={styles.navLink} key={link}>
                  <NavLink to={`/{link}`}>{link}</NavLink>
               </li>
            ))}
         </ul>
      </nav>
   );
}

export default NavBar;
