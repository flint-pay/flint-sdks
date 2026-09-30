
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryPricingTierBand = { "currency_options": Record<string, MoneyValue>; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "from": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "to"?: string; };
