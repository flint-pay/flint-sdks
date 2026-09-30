
import type { ReturnLineItemRequest } from './ReturnLineItemRequest.js';

export type CreateReturnRequest = { /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; /** minItems: 1. */ "line_items": Array<ReturnLineItemRequest>; "metadata"?: Record<string, string>; "order_id": string; };
