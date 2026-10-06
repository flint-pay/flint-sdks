
import type { CreateOrderDiscount } from './CreateOrderDiscount.js';

export type DiscountPreviewRequest = { "discount"?: CreateOrderDiscount; /** The order to evaluate. Checkout session credentials can use only their own order. */ "order_id": string; };
