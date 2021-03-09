import React from 'react';
import styles from './style.module.css'

const Nav = ( ) => {
    return(
        <div className={styles.nav}>
            <div className={styles.logo,  'flex'}>
                <h4 className={styles.logoText}>
                    TU<br/>RA
                </h4>
            </div>

            <div className={styles.menueList}>
                <li className={styles.menuItem}>
                    <p>
                        projects
                    </p>
                </li>

                <li className={styles.menuItem}>
                    <p>
                        contacts
                    </p>
                </li>

            </div>
        </div>
    )
}

export default Nav