import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Form from '../components/Form';

const Register = ({ afterRegister }) => {
  //   const navigate = useNavigate();
  const [toDashboard, setToDashboard] = useState(false);

  useEffect(() => {
    if (toDashboard) afterRegister();
  }, [toDashboard]);

  if (toDashboard === true) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <>
      <h1>Register</h1>
      {/* <Form afterSubmit={() => navigate("/dashboard")} /> */}
      <Form afterSubmit={() => setToDashboard(true)} />
    </>
  );
};

export default Register;
