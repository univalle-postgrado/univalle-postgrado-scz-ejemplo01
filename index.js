const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/movies', (req, res) => {
    res.send('GET: Response all movies');
});
app.post('/movies', (req, res) => {
    res.send('POST: crear película');
});
app.get('/movies/:id', (req, res) => {
    res.send('GET: Obtener película con id: ' + req.params.id);
});
app.put('/movies/:id', (req, res) => {
    res.send('PUT: Actualizar película con id: ' + req.params.id);
});
app.patch('/movies/:id', (req, res) => {
    res.send('PATCH: Actualizar parcialmente película con id: ' + req.params.id);
});
app.delete('/movies/:id', (req, res) => {
    res.send('DELETE: Eliminar película con id: ' + req.params.id);
});

app.get('/actors', (req, res) => {
    res.send('GET: Response all actors');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
