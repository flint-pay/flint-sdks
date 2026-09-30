
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryPricingTierBandInput = { "currency_options": Record<string, MoneyValueInput>; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "from": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "to"?: string; };
