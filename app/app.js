import express from "express";
import parser from 'body-parser'

const app = express();

// Application-level Middlewares

// Parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));

// Parse application/json
app.use(parser.json())

// Logger
const logger = (req, res, next) => { // Logger 部件，记录用
    console.debug(`[${new Date()}] ${req.method} ${req.originalUrl}`);
    next();
}

app.use(logger)

export default app;