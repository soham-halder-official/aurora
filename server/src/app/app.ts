import express, { Express, type Request, type Response } from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { Server, createServer } from 'http';
import path from 'path';

const app: Express = express();

app.use(morgan('combined'));
app.use(express.static(path.join(process.cwd(), '/public')));
app.use(express.json({ limit: '100mb' }));
app.use(express.raw({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Server is Running</h1>')
});

const server: Server = createServer(app);

export default server;
