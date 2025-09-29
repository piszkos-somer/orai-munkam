# UserForm Komponens

## Leírás
A `UserForm` egy egyszerű React komponens, amely egy űrlapot jelenít meg új felhasználók hozzáadásához. Az űrlap tartalmaz két bemeneti mezőt (név és email) és egy gombot az adatok beküldésére.

## Tulajdonságok (Props)
- **`name`** *(string)*: Az űrlap név mezőjének aktuális értéke.
- **`email`** *(string)*: Az űrlap email mezőjének aktuális értéke.
- **`onNameChange`** *(function)*: Callback függvény, amelyet a név mező változásakor hív meg.
- **`onEmailChange`** *(function)*: Callback függvény, amelyet az email mező változásakor hív meg.
- **`onSubmit`** *(function)*: Callback függvény, amelyet az űrlap beküldésekor hív meg.

## Használat
```jsx
import React, { useState } from 'react';
import UserForm from './components/Form';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Név: ${name}, Email: ${email}`);
    };

    return (
        <UserForm
            name={name}
            email={email}
            onNameChange={(e) => setName(e.target.value)}
            onEmailChange={(e) => setEmail(e.target.value)}
            onSubmit={handleSubmit}
        />
    );
};

export default App;