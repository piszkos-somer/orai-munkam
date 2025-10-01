import React from 'react';

const UserRow = ({
    user,
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
    const tableCellStyle = { border: '1px solid #ccc', padding: '10px', textAlign: 'left' };
    const saveButtonStyle = { padding: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', marginRight: '5px' };
    const cancelButtonStyle = { padding: '5px', backgroundColor: '#9E9E9E', color: 'white', border: 'none', cursor: 'pointer' };
    const editButtonStyle = { padding: '5px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer', marginRight: '5px' };
    const deleteButtonStyle = { padding: '5px', backgroundColor: '#F44336', color: 'white', border: 'none', cursor: 'pointer' };

    return (
        <tr>
            <td style={tableCellStyle}>{user.id}</td>
            {editingId === user.id ? (
                <>
                    <td style={tableCellStyle}>
                        <input
                            type="text"
                            value={editedName}
                            onChange={e => setEditedName(e.target.value)}
                        />
                    </td>
                    <td style={tableCellStyle}>
                        <input
                            type="email"
                            value={editedEmail}
                            onChange={e => setEditedEmail(e.target.value)}
                        />
                    </td>
                </>
            ) : (
                <>
                    <td style={tableCellStyle}>{user.name}</td>
                    <td style={tableCellStyle}>{user.email}</td>
                </>
            )}
            <td style={tableCellStyle}>{new Date(user.created_at).toLocaleDateString()}</td>
            <td style={tableCellStyle}>
                {editingId === user.id ? (
                    <>
                        <button onClick={() => handleUpdate(user.id)} style={saveButtonStyle}>Mentés</button>
                        <button onClick={handleEditCancel} style={cancelButtonStyle}>Mégse</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => handleEditStart(user)} style={editButtonStyle}>Szerkesztés</button>
                        <button onClick={() => handleDelete(user.id)} style={deleteButtonStyle}>Törlés</button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default UserRow;