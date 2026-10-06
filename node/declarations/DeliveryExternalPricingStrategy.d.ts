
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryExternalPricingStrategy = { "delivery_rate_callback_id"?: string; "delivery_rate_callback_revision_id"?: string; /** Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "maximum_fee_currency_options": Record<string, MoneyValue>; /** Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "minimum_fee_currency_options": Record<string, MoneyValue>; "preview_enabled"?: boolean; };
