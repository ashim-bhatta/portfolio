import React from 'react';
import Nav from '../Nav';
import styles from './style.module.css'
import { TiSocialFacebook } from 'react-icons/ti';
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';

const Header = ( ) => {
    const socials = [
        {
            icon : <TiSocialFacebook fontSize={24} />,
            link : 'https://www.instagram.com/'
        },
        {
            icon : <AiOutlineTwitter fontSize={22} />,
            link : 'https://www.facebook.com/'
        },
        {
            icon : <AiFillLinkedin fontSize={22} />,
            link : 'https://www.linkedin.com/'
        },
        {
            icon : <AiOutlineGithub fontSize={22} />,
            link : 'https://www.github.com/'
        },
    ]
    return(
        <div className={styles.header}>
            <Nav />
            <div className={styles.mainContent}>
                <div >
                    <h5 className={styles.left}>
                        i am
                    </h5>
                    <h1>
                        tura
                    </h1>
                    <h5 className={styles.right}>
                        a junior <br/>
                        web developer
                    </h5>
                </div>
            </div>
            <div className={styles.socialIcons} >
                {
                    socials.map(({ icon, link}) => {
                        return(
                            <div onClick={()=> window.open(link, "_blank")} className={styles.socialIcon}>
                                {icon}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header