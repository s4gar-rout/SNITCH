import {Router} from 'express';
import { authenticateSeller } from "../middlewares/auth.middleware.js";
import multer from 'multer';
import { createProduct } from '../controllers/product.controller.js';
import {createProductValidator} from '../validators/product.validator.js';

const router = Router();

const upload= multer({
    storage:multer.memoryStorage(),
    limits:{fileSize:5*1024*1024}//5mb
})

router.post(
  "/",
  authenticateSeller,
  upload.array("images", 5), // ✅ sabse pehle multer
  createProductValidator, // ✅ phir validator
  createProduct,
);


export default router;