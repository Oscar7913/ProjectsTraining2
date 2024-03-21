import express from 'express';
import cors from 'cors';
import { DiagramRoutes } from './presentation/routes/DiagramRoutes.ts';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);

DiagramRoutes(router);

export default app;
