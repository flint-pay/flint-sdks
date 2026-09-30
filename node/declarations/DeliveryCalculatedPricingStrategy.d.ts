
import type { DeliveryDistanceUnitPriceRequest } from './DeliveryDistanceUnitPriceRequest.js';
import type { DeliveryWeightUnitPriceRequest } from './DeliveryWeightUnitPriceRequest.js';
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryCalculatedPricingStrategy = { "base_fee"?: Record<string, MoneyValue>; "distance"?: DeliveryDistanceUnitPriceRequest; "maximum_amount"?: Record<string, MoneyValue>; "minimum_amount"?: Record<string, MoneyValue>; "per_item_handling"?: Record<string, MoneyValue>; "weight"?: DeliveryWeightUnitPriceRequest; };
