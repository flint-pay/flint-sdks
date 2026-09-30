
import type { MoneyValue } from './MoneyValue.js';
import type { OrderCalculatedChargeTax } from './OrderCalculatedChargeTax.js';

export type OrderChargeRequest = ({ "amount_money"?: MoneyValue; "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {}); "description"?: string; "fulfillment_id"?: string; "metadata"?: Record<string, string>; "name": string; /** multipleOf: 0.0001. */ "percent"?: number; "tax"?: OrderCalculatedChargeTax; "type": "service_fee" | "delivery_fee" | "shipping_fee" | "handling_fee" | "packaging_fee" | "small_order_fee" | "service_area_fee" | "setup_fee" | "installation_fee" | "cleaning_fee" | "booking_fee" | "reservation_fee" | "ticket_fee" | "fulfillment_fee" | "restocking_fee" | "rush_fee" | "other" | (string & {}); }) & ((({ "amount_money": unknown; })) | (({ "percent": unknown; })) | (object));
