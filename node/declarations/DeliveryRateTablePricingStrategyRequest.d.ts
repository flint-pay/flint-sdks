
import type { DeliveryPricingRateRequest } from './DeliveryPricingRateRequest.js';

export type DeliveryRateTablePricingStrategyRequest = { "rates": Array<DeliveryPricingRateRequest>; "unmatched_behavior"?: "unavailable" | (string & {}); };
