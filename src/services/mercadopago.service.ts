import { Request, Response } from "express";
import MPController from "../controllers/mercadopago.controller";

export default {
  createOrderService,
  webhookService,
};

async function createOrderService(req: Request, res: Response) {
  try {
    const { items } = req.body;

    const order = await MPController.createOrder(items);

    return res.status(200).json(order);
  } catch (error: any) {
    console.error(
      "[MP_Service_Error][createOrderService]",
      JSON.stringify(error)
    );
    return res
      .status(500)
      .send((error?.message as string) || "Internal server error");
  }
}

async function webhookService(req: Request, res: Response) {
  try {
    const { query } = req;

    await MPController.webhook(query);

    return res.status(204);
  } catch (error: any) {
    console.error("[MP_Service_Error][webhookService]", JSON.stringify(error));

    return res
      .status(500)
      .send((error?.message as string) || "Internal server error");
  }
}
