import React, { useState } from 'react';

const ComponentAContext = React.createContext({
  name: '',
  email: '',
});

export const ComponentAProvider = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const changeNameHandler = (name) => {
    setName(name);
  };

  const changeEmailHandler = (email) => {
    setEmail(email);
  };

  const componentAContext = {
    name: name,
    setName: changeNameHandler,
    email: email,
    setEmail: changeEmailHandler,
  };

  return (
    <ComponentAContext.Provider value={componentAContext}>
      {props.children}
    </ComponentAContext.Provider>
  );
};

export default ComponentAContext;
