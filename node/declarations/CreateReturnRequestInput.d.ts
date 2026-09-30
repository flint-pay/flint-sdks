
import type { ReturnLineItemRequestInput } from './ReturnLineItemRequestInput.js';

export type CreateReturnRequestInput = { /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; /** minItems: 1. */ "line_items": Array<ReturnLineItemRequestInput>; "metadata"?: Record<string, string>; "order_id": string; };
