
import type { MoneyValueInput } from './MoneyValueInput.js';

export type DeliveryExternalPricingStrategyInput = { "delivery_rate_callback_id"?: string; "delivery_rate_callback_revision_id"?: string; "maximum_amount": Record<string, MoneyValueInput>; "minimum_amount": Record<string, MoneyValueInput>; "preview_enabled"?: boolean; };
