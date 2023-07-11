import express from "express";

const API_ROOT = '/api';

import { getPiatti, getPiatto, addPiatto, updatePiatto, deletePiatto } from "../controllers/piatti-controller.js";
import { getRating } from "../controllers/rating-controller.js";

const router = express.Router();

router.get(`${API_ROOT}/rating`, getRating);

router.get(`${API_ROOT}/piatti`, getPiatti);
router.get(`${API_ROOT}/piatti/:id`, getPiatto);
router.post(`${API_ROOT}/piatti`, addPiatto);
router.patch(`${API_ROOT}/piatti/:id`, updatePiatto);
router.delete(`${API_ROOT}/piatti/:id`, deletePiatto);

export default router;