import React from 'react';
import UserTable from '../components/UserTable';

const Home = ({
  users,
  editingId,
  editedName,
  editedEmail,
  setEditedName,
  setEditedEmail,
  handleEditStart,
  handleUpdate,
  handleEditCancel,
  handleDelete,
}) => {
  return (
    <div>
      <h1>Felhasználók Listája</h1>
      <UserTable
        users={users}
        editingId={editingId}
        editedName={editedName}
        editedEmail={editedEmail}
        setEditedName={setEditedName}
        setEditedEmail={setEditedEmail}
        handleEditStart={handleEditStart}
        handleUpdate={handleUpdate}
        handleEditCancel={handleEditCancel}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;