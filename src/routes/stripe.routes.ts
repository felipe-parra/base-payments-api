import { Router } from "express";
import StripeService from "../services/stripe.service";
const router = Router();

router.post("/payment", StripeService.paymentService);

// router.post("/webhook", MPService.webhookService);

export default router;
