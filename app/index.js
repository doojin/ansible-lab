const express = require('express');

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const app = express();
const instanceId = Math.floor(Math.random() * 1_000_000_000);

app.get('/', (req, res) => {
    res.json({ instanceId });
});

// Healthcheck endpoint
app.get('/ping', (req, res) => {
    res.json({ ok: true });
});

app.listen(PORT, (error) => {
    console.log(`App accepts connections on port ${PORT}`);
});