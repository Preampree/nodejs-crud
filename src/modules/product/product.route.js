import express from 'express';
import ProductController from './controller/product.controller.js';
import { createValidator } from 'express-joi-validation';
import { cerateProductDto } from './controller/dto/create-product.dto.js';
import { UpdateProductDto } from './controller/dto/update-product.dto.js';

const ProductRouter = express.Router()
const validator = createValidator({})

ProductRouter.get('/', ProductController.getProduct)
ProductRouter.get('/:id', ProductController.getProductById)
ProductRouter.post('/', validator.body(cerateProductDto), ProductController.createProduct)
ProductRouter.patch('/:id', validator.body(UpdateProductDto), ProductController.updateProduct)

export default ProductRouter