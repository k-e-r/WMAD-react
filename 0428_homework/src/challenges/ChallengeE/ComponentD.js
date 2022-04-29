import React, { useContext, useEffect, useState } from 'react';

import ComponentAContext from '../store/ComponentA';

export const ComponentD = () => {
  const compACtx = useContext(ComponentAContext);
  const [name, setName] = useState(compACtx.name);
  const [email, setEmail] = useState(compACtx.email);

  useEffect(() => {
    setName(compACtx.name);
    setEmail(compACtx.email);
  }, [compACtx]);

  return (
    <>
      <div className='container mt-5 border'>
        <p className='mt-3'>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </>
  );
};
