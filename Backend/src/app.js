import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRoute from './routes/auth.route.js';
import productRoute from './routes/product.route.js';
import cors from 'cors';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { config } from './config/config.js';


const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
   
}));

app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
 e
    return done(null, profile);
}));

app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);

export default app;