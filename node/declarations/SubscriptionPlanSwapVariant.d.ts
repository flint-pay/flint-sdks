
import type { Image } from './Image.js';
import type { MoneyValue } from './MoneyValue.js';
import type { SelectedProductOption } from './SelectedProductOption.js';

export type SubscriptionPlanSwapVariant = { "image"?: Image; "name": string; "selected_options": Array<SelectedProductOption>; "sku"?: string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "unit_price_money"?: MoneyValue; /** pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */ "variant_id": string; };
