
import type { DeliveryCalculatedPricingStrategy } from './DeliveryCalculatedPricingStrategy.js';
import type { DeliveryExternalPricingStrategy } from './DeliveryExternalPricingStrategy.js';
import type { DeliveryFixedPricingStrategyRequest } from './DeliveryFixedPricingStrategyRequest.js';
import type { DeliveryRateTablePricingStrategy } from './DeliveryRateTablePricingStrategy.js';
import type { DeliveryTieredPricingStrategy } from './DeliveryTieredPricingStrategy.js';

export type DeliveryPricingStrategy = ({ "calculated"?: DeliveryCalculatedPricingStrategy; "callback"?: DeliveryExternalPricingStrategy; "caller_supplied"?: DeliveryExternalPricingStrategy; "fixed"?: DeliveryFixedPricingStrategyRequest; "rate_table"?: DeliveryRateTablePricingStrategy; "tiered"?: DeliveryTieredPricingStrategy; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied" | (string & {}); }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; })) | (({ "type": ("callback") & ("callback"); "callback": unknown; })) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; })) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; })) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; })) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; })) | (object));
