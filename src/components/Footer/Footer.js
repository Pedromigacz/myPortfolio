import React from 'react';
import styles from './Footer.module.css'

const Footer = () => (
    <div className={styles.footerContainer}>
        <span>Made with k3 by <a href="https://www.pedromigacz.com.br">Pedro Migacz</a></span>
        <span>Copyright © 2020 PedroMigacz. Todos os direitos reservados</span>
    </div>
)
 
export default Footer;