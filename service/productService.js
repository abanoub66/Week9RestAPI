const Product = require("../database/models/productModel");

module.exports.createProduct = async (serviceData) => {
    try {
        let product = new Product({...serviceData})
        return await product.save();
    } catch (error) {
        console.log("something went wrong: service: createProduct;",error);
        throw new Error(error);
    }
}