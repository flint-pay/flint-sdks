
import type { DeliveryPricingRateCreateRequest } from './DeliveryPricingRateCreateRequest.js';

export type DeliveryRateTablePricingStrategyCreateRequest = { "rates": Array<DeliveryPricingRateCreateRequest>; "unmatched_behavior"?: "unavailable" | (string & {}); };
