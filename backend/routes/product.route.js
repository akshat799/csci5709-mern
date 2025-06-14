import express from 'express';
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const productRoutes = express.Router();

productRoutes.get('/', getProducts);
productRoutes.get('/:id', getProductsById);
productRoutes.post('/', createProduct);
productRoutes.put('/:id', updateProduct);
productRoutes.delete('/:id', deleteProduct);

export default productRoutes;
