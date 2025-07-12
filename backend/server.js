import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import authRoutes from './routes/auth.route.js';

const app = express();
const PORT = process.env.PORT || 5400;

app.use(cors());
app.use(express.json());

dotenv.config();

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {    
    res.send('Welcome, server is live');
}
);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});