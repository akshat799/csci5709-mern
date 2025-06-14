import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

const app = express();
const PORT = 5400;

app.use(cors());
app.use(express.json());

dotenv.config();

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {    
    res.send('Welcome, server is live');
}
);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});