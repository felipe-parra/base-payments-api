import { Router } from "express";
import MPService from "../services/mercadopago.service";
const router = Router();

router.post("/create-order", MPService.createOrderService);

router.post("/webhook", MPService.webhookService);

export default router;
