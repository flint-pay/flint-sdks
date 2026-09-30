
import type { ReturnReplacementLineItemRequest } from './ReturnReplacementLineItemRequest.js';

export type ReturnProcessResolutionRequest = { /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "metadata"?: Record<string, string>; "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {}); /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>; "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | (string & {}); };
