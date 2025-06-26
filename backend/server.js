import express from 'express';
import cors from 'cors';
import leadRoutes from './leads/lead.controller.js';

const app = express();
const PORT = 5000; 

const corsOptions = {
    origin: '*'  ,
    methods: ['GET', 'POST', 'DELETE'],
  };

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/leads', leadRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

