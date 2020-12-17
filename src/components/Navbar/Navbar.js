import React, { useState, useEffect } from 'react';
import Logo from '../../../public/static/logo.svg'
import ScrollIndicator from '../../../public/static/scrollIndicator.svg'
import styles from './Navbar.module.css'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {window.addEventListener('scroll', () => {
        if(window.scrollY !== 0) setScrolled(true)
        else setScrolled(false)
    })}, [])
    return (
        <>
        <nav className={`${styles.navbar} ${scrolled && styles.scrolled}`}>
            <img src={Logo} alt="PedroMigacz"/>
            <ul>
                <li>Home</li>
                <li className={styles.crossed}>Trabalhos</li>
                <li>Sobre mim/currículo</li>
                <li>Contato</li>
            </ul>
            <AnimatePresence>
                {scrolled && <motion.hr
                    key="navRuler"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut'}}
                />}
            </AnimatePresence>
        </nav>
        <AnimatePresence>
            {!scrolled && <motion.div
                className={styles.scrollDownIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <span>deixa eu te mostrar</span>
                <img src={ScrollIndicator} alt="scroll down indicator"/>
            </motion.div>}
        </AnimatePresence>
        </>
    );
}
 
export default Navbar;