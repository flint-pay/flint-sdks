
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryExternalPricingStrategy = { "delivery_rate_callback_id"?: string; "delivery_rate_callback_revision_id"?: string; "maximum_amount": Record<string, MoneyValue>; "minimum_amount": Record<string, MoneyValue>; "preview_enabled"?: boolean; };
