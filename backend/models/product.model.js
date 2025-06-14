import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter product title"],
        trim: true,
        maxlength: [100, "Product title cannot exceed 100 characters"]
    },
    image: {
        type: String,
        required: [true, "Please enter product image URL"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter product description"],
        trim: true,
        maxlength: [500, "Product description cannot exceed 500 characters"]
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
        min: [0, "Product price cannot be negative"]
    },
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

export default Product;