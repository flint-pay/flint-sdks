
import type { DeliveryDistanceUnitPriceRequest } from './DeliveryDistanceUnitPriceRequest.js';
import type { DeliveryWeightUnitPriceRequest } from './DeliveryWeightUnitPriceRequest.js';
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryCalculatedPricingStrategyRequest = { /** Base delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "base_fee_currency_options"?: Record<string, MoneyValue>; "distance"?: DeliveryDistanceUnitPriceRequest; /** Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "maximum_fee_currency_options"?: Record<string, MoneyValue>; /** Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "minimum_fee_currency_options"?: Record<string, MoneyValue>; /** Handling fee per item by ISO currency code. Each key must equal the Money object's currency. */ "per_item_handling_fee_currency_options"?: Record<string, MoneyValue>; "weight"?: DeliveryWeightUnitPriceRequest; };
