import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddUser from './pages/AddUser';


function App() {
  // State változók
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  // Adatok lekérése
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/api/users');
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Nem sikerült betölteni az adatokat.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // CRUD műveletek
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert('A név és az email megadása kötelező!');
      return;
    }
    try {
      await axios.post('http://localhost:3001/api/users', { name, email });
      fetchData();
      setName('');
      setEmail('');
    } catch (err) {
      setError('Hiba történt a felhasználó hozzáadása közben.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(`Biztosan törölni szeretnéd a(z) ${id} ID-jű felhasználót?`)) return;
    try {
      await axios.delete(`http://localhost:3001/api/users/${id}`);
      fetchData();
    } catch (err) {
      setError('Nem sikerült törölni a felhasználót.');
    }
  };

  const handleEditStart = (user) => {
    setEditingId(user.id);
    setEditedName(user.name);
    setEditedEmail(user.email);
  };

  const handleUpdate = async (id) => {
    if (!editedName || !editedEmail) {
      alert('A név és az email mező kitöltése kötelező!');
      return;
    }
    try {
      await axios.patch(`http://localhost:3001/api/users/${id}`, {
        name: editedName,
        email: editedEmail,
      });
      setEditingId(null);
      fetchData();
    } catch (err) {
      setError('Nem sikerült módosítani a felhasználót.');
    }
  };

  const handleEditCancel = () => {
    setEditingId(null);
  };

  // Feltételes renderelés
  if (loading) return <div className="App"><p>Adatok betöltése...</p></div>;
  if (error) return <div className="App"><p style={{ color: 'red' }}>{error}</p></div>;

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
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
            }
          />
          <Route
            path="/add-user"
            element={
              <AddUser
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;