
import type { DeliveryPricingRate } from './DeliveryPricingRate.js';

export type DeliveryRateTablePricingStrategy = { "rates": Array<DeliveryPricingRate>; "unmatched_behavior": "unavailable" | (string & {}); };
