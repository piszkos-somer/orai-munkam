# React Komponensek Dokumentációja

Ez a projekt egy egyszerű **React** alapú felhasználókezelő alkalmazás, amely CRUD (Create, Read, Update, Delete) műveleteket valósít meg. Az alkalmazás három fő komponensre lett szétbontva, hogy a kód modulárisabb és könnyebben karbantartható legyen.

## Új Komponensek

### 1. **UserForm**
- **Fájl:** `src/components/UserForm.jsx`
- **Funkció:** 
  - Ez a komponens felelős az új felhasználók hozzáadásáért.
  - Egy egyszerű űrlapot tartalmaz, ahol a felhasználó megadhatja a nevét és az email címét.
- **Props:**
  - `name`: Az aktuálisan beírt név.
  - `email`: Az aktuálisan beírt email cím.
  - `setName`: A név állapotának frissítésére szolgáló függvény.
  - `setEmail`: Az email állapotának frissítésére szolgáló függvény.
  - `handleSubmit`: Az űrlap elküldésére szolgáló eseménykezelő.

---

### 2. **UserTable**
- **Fájl:** `src/components/UserTable.jsx`
- **Funkció:** 
  - Ez a komponens jeleníti meg a felhasználók listáját egy táblázatban.
  - A táblázat minden sora egy-egy felhasználót reprezentál, amelyet a `UserRow` komponens kezel.
- **Props:**
  - `users`: A felhasználók listája.
  - `editingId`: Az éppen szerkesztett felhasználó azonosítója.
  - `editedName`: A szerkesztett név.
  - `editedEmail`: A szerkesztett email cím.
  - `setEditedName`: A szerkesztett név állapotának frissítésére szolgáló függvény.
  - `setEditedEmail`: A szerkesztett email állapotának frissítésére szolgáló függvény.
  - `handleEditStart`: A szerkesztés megkezdésére szolgáló eseménykezelő.
  - `handleUpdate`: A szerkesztett adatok mentésére szolgáló eseménykezelő.
  - `handleEditCancel`: A szerkesztés megszakítására szolgáló eseménykezelő.
  - `handleDelete`: A felhasználó törlésére szolgáló eseménykezelő.

---

### 3. **UserRow**
- **Fájl:** `src/components/UserRow.jsx`
- **Funkció:** 
  - Ez a komponens egyetlen felhasználó adatait jeleníti meg egy táblázatsorban.
  - Lehetővé teszi a felhasználó adatainak szerkesztését vagy törlését.
- **Props:**
  - `user`: Az aktuális felhasználó adatai.
  - `editingId`: Az éppen szerkesztett felhasználó azonosítója.
  - `editedName`: A szerkesztett név.
  - `editedEmail`: A szerkesztett email cím.
  - `setEditedName`: A szerkesztett név állapotának frissítésére szolgáló függvény.
  - `setEditedEmail`: A szerkesztett email állapotának frissítésére szolgáló függvény.
  - `handleEditStart`: A szerkesztés megkezdésére szolgáló eseménykezelő.
  - `handleUpdate`: A szerkesztett adatok mentésére szolgáló eseménykezelő.
  - `handleEditCancel`: A szerkesztés megszakítására szolgáló eseménykezelő.
  - `handleDelete`: A felhasználó törlésére szolgáló eseménykezelő.

---

## Hogyan működnek együtt a komponensek?

1. **`App.jsx`**:
   - Az alkalmazás fő komponense, amely az állapotokat kezeli és az adatokat továbbítja a gyermek komponenseknek.
   - Meghívja a `UserForm` és `UserTable` komponenseket.

2. **`UserForm`**:
   - Az új felhasználók hozzáadásáért felelős.
   - Az űrlap elküldésekor meghívja az `App.jsx`-ben definiált `handleSubmit` függvényt.

3. **`UserTable`**:
   - A felhasználók listáját jeleníti meg.
   - A táblázat minden sora egy `UserRow` komponens.

4. **`UserRow`**:
   - Egyetlen felhasználó adatait jeleníti meg.
   - Lehetővé teszi a felhasználó adatainak szerkesztését vagy törlését.

---

## Futtatás

1. Telepítsd a szükséges csomagokat:
   ```bash
   npm install