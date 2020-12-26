import React, { useState } from 'react';
import styles from './BurguerNav.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const menuVariants = {
    hidden: {
      opacity: 0,
      x: 900,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
}

const BurguerNav = ({children}) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                aria-label="Menu button"
                className={styles.burguerMenu + ' ' + (open && styles.open)}
                onClick={e => {setOpen(!open)}}
            ><span className={styles.burguerBar}></span></button>
            <AnimatePresence>
                {open && <motion.div
                    className={styles.menuContainer}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >{children}</motion.div>}
            </AnimatePresence>
        </>
    );
}
 
export default BurguerNav;