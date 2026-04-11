import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRoute from './routes/auth.route.js';

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);

export default app;