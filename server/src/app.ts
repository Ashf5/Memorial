
import express, {Application} from 'express';
import path from 'path';
import {router} from './routes/userRouter';

const PORT = process.env.PORT || 5000;

const app:Application = express();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use(express.json());
app.use('/api', router);

const clientPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientPath));
app.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
})