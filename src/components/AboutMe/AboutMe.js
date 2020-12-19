import React from 'react';
import styles from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <div class={styles.AboutMeContainer}>
            <h2>Sou um desenvolvedor apaixonado em entregar, com <strong>precisão de pixels</strong>, a melhor experiência web possível a cada usuário!</h2>
            <button className={styles.curriculumButton}>Currículo</button>
        </div>
    );
}
 
export default AboutMe;