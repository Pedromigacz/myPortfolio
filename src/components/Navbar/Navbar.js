import React, { useState, useEffect } from 'react';
import BurguerNav from './BurgueNav/BurguerNav'
import styles from './Navbar.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { graphql, useStaticQuery } from 'gatsby'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobile, setMobile] = useState(false)

    const { strapiCurriculum: { curriculo }, logoAsset: { logo }, scrollAsset: { scrollDownIndicator } } = useStaticQuery(graphql`
        {
            strapiCurriculum {
                curriculo {
                    url
                }
            }
            logoAsset:strapiAssets(assetName: {eq: "logo"}) {
                logo:assetFile {
                    url
                }
            }
            scrollAsset:strapiAssets(assetName: {eq: "scrollDownIndicator"}) {
                scrollDownIndicator:assetFile {
                    url
                }
            }
        }
    `)

    useEffect(() => {window.addEventListener('scroll', () => {
        if(window.scrollY !== 0) setScrolled(true)
        else setScrolled(false)
    })}, [])

    useEffect(() => {
        if(window.innerWidth <= 900) setMobile(true)
        else setMobile(false)
    }, [])

    return (
        <>
        <nav className={styles.navbar}>
            <Link to="home" spy={true} smooth={true} duration={300}><img
                src={(process.env.GATSBY_BACKEND_URL || 'http://localhost:1337') + logo[0].url}
                alt="PedroMigacz"
                className={styles.logo}
            /></Link>
            {mobile ? (<BurguerNav>
                <ul>
                    <li><Link to="home" spy={true} smooth={true} duration={300}>Home</Link></li>
                    <li className={styles.crossed}>Trabalhos</li>
                    <li><Link to="aboutMe" spy={true} smooth={true} duration={300}>Sobre mim</Link></li>
                    <li><a
                            href={(process.env.GATSBY_BACKEND_URL || "http://localhost:1337") + curriculo[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                    >Currículo</a></li>
                </ul>
            </BurguerNav>) : (
                <ul>
                    <li><Link to="home" spy={true} smooth={true} duration={300}>Home</Link></li>
                    <li className={styles.crossed}>Trabalhos</li>
                    <li><Link to="aboutMe" spy={true} smooth={true} duration={300}>Sobre mim</Link></li>
                    <li><a
                            href={(process.env.GATSBY_BACKEND_URL || "http://localhost:1337") + curriculo[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                    >Currículo</a></li>
                </ul>
            )}
        </nav>
        <AnimatePresence>
            {!scrolled && <motion.div
                className={styles.scrollDownIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <span>deixa eu te mostrar</span>
                <img src={(process.env.GATSBY_BACKEND_URL || 'http://localhost:1337') + scrollDownIndicator[0].url} alt="scroll down indicator"/>
            </motion.div>}
        </AnimatePresence>
        </>
    );
}
 
export default Navbar;