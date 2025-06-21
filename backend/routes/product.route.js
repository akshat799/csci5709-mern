import express from 'express';
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const productRoutes = express.Router();

productRoutes.get('/',authMiddleware, getProducts);
productRoutes.get('/:id', authMiddleware, getProductsById);
productRoutes.post('/',authMiddleware, createProduct);
productRoutes.put('/:id',authMiddleware, updateProduct);
productRoutes.delete('/:id',authMiddleware, deleteProduct);

export default productRoutes;
