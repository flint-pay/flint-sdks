
import type { ResolvePaymentLinkTextModifierRequest } from './ResolvePaymentLinkTextModifierRequest.js';

export type ResolvePaymentLinkLineItemModifierRequest = { "modifier_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity"?: string; "text"?: ResolvePaymentLinkTextModifierRequest; };
