import React, { useContext, useRef, useState } from 'react';

import ComponentAContext from '../store/ComponentA';

export const ComponentC = () => {
  const compACtx = useContext(ComponentAContext);
  const { setName, setEmail } = compACtx;
  const inputName = useRef('');
  const inputEmail = useRef('');

  const submitHandler = (e) => {
    e.preventDefault();
    setName(inputName.current.value);
    setEmail(inputEmail.current.value);
    inputName.current.value = '';
    inputEmail.current.value = '';
  };

  const InputForm = ({ inputRef, title, id, type }) => {
    return (
      <>
        <label className='me-1' htmlFor={id}>
          {title}:{' '}
        </label>
        <input
          ref={inputRef}
          type={type}
          className='form-control'
          id={id}
          placeholder={'Enter ' + title}
          required
        />
      </>
    );
  };

  return (
    <>
      <form className='container mt-5' onSubmit={(e) => submitHandler(e)}>
        <div className='d-flex align-items-center mb-3 form-group form-group-sm'>
          <InputForm
            inputRef={inputName}
            title={'Name'}
            id={'forName'}
            type={'text'}
          />
        </div>
        <div className='d-flex align-items-center mb-3 form-group form-group-sm'>
          <InputForm
            inputRef={inputEmail}
            title={'Email'}
            id={'forEmail'}
            type={'email'}
          />
        </div>
        <button type='submit' className='container btn btn-primary'>
          Enter
        </button>
      </form>
    </>
  );
};
