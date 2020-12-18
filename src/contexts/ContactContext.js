import React, { createContext, useState } from 'react';

export const ContactContext = createContext()

const ContactContextProvider = props => {
  const [form, setForm] = useState({})

  return (
    <ContactContext.Provider value={{ form, setForm }}>
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;