import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ 
            success: false,
            message: "Server Error",
         });
    }
}

export const getProductsById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product
        });
    }
    catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ 
            success: false,
            message: "Server Error",
         });
    }
}
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ 
            success: false,
            message: "Server Error",
         });
    }
}
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid product ID"
        });
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        });  
    }
    catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ 
            success: false,
            message: "Server Error",
            error: error.message
         });
    }
}
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ 
            success: false,
            message: "Server Error",
         });
    }
}