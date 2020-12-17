import React, { useState } from 'react';
import styles from './ContactModal.module.css'
import FloatingTagInput from './FloatingTagInput'
import FloatingTagTextArea from './FloatingTagTextArea'

const ContactModal = ({ setShowContactModal }) => {
    const [form, setForm] = useState({name: '', email: '', phone: ''})

    const handleChange = e => {
        const newForm = {...form}
        newForm[e.target.name] = e.target.value
        setForm(newForm)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className={styles.backDrop}>
            <div className={styles.modal}>
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
            </div>
        </div>
    )
}
 
export default ContactModal;