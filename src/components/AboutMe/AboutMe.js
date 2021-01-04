import React from 'react';
import styles from './AboutMe.module.css'
import SkillList from './SkillList.js'
import { graphql, useStaticQuery } from 'gatsby'

const AboutMe = () => {
    const { backend, frontend, others, strapiCurriculum: { curriculo } } = useStaticQuery(graphql`
    {
        backend:allStrapiSkills(filter: {category: {eq: "backEnd"}}) {
            skillList:nodes {
                id
                skill
                icon {
                    url
                    name
                }
            }
        }
        frontend:allStrapiSkills(filter: {category: {eq: "frontEnd"}}) {
            skillList:nodes {
                id
                skill
                icon {
                    url
                    name
                }
            }
        }
        others:allStrapiSkills(filter: {category: {eq: "outros"}}) {
            skillList:nodes {
                id
                skill
                icon {
                    url
                    name
                }
            }
        }
        strapiCurriculum {
            curriculo {
                url
            }
        }
    }
    `)

    return (
        <div className={styles.AboutMeContainer} id="aboutMe">
            <h2>Sou um desenvolvedor comprometido em entregar, com <strong>precisão de pixels</strong>, a melhor experiência web possível a cada usuário!</h2>
            <button className={styles.curriculumButton}>
                <a
                    href={(process.env.GATSBY_BACKEND_URL || "http://localhost:1337") + curriculo[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                >Currículo</a>
            </button>
            <div className={styles.mySkillContainer}>
                <h2>Minhas habilidades:</h2>
                <div className={styles.genericFlexContainer}>
                    <SkillList title="Back-end:" content={backend}/>
                    <SkillList title="Front-end:" content={frontend}/>
                    <SkillList title="DevOps/Outros:" content={others}/>
                </div>
            </div>
        </div>
    );
}
 
export default AboutMe;