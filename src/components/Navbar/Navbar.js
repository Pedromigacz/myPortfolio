import React, { useState, useEffect } from 'react';
import Logo from '../../../public/static/logo.svg'
import styles from './Navbar.module.css'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {window.addEventListener('scroll', () => {
        if(window.scrollY !== 0) setScrolled(true)
        else setScrolled(false)
    })}, [])
    return (
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
                    transition={{ duration: 1, type: "tween" }}
                />}
            </AnimatePresence>
        </nav>
    );
}
 
export default Navbar;