import { Request, Response } from "express";
import StripeController from "../controllers/stripe.controller";

export default {
  paymentService,
};

async function paymentService(req: Request, res: Response) {
  try {
    const { items } = req.body;

    const order = await StripeController.createOrder(items);

    return res.status(200).json(order);
  } catch (error: any) {
    console.error(
      "[Stripe_Service_Error][createOrderService]",
      JSON.stringify(error)
    );
    return res
      .status(500)
      .send((error?.message as string) || "Internal server error");
  }
}
