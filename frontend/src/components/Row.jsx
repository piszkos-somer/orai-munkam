import React from 'react';

const UserRow = ({
    user,
    editingId,
    editedName,
    editedEmail,
    onEditStart,
    onEditCancel,
    onEditChange,
    onUpdate,
    onDelete,
    styles
}) => {
    return (
        <tr>
            <td style={styles.tableCellStyle}>{user.id}</td>
            {editingId === user.id ? (
                <>
                    <td style={styles.tableCellStyle}>
                        <input
                            type="text"
                            value={editedName}
                            onChange={e => onEditChange('name', e.target.value)}
                        />
                    </td>
                    <td style={styles.tableCellStyle}>
                        <input
                            type="email"
                            value={editedEmail}
                            onChange={e => onEditChange('email', e.target.value)}
                        />
                    </td>
                </>
            ) : (
                <>
                    <td style={styles.tableCellStyle}>{user.name}</td>
                    <td style={styles.tableCellStyle}>{user.email}</td>
                </>
            )}
            <td style={styles.tableCellStyle}>{new Date(user.created_at).toLocaleDateString()}</td>
            <td style={styles.tableCellStyle}>
                {editingId === user.id ? (
                    <>
                        <button onClick={() => onUpdate(user.id)} style={styles.saveButtonStyle}>Mentés</button>
                        <button onClick={onEditCancel} style={styles.cancelButtonStyle}>Mégse</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => onEditStart(user)} style={styles.editButtonStyle}>Szerkesztés</button>
                        <button onClick={() => onDelete(user.id)} style={styles.deleteButtonStyle}>Törlés</button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default UserRow;