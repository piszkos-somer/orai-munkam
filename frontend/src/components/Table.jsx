import React from 'react';
import UserRow from './Row';

const UserTable = ({
    users,
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
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={styles.tableHeaderStyle}>#ID</th>
                    <th style={styles.tableHeaderStyle}>Név</th>
                    <th style={styles.tableHeaderStyle}>Email</th>
                    <th style={styles.tableHeaderStyle}>Regisztráció</th>
                    <th style={styles.tableHeaderStyle}>Műveletek</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => (
                        <UserRow
                            key={user.id}
                            user={user}
                            editingId={editingId}
                            editedName={editedName}
                            editedEmail={editedEmail}
                            onEditStart={onEditStart}
                            onEditCancel={onEditCancel}
                            onEditChange={onEditChange}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            styles={styles}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" style={styles.noUsersCellStyle}>Nincsenek felhasználók az adatbázisban.</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserTable;