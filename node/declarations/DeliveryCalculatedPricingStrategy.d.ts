
import type { DeliveryDistanceUnitPrice } from './DeliveryDistanceUnitPrice.js';
import type { DeliveryWeightUnitPrice } from './DeliveryWeightUnitPrice.js';
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryCalculatedPricingStrategy = { /** Base delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "base_fee_currency_options"?: Record<string, MoneyValue>; "distance"?: DeliveryDistanceUnitPrice; /** Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "maximum_fee_currency_options"?: Record<string, MoneyValue>; /** Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "minimum_fee_currency_options"?: Record<string, MoneyValue>; /** Handling fee per item by ISO currency code. Each key must equal the Money object's currency. */ "per_item_handling_fee_currency_options"?: Record<string, MoneyValue>; "weight"?: DeliveryWeightUnitPrice; };
