
import type { CreateOrderDiscountInput } from './CreateOrderDiscountInput.js';

export type DiscountPreviewRequestInput = { "discount"?: CreateOrderDiscountInput; /** The order to evaluate. Checkout session credentials can use only their own order. */ "order_id": string; };
