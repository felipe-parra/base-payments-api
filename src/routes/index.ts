import { Router } from "express";
import exampleRoutes from "./example.routes";
import mercadopagoRoutes from "./mercadopago.routes";
import stripeRoutes from "./stripe.routes";

const router = Router();

router.use("/greetings", exampleRoutes);
router.use("/mercadopago", mercadopagoRoutes);
router.use("/stripe", stripeRoutes);

export default router;
