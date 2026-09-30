
import type { ReturnReplacementLineItemRequest } from './ReturnReplacementLineItemRequest.js';
import type { ReturnResolutionAdjustmentRequest } from './ReturnResolutionAdjustmentRequest.js';
import type { ReturnResolutionLineItemRequest } from './ReturnResolutionLineItemRequest.js';

export type CreateReturnResolutionPreviewRequest = ({ "adjustments"?: Array<ReturnResolutionAdjustmentRequest>; "corrects_return_resolution_id"?: string; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "expected_version"?: string; "line_items"?: Array<ReturnResolutionLineItemRequest>; "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {}); "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>; "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "correction" | (string & {}); "return_id": string; }) & ((({ /** minItems: 1. */ "line_items": unknown; "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action"; })) | (({ /** minItems: 1. */ "adjustments": unknown; "resolution_type"?: "correction"; "corrects_return_resolution_id": unknown; })) | (object));
