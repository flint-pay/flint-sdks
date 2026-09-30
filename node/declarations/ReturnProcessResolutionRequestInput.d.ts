
import type { ReturnReplacementLineItemRequestInput } from './ReturnReplacementLineItemRequestInput.js';

export type ReturnProcessResolutionRequestInput = { /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price"; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>; "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action"; };
