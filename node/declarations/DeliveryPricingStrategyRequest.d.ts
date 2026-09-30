
import type { DeliveryCalculatedPricingStrategyRequest } from './DeliveryCalculatedPricingStrategyRequest.js';
import type { DeliveryCallbackPricingStrategyRequest } from './DeliveryCallbackPricingStrategyRequest.js';
import type { DeliveryCallerSuppliedPricingStrategyRequest } from './DeliveryCallerSuppliedPricingStrategyRequest.js';
import type { DeliveryFixedPricingStrategyRequest } from './DeliveryFixedPricingStrategyRequest.js';
import type { DeliveryRateTablePricingStrategyRequest } from './DeliveryRateTablePricingStrategyRequest.js';
import type { DeliveryTieredPricingStrategyRequest } from './DeliveryTieredPricingStrategyRequest.js';

export type DeliveryPricingStrategyRequest = ({ "calculated"?: DeliveryCalculatedPricingStrategyRequest; "callback"?: DeliveryCallbackPricingStrategyRequest; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyRequest; "fixed"?: DeliveryFixedPricingStrategyRequest; "rate_table"?: DeliveryRateTablePricingStrategyRequest; "tiered"?: DeliveryTieredPricingStrategyRequest; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied" | (string & {}); }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; })) | (({ "type": ("callback") & ("callback"); "callback": unknown; })) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; })) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; })) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; })) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; })) | (object));
