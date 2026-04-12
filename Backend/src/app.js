import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRoute from './routes/auth.route.js';
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
    // Here, you would typically find or create a user in your database
    // For this example, we'll just return the profile
    return done(null, profile);
}));

app.use('/api/auth', authRoute);

export default app;