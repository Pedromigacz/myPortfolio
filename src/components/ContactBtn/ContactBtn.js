import React, { useEffect, useState } from 'react';
import styles from './ContactBtn.module.css'
import { AnimateSharedLayout, motion } from 'framer-motion'

const contactVariants = {
    initial: {
        borderRadius: 0,
        color: ["#f4f4f4", "#061D3A"],
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    },
    animate: {
        borderRadius: 30,
        color: ["#f4f4f4", "#061D3A"],
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

const ContactBtn = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        if(window.scrollY > 300) setScrolled(true)
        else setScrolled(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <AnimateSharedLayout type="crossfade">  
            <motion.button
                layout
                className={`${styles.button} ${scrolled ? styles.fixedButton : styles.staticButton}`}
                variants={contactVariants}
                initial={false}
                animate={scrolled ? "animate" : "initial"}
            >{scrolled ? '@' : 'Entre em contato'}</motion.button>
        </AnimateSharedLayout>
    );
}
 
export default ContactBtn;