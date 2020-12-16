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
            <img src={Logo} />
            <ul>
                <li>Home</li>
                <li>Trabalhos</li>
                <li>Sobre mim/currículo</li>
                <li>Contato</li>
            </ul>
            <AnimatePresence>
                {scrolled && <motion.hr
                    key="navRuler"
                    initial={{ x: -2000 }}
                    animate={{ x: 0 }}
                    exit={{ x: -2000 }}
                    transition={{ duration: 0.4, type: "tween" }}
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