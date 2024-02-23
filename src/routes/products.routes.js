import { Router } from "express";
import { getAll, insertOne, getOne, updateOne } from "../controllers/products.controller.js";

const router = Router();

router.get('/', getAll);
router.get('/:barcode', getOne);
router.post('/:barcode', updateOne);
router.post('/', insertOne);

export default router;