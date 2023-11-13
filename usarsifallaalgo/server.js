// server.js

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const contacts = [
  { id: 1, name: 'Contacto 1' },
  { id: 2, name: 'Contacto 2' },
  { id: 3, name: 'Contacto 3' },
  // Agrega más contactos aquí
];

app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

app.listen(3000, () => {
  console.log('API server is running on port 3000');
});
