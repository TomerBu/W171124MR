import express from 'express';
import dotenv from 'dotenv';

// load the environment variables from .env file
dotenv.config();
const app = express();

const PORT = process.env.NODE_PORT || 5000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the api!' });
});
app.get('/api/foo', (req, res) => {
    res.json({ message: 'Hello from foo' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});