import { Router } from "express";
import { insertOne, home, getAll, deleteOne } from "../controllers/coments.controller.js";

const router = Router();

router.get('/', home)
router.get('/comments', getAll)
router.post('/comments', insertOne);
router.get('/comments/delete/:num_identif', deleteOne);

export default router;
