import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import authRoutes from './routes/auth.route.js';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js';

const app = express();
const PORT = process.env.PORT || 5400;

const allowedOrigins = [
    'http://localhost:3000',
    'https://csci5709-mern.netlify.app',
];

app.use(cors({
    origin: function(origin, callback) {
        if (!origin) {
            callback(null, true);
        }
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use(express.json());

app.use(
    '/api-docs',
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerSpec),
)

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