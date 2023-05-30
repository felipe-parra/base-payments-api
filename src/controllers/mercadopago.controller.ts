import { configure, preferences, payment } from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { Config } from "../config";

export default {
  createOrder,
  webhook,
};

interface IItemMP {
  title: string;
  unit_price: number;
  quantity: number;
}
const item = {
  title: "Test",
  unit_price: 100,
  quantity: 1,
};

// Create order
async function createOrder(items: IItemMP[]) {
  try {
    configure({
      access_token: Config.mercadopagoAccessToken,
    });
    const preference: CreatePreferencePayload = {
      items,
      notification_url:
        "https://webhook.site/3a9b3b7a-7f7a-4c0a-8f0a-2b0b2b7b2b2b",
      back_urls: {
        success: "https://webhook.site/3a9b3b7a-7f7a-4c0a-8f0a-2b0b2b7b2b2b",
        failure: "https://webhook.site/3a9b3b7a-7f7a-4c0a-8f0a-2b0b2b7b2b2b",
        pending: "https://webhook.site/3a9b3b7a-7f7a-4c0a-8f0a-2b0b2b7b2b2b",
      },
    };
    const response = await preferences.create(preference);
    // TODO - Save order in database
    return response;
  } catch (error) {
    console.error("[MP_Controller_Error]", JSON.stringify(error));
    return error;
  }
}

async function webhook(payment: any) {
  try {
    const { type } = payment;

    if (type === "payment") {
      const { id: paymentId } = payment.data;

      const paymentInfo = await receivePayment(paymentId);
      return paymentInfo;
    }

    return null;
  } catch (error) {
    console.error("[MP_Controller_Error][webhook]", JSON.stringify(error));
    return error;
  }
}

async function receivePayment(paymentId: number) {
  try {
    const paymentInfo = await payment.findById(paymentId);

    // TODO - Update order in database
    return paymentInfo;
  } catch (error) {
    console.error(
      "[MP_Controller_Error][receivePayment]",
      JSON.stringify(error)
    );
    return error;
  }
}
