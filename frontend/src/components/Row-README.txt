
---

### **3. `Row.jsx` - README**
```markdown
# UserRow Komponens

## Leírás
A `UserRow` egy React komponens, amely egyetlen felhasználó adatait jeleníti meg egy táblázat sorában. A komponens kezeli a szerkesztési módot, valamint a műveleti gombokat (szerkesztés, mentés, mégse, törlés).

## Tulajdonságok (Props)
- **`user`** *(object)*: A felhasználó adatai (ID, név, email, regisztráció dátuma).
- **`editingId`** *(number|null)*: Az éppen szerkesztett felhasználó ID-je. Ha nincs szerkesztés, akkor `null`.
- **`editedName`** *(string)*: A szerkesztett név aktuális értéke.
- **`editedEmail`** *(string)*: A szerkesztett email aktuális értéke.
- **`onEditStart`** *(function)*: Callback függvény, amelyet a szerkesztés gomb megnyomásakor hív meg.
- **`onEditCancel`** *(function)*: Callback függvény, amelyet a szerkesztés megszakításakor hív meg.
- **`onEditChange`** *(function)*: Callback függvény, amelyet a szerkesztési mezők értékének változásakor hív meg.
- **`onUpdate`** *(function)*: Callback függvény, amelyet a szerkesztett adatok mentésekor hív meg.
- **`onDelete`** *(function)*: Callback függvény, amelyet a törlés gomb megnyomásakor hív meg.
- **`styles`** *(object)*: Egyedi stílusok a táblázat celláihoz és gombjaihoz.

## Használat
```jsx
import React from 'react';
import UserRow from './components/Row';

const user = { id: 1, name: 'John Doe', email: 'john@example.com', created_at: '2025-09-29' };

const App = () => {
    return (
        <table>
            <tbody>
                <UserRow
                    user={user}
                    editingId={null}
                    editedName=""
                    editedEmail=""
                    onEditStart={(user) => console.log('Szerkesztés indítása:', user)}
                    onEditCancel={() => console.log('Szerkesztés megszakítva')}
                    onEditChange={(field, value) => console.log(`Mező: ${field}, Érték: ${value}`)}
                    onUpdate={(id) => console.log('Frissítés:', id)}
                    onDelete={(id) => console.log('Törlés:', id)}
                    styles={{
                        tableCellStyle: { border: '1px solid #ccc', padding: '10px', textAlign: 'left' },
                        saveButtonStyle: { padding: '5px', backgroundColor: '#4CAF50', color: 'white' },
                        cancelButtonStyle: { padding: '5px', backgroundColor: '#9E9E9E', color: 'white' },
                        editButtonStyle: { padding: '5px', backgroundColor: '#2196F3', color: 'white' },
                        deleteButtonStyle: { padding: '5px', backgroundColor: '#F44336', color: 'white' },
                    }}
                />
            </tbody>
        </table>
    );
};

export default App;