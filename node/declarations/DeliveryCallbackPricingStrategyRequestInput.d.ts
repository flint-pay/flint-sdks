
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryCallbackPricingStrategyRequestInput = { "delivery_rate_callback_id": string; /** Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "maximum_fee_currency_options"?: Record<string, MoneyValueInput>; /** Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. */ "minimum_fee_currency_options"?: Record<string, MoneyValueInput>; "preview_enabled"?: boolean; };
