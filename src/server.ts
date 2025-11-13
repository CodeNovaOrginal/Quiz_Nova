import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
// Use the PORT provided by the hosting environment, or default to 3000 for local development.
const PORT = process.env.PORT || 3000;

// Serve the static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});