import * as dotenv from "dotenv";

dotenv.config();

// Interface
interface IConfig {
  port: number;
  paymentGateway: string;
  // Mercado Pago
  mercadopagoPublicKey: string;
  mercadopagoAccessToken: string;
  // Stripe
  stripePublicKey: string;
  stripeSecretKey: string;
  // Paypal
  paypalClientId: string;
  paypalSecretKey: string;
}

const nodeEnv: string = (process.env.NODE_ENV as string) || "development";

const devConfig: IConfig = {
  port: parseInt(process.env.PORT as string, 10) || 3000,
  paymentGateway: String(process.env.PAYMENT_GATEWAY),
  mercadopagoPublicKey: String(process.env.MERCADOPAGO_PUBLIC_KEY),
  mercadopagoAccessToken: String(process.env.MERCADOPAGO_ACCESS_TOKEN),
  stripePublicKey: String(process.env.STRIPE_PUBLIC_KEY),
  stripeSecretKey: String(process.env.STRIPE_SECRET_KEY),
  paypalClientId: String(process.env.PAYPAL_CLIENT_ID),
  paypalSecretKey: String(process.env.PAYPAL_SECRET_KEY),
};
const prodConfig: IConfig = {
  port: parseInt(process.env.PORT as string, 10),
  paymentGateway: String(process.env.PAYMENT_GATEWAY),
  mercadopagoPublicKey: String(process.env.MERCADOPAGO_PUBLIC_KEY),
  mercadopagoAccessToken: String(process.env.MERCADOPAGO_ACCESS_TOKEN),
  stripePublicKey: String(process.env.STRIPE_PUBLIC_KEY),
  stripeSecretKey: String(process.env.STRIPE_SECRET_KEY),
  paypalClientId: String(process.env.PAYPAL_CLIENT_ID),
  paypalSecretKey: String(process.env.PAYPAL_SECRET_KEY),
};
export const Config: IConfig =
  nodeEnv === "production" ? prodConfig : devConfig;
