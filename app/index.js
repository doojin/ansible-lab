const express = require('express');

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const app = express();

app.get('/', (req, res) => {
    console.log('received request');
    res.json({ ok: true });
});

app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`App accepts connections on port ${PORT}`);
});