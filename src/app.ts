import express from 'express';
import cors from 'cors';
import profileRoutes from './routes/profile.routes.js';

const app = express();

app.use(cors());
app.use(express.json()); // 🚨

app.use('/api', profileRoutes); // Esto hace que tu endpoint final sea: http://localhost:3000/api/profiles

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor de Zonai Engineers corriendo en el puerto ${PORT}`);
});