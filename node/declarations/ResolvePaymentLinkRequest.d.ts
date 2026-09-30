
import type { MoneyValue } from './MoneyValue.js';
import type { ResolvePaymentLinkLineItemModifiers } from './ResolvePaymentLinkLineItemModifiers.js';

export type ResolvePaymentLinkRequest = { "custom_field_values"?: Record<string, string>; "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiers>; /** Map of keys to whole-number quantity overrides; fractional quantities are not supported. */ "quantity_overrides"?: Record<string, number>; "resolution_context": string; "unit_price_overrides"?: Record<string, MoneyValue>; };
