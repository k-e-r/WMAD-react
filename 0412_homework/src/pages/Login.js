import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Form from '../components/Form';

const Login = ({ afterLogin }) => {
  const [toDashboard, setToDashboard] = useState(false);

  useEffect(() => {
    if (toDashboard) afterLogin();
  }, [toDashboard]);

  if (toDashboard === true) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <>
      <h1>Login</h1>
      {/* <Form afterSubmit={() => navigate("/dashboard")} /> */}
      <Form afterSubmit={() => setToDashboard(true)} />
    </>
  );
};

export default Login;
