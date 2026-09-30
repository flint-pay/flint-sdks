
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryCallbackPricingStrategyRequest = { "delivery_rate_callback_id": string; "maximum_amount"?: Record<string, MoneyValue>; "minimum_amount"?: Record<string, MoneyValue>; "preview_enabled"?: boolean; };
