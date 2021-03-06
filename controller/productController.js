const productService = require('../service/productService');


module.exports.createProduct = async (req, res) => {
    let response = {};
    try {
        const responseFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = "Product sucessfully created";
        response.body = responseFromService;
    } catch (error) {
        console.log("Something went wrong: Controller: createProduct, error");
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response);
}    