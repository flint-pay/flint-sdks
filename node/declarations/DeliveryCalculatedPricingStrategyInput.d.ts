
import type { DeliveryDistanceUnitPriceRequestInput } from './DeliveryDistanceUnitPriceRequestInput.js';
import type { DeliveryWeightUnitPriceRequestInput } from './DeliveryWeightUnitPriceRequestInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryCalculatedPricingStrategyInput = { "base_fee"?: Record<string, MoneyValueInput>; "distance"?: DeliveryDistanceUnitPriceRequestInput; "maximum_amount"?: Record<string, MoneyValueInput>; "minimum_amount"?: Record<string, MoneyValueInput>; "per_item_handling"?: Record<string, MoneyValueInput>; "weight"?: DeliveryWeightUnitPriceRequestInput; };
