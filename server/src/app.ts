
import express, {Application} from 'express';
import path from 'path';
import {router} from './routes/userRouter';
import cors from "cors";
import './models/deedModels'

const PORT = process.env.PORT || 5000;

const app:Application = express();

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));




// allowed origins
const allowedOrigins = [
  "http://localhost:5173", // Vite default dev port
  "http://localhost:3000", // if you use CRA or another port
  "https://memorial-zmw1.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        // allow requests with no origin (like curl or mobile apps)
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // if you want cookies or auth headers
  })
);


app.use(express.json());
app.use('/api', router);



const clientPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientPath));
app.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
})