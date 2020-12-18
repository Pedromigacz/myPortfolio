import React, { useEffect, useContext } from 'react';
import styles from './ContactModal.module.css'
import FloatingTagInput from './FloatingTagInput'
import FloatingTagTextArea from './FloatingTagTextArea'
import ContactInfo from './ContactInfo'
import { motion } from 'framer-motion'
import { ContactContext } from '../../contexts/ContactContext'

const backDropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 }
    }
}

const modalVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
  }

const ContactModal = ({ setShowContactModal }) => {
    const { form, setForm } = useContext(ContactContext)

    const handleChange = e => {
        const newForm = {...form}
        newForm[e.target.name] = e.target.value
        setForm(newForm)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
    }

    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden'
        return () => {document.querySelector('body').style.overflow = 'unset'}
    }, [])

    return (
        <motion.div
            className={styles.backDrop}
            variants={backDropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div
                className={styles.modal}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
            >
                <button
                    className={styles.closeBtn}
                    onClick={e => setShowContactModal(false)}
                >X</button>
                <form onSubmit={handleSubmit}>
                    <FloatingTagInput
                        styles={styles}
                        label="Nome:"
                        inputKey="name"
                        handleChange={handleChange}
                        form={form}
                    />
                    <FloatingTagInput
                        styles={styles}
                        label="Email:"
                        inputKey="email"
                        handleChange={handleChange}
                        form={form}
                    />
                    <FloatingTagInput
                        styles={styles}
                        label="Telefone:"
                        inputKey="phone"
                        handleChange={handleChange}
                        form={form}
                    />
                    <FloatingTagTextArea
                        styles={styles}
                        label="Mensagem:"
                        inputKey="message"
                        handleChange={handleChange}
                        form={form}
                    />
                    <button>Enviar</button>
                </form>
                <ContactInfo />
            </motion.div>
        </motion.div>
    )
}
 
export default ContactModal;