
import type { MoneyValue } from './MoneyValue.js';

export type DeliveryCallerSuppliedPricingStrategyRequest = { /** Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "maximum_fee_currency_options": Record<string, MoneyValue>; /** Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "minimum_fee_currency_options": Record<string, MoneyValue>; };
