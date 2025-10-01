import React from 'react';
import UserForm from '../components/UserFrom';

const AddUser = ({ name, email, setName, setEmail, handleSubmit }) => {
    
  return (
    <div>
      <h1>Új Felhasználó Hozzáadása</h1>
      <UserForm
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddUser;