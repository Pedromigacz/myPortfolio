import React, { useState } from 'react';

import styles from './ContactBtn.module.css'

const ContactBtn = () => {
    const [scrolled, setScrolled] = useState(false)

    return (
        <>  
            {scrolled ? (
                <button
                    onClick={e => { setScrolled(!scrolled) }}
                    className={`${styles.button} ${styles.fixedButton}`}
                >@</button>
            ) : (
                <button
                    onClick={e => { setScrolled(!scrolled) }}
                    className={`${styles.button} ${styles.staticButton}`}
                >Entre em contato</button>
            )}
        </>
    );
}
 
export default ContactBtn;