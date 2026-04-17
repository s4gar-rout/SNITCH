import {Router} from 'express';
import { authenticateSeller } from "../middlewares/auth.middleware.js";
import multer from 'multer';
import { createProduct } from '../controllers/product.controller.js';
import {createProductValidator} from '../validators/product.validator.js';
import { getSellerProducts } from '../controllers/product.controller.js';
const router = Router();

const upload= multer({
    storage:multer.memoryStorage(),
    limits:{fileSize:5*1024*1024}//5mb
})


/*
@route POST /api/products
@desc Create a new product
@access Private (Seller only)
*/
router.post(
  "/",
  authenticateSeller,
  upload.array("images", 5), // ✅ sabse pehle multer
  createProductValidator, // ✅ phir validator
  createProduct,
);


/*  
@route GET /api/products
@desc Get all products for the authenticated seller
@access Private (Seller only)
*/

router.get("/seller",authenticateSeller,getSellerProducts);

export default router;