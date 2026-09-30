
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { ResolvePaymentLinkLineItemModifiersInput } from './ResolvePaymentLinkLineItemModifiersInput.js';

export type ResolvePaymentLinkRequestInput = { "custom_field_values"?: Record<string, string>; "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiersInput>; /** Map of keys to whole-number quantity overrides; fractional quantities are not supported. */ "quantity_overrides"?: Record<string, number>; "resolution_context": string; "unit_price_overrides"?: Record<string, MoneyValueInput>; };
