
import type { DeliveryDistanceUnitPriceInput } from './DeliveryDistanceUnitPriceInput.js';
import type { DeliveryWeightUnitPriceInput } from './DeliveryWeightUnitPriceInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryCalculatedPricingStrategyInput = { /** Base delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "base_fee_currency_options"?: Record<string, MoneyValueInput>; "distance"?: DeliveryDistanceUnitPriceInput; /** Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "maximum_fee_currency_options"?: Record<string, MoneyValueInput>; /** Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "minimum_fee_currency_options"?: Record<string, MoneyValueInput>; /** Handling fee per item by ISO currency code. Each key must equal the Money object's currency. */ "per_item_handling_fee_currency_options"?: Record<string, MoneyValueInput>; "weight"?: DeliveryWeightUnitPriceInput; };
