
---

### **2. `Table.jsx` - README**
```markdown
# UserTable Komponens

## Leírás
A `UserTable` egy React komponens, amely egy táblázatot jelenít meg a felhasználók adataival. A táblázat minden sorában megjelenik a felhasználó ID-je, neve, email címe, regisztráció dátuma, valamint műveleti gombok (szerkesztés, törlés).

## Tulajdonságok (Props)
- **`users`** *(array)*: A felhasználók listája, amelyet a táblázatban meg kell jeleníteni.
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
import UserTable from './components/Table';

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', created_at: '2025-09-29' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', created_at: '2025-09-28' },
];

const App = () => {
    return (
        <UserTable
            users={users}
            editingId={null}
            editedName=""
            editedEmail=""
            onEditStart={(user) => console.log('Szerkesztés indítása:', user)}
            onEditCancel={() => console.log('Szerkesztés megszakítva')}
            onEditChange={(field, value) => console.log(`Mező: ${field}, Érték: ${value}`)}
            onUpdate={(id) => console.log('Frissítés:', id)}
            onDelete={(id) => console.log('Törlés:', id)}
            styles={{
                tableHeaderStyle: { border: '1px solid #ccc', padding: '10px', backgroundColor: '#f0f0f0' },
                tableCellStyle: { border: '1px solid #ccc', padding: '10px', textAlign: 'left' },
            }}
        />
    );
};

export default App;