
import express, {Application} from 'express';
import {router} from './routes/userRouter';

const PORT = process.env.PORT || 5000;

const app:Application = express();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use(express.json());
app.use('/api', router);