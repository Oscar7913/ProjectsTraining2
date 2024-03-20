import express from 'express';
import { DiagramRoutes } from './presentation/routes/DiagramRoutes.ts';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

DiagramRoutes(router);

export default app;
