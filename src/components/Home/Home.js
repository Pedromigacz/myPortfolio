import React from 'react';
import styles from './Home.module.css'
import { ContactBtn } from '../'

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>Olá, meu nome é <strong>Pedro Migacz</strong><br/> e eu desenvolvo sites</h1>
            <ContactBtn />
        </div>
    );
}
 
export default Home;