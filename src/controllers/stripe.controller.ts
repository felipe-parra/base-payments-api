import Stripe from "stripe";
import { Config } from "../config/index";
import { IItemStripe } from "../use-case/stripe/stripe.interface";

export default {
  createOrder,
};

const stripe = new Stripe(Config.stripeSecretKey, {
  apiVersion: "2022-11-15",
});

async function createOrder(items: IItemStripe[]) {
  try {
    const order = await stripe.checkout.sessions.create({
      line_items: items,
      success_url: `${Config.paymentGateway}/success.html`, // TODO - Create success page
      cancel_url: `${Config.paymentGateway}/cancel.html`, // TODO - Create cancel page
      mode: "payment",
    });
    return order;
  } catch (error) {
    console.error("[Stripe_Controller_Error]", JSON.stringify(error));
    return error;
  }
}
