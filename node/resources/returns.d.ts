export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { AccessLinkResponse } from '../declarations/AccessLinkResponse.js';
import type { AddReturnLineItemResponse } from '../declarations/AddReturnLineItemResponse.js';
import type { CancelReturnDispositionResponse } from '../declarations/CancelReturnDispositionResponse.js';
import type { CancelReturnResolutionResponse } from '../declarations/CancelReturnResolutionResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateReturnInspectionResponse } from '../declarations/CreateReturnInspectionResponse.js';
import type { CreateReturnReceiptResponse } from '../declarations/CreateReturnReceiptResponse.js';
import type { GetReturnLineItemResponse } from '../declarations/GetReturnLineItemResponse.js';
import type { ListReturnLineItemsResponse } from '../declarations/ListReturnLineItemsResponse.js';
import type { ListReturnsResponse } from '../declarations/ListReturnsResponse.js';
import type { ProcessExistingReturnLineItemRequestInput } from '../declarations/ProcessExistingReturnLineItemRequestInput.js';
import type { ProcessExistingReturnResponse } from '../declarations/ProcessExistingReturnResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnInspectionLineItemRequestInput } from '../declarations/ReturnInspectionLineItemRequestInput.js';
import type { ReturnLineDecisionInput } from '../declarations/ReturnLineDecisionInput.js';
import type { ReturnLineItem } from '../declarations/ReturnLineItem.js';
import type { ReturnLineItemRequestInput } from '../declarations/ReturnLineItemRequestInput.js';
import type { ReturnProcessReceiptRequestInput } from '../declarations/ReturnProcessReceiptRequestInput.js';
import type { ReturnReceiptLineItemRequestInput } from '../declarations/ReturnReceiptLineItemRequestInput.js';
import type { ReturnReplacementLineItemRequestInput } from '../declarations/ReturnReplacementLineItemRequestInput.js';
import type { ReturnResolutionAdjustmentRequestInput } from '../declarations/ReturnResolutionAdjustmentRequestInput.js';
import type { ReturnResolutionLineItemRequestInput } from '../declarations/ReturnResolutionLineItemRequestInput.js';
import type { ReturnResource } from '../declarations/ReturnResource.js';
import type { ReturnSourceSystemInput } from '../declarations/ReturnSourceSystemInput.js';
import type { ReturnsAddLineItemInput } from '../declarations/ReturnsAddLineItemInput.js';
import type { ReturnsAddLineItemResponse } from '../declarations/ReturnsAddLineItemResponse.js';
import type { ReturnsCancelInput } from '../declarations/ReturnsCancelInput.js';
import type { ReturnsCancelLineItemInput } from '../declarations/ReturnsCancelLineItemInput.js';
import type { ReturnsCancelLineItemResponse } from '../declarations/ReturnsCancelLineItemResponse.js';
import type { ReturnsCancelResponse } from '../declarations/ReturnsCancelResponse.js';
import type { ReturnsCompleteInput } from '../declarations/ReturnsCompleteInput.js';
import type { ReturnsCompleteResponse } from '../declarations/ReturnsCompleteResponse.js';
import type { ReturnsCreateAccessLinkInput } from '../declarations/ReturnsCreateAccessLinkInput.js';
import type { ReturnsCreateAccessLinkResponse } from '../declarations/ReturnsCreateAccessLinkResponse.js';
import type { ReturnsCreateDispositionInput } from '../declarations/ReturnsCreateDispositionInput.js';
import type { ReturnsCreateDispositionResponse } from '../declarations/ReturnsCreateDispositionResponse.js';
import type { ReturnsCreateInput } from '../declarations/ReturnsCreateInput.js';
import type { ReturnsCreateInspectionInput } from '../declarations/ReturnsCreateInspectionInput.js';
import type { ReturnsCreateInspectionResponse } from '../declarations/ReturnsCreateInspectionResponse.js';
import type { ReturnsCreateReceiptInput } from '../declarations/ReturnsCreateReceiptInput.js';
import type { ReturnsCreateReceiptResponse } from '../declarations/ReturnsCreateReceiptResponse.js';
import type { ReturnsCreateResolutionInput } from '../declarations/ReturnsCreateResolutionInput.js';
import type { ReturnsCreateResolutionResponse } from '../declarations/ReturnsCreateResolutionResponse.js';
import type { ReturnsCreateResponse } from '../declarations/ReturnsCreateResponse.js';
import type { ReturnsDecideInput } from '../declarations/ReturnsDecideInput.js';
import type { ReturnsDecideResponse } from '../declarations/ReturnsDecideResponse.js';
import type { ReturnsDeleteLineItemInput } from '../declarations/ReturnsDeleteLineItemInput.js';
import type { ReturnsDeleteLineItemResponse } from '../declarations/ReturnsDeleteLineItemResponse.js';
import type { ReturnsGetInput } from '../declarations/ReturnsGetInput.js';
import type { ReturnsGetLineItemInput } from '../declarations/ReturnsGetLineItemInput.js';
import type { ReturnsGetLineItemResponse } from '../declarations/ReturnsGetLineItemResponse.js';
import type { ReturnsGetResponse } from '../declarations/ReturnsGetResponse.js';
import type { ReturnsListInput } from '../declarations/ReturnsListInput.js';
import type { ReturnsListLineItemsInput } from '../declarations/ReturnsListLineItemsInput.js';
import type { ReturnsListLineItemsResponse } from '../declarations/ReturnsListLineItemsResponse.js';
import type { ReturnsListResponse } from '../declarations/ReturnsListResponse.js';
import type { ReturnsProcessExistingInput } from '../declarations/ReturnsProcessExistingInput.js';
import type { ReturnsProcessExistingResponse } from '../declarations/ReturnsProcessExistingResponse.js';
import type { ReturnsReopenInput } from '../declarations/ReturnsReopenInput.js';
import type { ReturnsReopenResponse } from '../declarations/ReturnsReopenResponse.js';
import type { ReturnsUpdateInput } from '../declarations/ReturnsUpdateInput.js';
import type { ReturnsUpdateLineItemInput } from '../declarations/ReturnsUpdateLineItemInput.js';
import type { ReturnsUpdateLineItemResponse } from '../declarations/ReturnsUpdateLineItemResponse.js';
import type { ReturnsUpdateResponse } from '../declarations/ReturnsUpdateResponse.js';
import type { ReturnsWaiveLineInspectionInput } from '../declarations/ReturnsWaiveLineInspectionInput.js';
import type { ReturnsWaiveLineInspectionResponse } from '../declarations/ReturnsWaiveLineInspectionResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReturnsResource {
    /**
 * Add a line item to a requested Return. The response is the updated Return, not the new line.
 * POST /v1/returns/{return_id}/line-items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.addLineItem("example", {line_item: {order_line_item_id: "example", requested_quantity: "100", return_reason_id: "example"}}, { idempotencyKey: idempotencyKey })
 */
    addLineItem(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "line_item": ReturnLineItemRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    addLineItemWithResponse(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "line_item": ReturnLineItemRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsAddLineItemResponse>>;
    /**
 * Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.
 * POST /v1/returns/{return_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.cancel("example", {reason: "buyer_request"}, { idempotencyKey: idempotencyKey })
 */
    cancel(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelWithResponse(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsCancelResponse>>;
    /**
 * Cancel approved quantity on a Return line item. Quantity already received, inspected, dispositioned, or reserved by a resolution cannot be canceled, and the conflict response names what is blocking it.
 * POST /v1/returns/{return_id}/line-items/{return_line_item_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.cancelLineItem("example", "example", {handback_quantity: "100", quantity: "100", reason: "buyer_request"}, { idempotencyKey: idempotencyKey })
 */
    cancelLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "handback_quantity": string; "quantity": string; "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelLineItemWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "handback_quantity": string; "quantity": string; "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsCancelLineItemResponse>>;
    /**
 * Complete a Return whose completion_mode is manual. The call fails while completion_blockers is non-empty. Automatic Returns complete themselves when the final blocker clears.
 * POST /v1/returns/{return_id}/complete
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.complete("example", {}, { idempotencyKey: idempotencyKey })
 */
    complete(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason"?: "manual_completion" | "exception_waived" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    completeWithResponse(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason"?: "manual_completion" | "exception_waived" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsCompleteResponse>>;
    /**
 * Create a requested Return. When no policy matches, the Return remains available for merchant review rather than failing creation.
 * POST /v1/returns
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.create({line_items: [{order_line_item_id: "example", requested_quantity: "100", return_reason_id: "example"}], order_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "external_reference_id"?: string; "line_items": Array<ReturnLineItemRequestInput>; "metadata"?: Record<string, string>; "order_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "external_reference_id"?: string; "line_items": Array<ReturnLineItemRequestInput>; "metadata"?: Record<string, string>; "order_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsCreateResponse>>;
    /**
 * Creates the link Flint's email about a Return carries, to put in buyer email or messages you send yourself. It opens the Return and its order in your Flint-hosted customer account without a sign-in. Withdrawing the Return needs the buyer to sign in. It works for 30 days or 10 opens, whichever comes first; after that the buyer signs in to see the Return. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED, and for a Return whose order has no customer, ACCESS_LINK_CUSTOMER_REQUIRED. Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.
 * POST /v1/returns/{return_id}/access-links
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createAccessLink(return_id: InputValue<string>, params?: (InputValue<{  }> | {  }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AccessLinkResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createAccessLinkWithResponse(return_id: InputValue<string>, params?: (InputValue<{  }> | {  }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsCreateAccessLinkResponse>>;
    /**
 * Record an auditable merchandise disposition from either a receipt line or an inspection line.
 * POST /v1/returns/{return_id}/dispositions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createDisposition("example", {disposition_type: "sellable", occurred_at: "2026-01-01T00:00:00Z", quantity: "100", reason: "inspection_result", return_receipt_line_item_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    createDisposition(return_id: InputValue<string>, params: (InputValue<({ "disposition_type": "sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost"; "external_reference_id"?: string; "inventory_location_id"?: string; "metadata"?: Record<string, string>; "occurred_at": string | globalThis.Date; "quantity": string; "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other"; "reason_message"?: string; "replaces_return_disposition_id"?: string; "return_inspection_line_item_id"?: string; "return_receipt_line_item_id"?: string; }) & ((({ "return_receipt_line_item_id": unknown; }) & ({ "return_inspection_line_item_id"?: never })) | (({ "return_inspection_line_item_id": unknown; }) & ({ "return_receipt_line_item_id"?: never })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelReturnDispositionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createDispositionWithResponse(return_id: InputValue<string>, params: (InputValue<({ "disposition_type": "sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost"; "external_reference_id"?: string; "inventory_location_id"?: string; "metadata"?: Record<string, string>; "occurred_at": string | globalThis.Date; "quantity": string; "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other"; "reason_message"?: string; "replaces_return_disposition_id"?: string; "return_inspection_line_item_id"?: string; "return_receipt_line_item_id"?: string; }) & ((({ "return_receipt_line_item_id": unknown; }) & ({ "return_inspection_line_item_id"?: never })) | (({ "return_inspection_line_item_id": unknown; }) & ({ "return_receipt_line_item_id"?: never })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsCreateDispositionResponse>>;
    /**
 * Record an immutable inspection observation. Corrections supersede an earlier inspection instead of editing physical history.
 * POST /v1/returns/{return_id}/inspections
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createInspection("example", {inspected_at: "2026-01-01T00:00:00Z", line_items: [{acceptance_status: "accepted", condition: "new", quantity: "100", return_receipt_line_item_id: "example"}], location_id: "example", return_receipt_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    createInspection(return_id: InputValue<string>, params: (InputValue<{ "correction_reason"?: "entry_error" | "duplicate_observation" | "source_correction" | "reconciliation_correction" | "other"; "correction_reason_message"?: string; "external_actor_id"?: string; "external_reference_id"?: string; "inspected_at": string | globalThis.Date; "line_items": Array<ReturnInspectionLineItemRequestInput>; "location_id": string; "return_receipt_id": string; "source_system"?: ReturnSourceSystemInput; "supersedes_return_inspection_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnInspectionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createInspectionWithResponse(return_id: InputValue<string>, params: (InputValue<{ "correction_reason"?: "entry_error" | "duplicate_observation" | "source_correction" | "reconciliation_correction" | "other"; "correction_reason_message"?: string; "external_actor_id"?: string; "external_reference_id"?: string; "inspected_at": string | globalThis.Date; "line_items": Array<ReturnInspectionLineItemRequestInput>; "location_id": string; "return_receipt_id": string; "source_system"?: ReturnSourceSystemInput; "supersedes_return_inspection_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsCreateInspectionResponse>>;
    /**
 * Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt instead of editing physical history.
 * POST /v1/returns/{return_id}/receipts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createReceipt("example", {line_items: [{quantity: "100", return_line_item_id: "example"}], received_at: "2026-01-01T00:00:00Z", receiving_location_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    createReceipt(return_id: InputValue<string>, params: (InputValue<{ "correction_reason"?: "entry_error" | "duplicate_observation" | "source_correction" | "reconciliation_correction" | "other"; "correction_reason_message"?: string; "external_actor_id"?: string; "external_reference_id"?: string; "line_items": Array<ReturnReceiptLineItemRequestInput>; "received_at": string | globalThis.Date; "receiving_location_id": string; "shipment_id"?: string; "source_system"?: ReturnSourceSystemInput; "supersedes_return_receipt_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnReceiptResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createReceiptWithResponse(return_id: InputValue<string>, params: (InputValue<{ "correction_reason"?: "entry_error" | "duplicate_observation" | "source_correction" | "reconciliation_correction" | "other"; "correction_reason_message"?: string; "external_actor_id"?: string; "external_reference_id"?: string; "line_items": Array<ReturnReceiptLineItemRequestInput>; "received_at": string | globalThis.Date; "receiving_location_id": string; "shipment_id"?: string; "source_system"?: ReturnSourceSystemInput; "supersedes_return_receipt_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsCreateReceiptResponse>>;
    /**
 * Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value. Confirmation is what freezes it and starts its effects.
 * POST /v1/returns/{return_id}/resolutions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createResolution("example", {line_items: [{quantity: "1", return_line_item_id: "rtli_example"}], resolution_type: "refund"}, { idempotencyKey: idempotencyKey })
 */
    createResolution(return_id: InputValue<string>, params: (InputValue<({ "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>; "corrects_return_resolution_id"?: string; "expected_version"?: string; "external_reference_id"?: string; "line_items"?: Array<ReturnResolutionLineItemRequestInput>; "metadata"?: Record<string, string>; "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price"; "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>; "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "correction"; }) & ((({ "line_items": unknown; "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action"; }) & ({ "corrects_return_resolution_id"?: never })) | (({ "adjustments": unknown; "resolution_type"?: "correction"; "corrects_return_resolution_id": unknown; }) & (({ "line_items"?: never }) & ({ "replacement_line_items"?: never }) & ({ "pricing_basis"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelReturnResolutionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createResolutionWithResponse(return_id: InputValue<string>, params: (InputValue<({ "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>; "corrects_return_resolution_id"?: string; "expected_version"?: string; "external_reference_id"?: string; "line_items"?: Array<ReturnResolutionLineItemRequestInput>; "metadata"?: Record<string, string>; "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price"; "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>; "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "correction"; }) & ((({ "line_items": unknown; "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action"; }) & ({ "corrects_return_resolution_id"?: never })) | (({ "adjustments": unknown; "resolution_type"?: "correction"; "corrects_return_resolution_id": unknown; }) & (({ "line_items"?: never }) & ({ "replacement_line_items"?: never }) & ({ "pricing_basis"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsCreateResolutionResponse>>;
    /**
 * Record per-line Return decisions atomically. Each line selects policy_evaluation or explicit decision semantics.
 * POST /v1/returns/{return_id}/decide
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.decide("example", {line_items: [{approved_quantity: "0", decision_basis: "policy_evaluation", return_line_item_id: "example"}]}, { idempotencyKey: idempotencyKey })
 */
    decide(return_id: InputValue<string>, params: (InputValue<{ "completion_mode"?: "manual" | "automatic"; "expected_version"?: string; "line_items": Array<ReturnLineDecisionInput>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    decideWithResponse(return_id: InputValue<string>, params: (InputValue<{ "completion_mode"?: "manual" | "automatic"; "expected_version"?: string; "line_items": Array<ReturnLineDecisionInput>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsDecideResponse>>;
    /**
 * Remove a line item from a requested Return. The response is the updated Return.
 * DELETE /v1/returns/{return_id}/line-items/{return_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.deleteLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteLineItemWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsDeleteLineItemResponse>>;
    /**
 * Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, the customer, and each line item's reason and fulfillment.
 * GET /v1/returns/{return_id}
 * @example
 * client.returns.get("example")
 */
    get(return_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer" | "line_items.fulfillment" | "line_items.return_reason" | "order">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(return_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer" | "line_items.fulfillment" | "line_items.return_reason" | "order">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnsGetResponse>>;
    /**
 * Retrieve one Return line item, including its quantity counters and the reason the buyer selected.
 * GET /v1/returns/{return_id}/line-items/{return_line_item_id}
 * @example
 * client.returns.getLineItem("example", "example")
 */
    getLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<GetReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getLineItemWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnsGetLineItemResponse>>;
    /**
 * List the line items on a Return with their quantity counters, eligibility, frozen display identity, and return value.
 * GET /v1/returns/{return_id}/line-items
 * @example
 * client.returns.listLineItems("example")
 */
    listLineItems(return_id: InputValue<string>, params?: { "fulfillment_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_line_item_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnLineItemsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listLineItemsWithResponse(return_id: InputValue<string>, params?: { "fulfillment_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_line_item_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnsListLineItemsResponse>>;
    listLineItemsPages(return_id: InputValue<string>, params?: { "fulfillment_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_line_item_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnLineItemsResponse>;
    listLineItemsPagesWithResponse(return_id: InputValue<string>, params?: { "fulfillment_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_line_item_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReturnsListLineItemsResponse>>;
    listLineItemsItems(return_id: InputValue<string>, params?: { "fulfillment_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_line_item_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnLineItem>;
    /**
 * List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived.
 * GET /v1/returns
 * @example
 * client.returns.list()
 */
    list(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "customer_id"?: InputValue<string>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "customer_id"?: InputValue<string>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnsListResponse>>;
    listPages(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "customer_id"?: InputValue<string>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnsResponse>;
    listPagesWithResponse(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "customer_id"?: InputValue<string>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReturnsListResponse>>;
    listItems(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "customer_id"?: InputValue<string>; "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>; "external_reference_id"?: InputValue<string>; "merchandise_status"?: InputValue<Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>; "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">>; "return_number"?: InputValue<string>; "return_reason_id"?: InputValue<string>; "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnResource>;
    /**
 * Record decisions, receipts, inspections, dispositions, and resolutions for an existing requested or open Return in one request. Refunds, payments, replacement orders, and inventory updates complete asynchronously. expected_version is optional and checked only when sent. If the Return has changed since that version, the request fails with RETURN_VERSION_CONFLICT. Requires Idempotency-Key and all three scopes: commerce.returns.write, commerce.returns.operations.write, and commerce.returns.resolutions.write.
 * POST /v1/returns/{return_id}/process
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.processExisting("example", {line_items: [{return_line_item_id: "example"}]}, { idempotencyKey: idempotencyKey })
 */
    processExisting(return_id: InputValue<string>, params: (InputValue<{ "completion_behavior"?: "complete_when_ready" | "leave_open"; "expected_version"?: string; "line_items": Array<ProcessExistingReturnLineItemRequestInput>; "receipt"?: ReturnProcessReceiptRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<ProcessExistingReturnResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    processExistingWithResponse(return_id: InputValue<string>, params: (InputValue<{ "completion_behavior"?: "complete_when_ready" | "leave_open"; "expected_version"?: string; "line_items": Array<ProcessExistingReturnLineItemRequestInput>; "receipt"?: ReturnProcessReceiptRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsProcessExistingResponse>>;
    /**
 * Reopen a completed Return to record late compensating facts. Confirmed money movements are never edited backward, so a monetary fix is a new correction resolution.
 * POST /v1/returns/{return_id}/reopen
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.reopen("example", {reason: "linked_effect_changed"}, { idempotencyKey: idempotencyKey })
 */
    reopen(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "linked_effect_changed" | "correction_required" | "additional_merchandise_received" | "merchant_request" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    reopenWithResponse(return_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "linked_effect_changed" | "correction_required" | "additional_merchandise_received" | "merchant_request" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsReopenResponse>>;
    /**
 * Update caller-owned fields on a Return. Only external_reference_id and metadata are writable; every other change goes through a decision, operation, or resolution command.
 * PATCH /v1/returns/{return_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(return_id: InputValue<string>, params: (InputValue<{ "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(return_id: InputValue<string>, params: (InputValue<{ "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsUpdateResponse>>;
    /**
 * Update a requested Return line item. Send null to clear buyer_note or requested_resolution_type. The response is the updated Return.
 * PATCH /v1/returns/{return_id}/line-items/{return_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.updateLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<{ "buyer_note"?: string | null; "expected_version"?: string; "requested_quantity"?: string; "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null; "return_reason_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateLineItemWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<{ "buyer_note"?: string | null; "expected_version"?: string; "requested_quantity"?: string; "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null; "return_reason_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsUpdateLineItemResponse>>;
    /**
 * Waive the inspection requirement on a Return line item so received quantity can be dispositioned and resolved without an inspection observation.
 * POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.waiveLineInspection("example", "example", {reason: "policy_override"}, { idempotencyKey: idempotencyKey })
 */
    waiveLineInspection(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AddReturnLineItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    waiveLineInspectionWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnsWaiveLineInspectionResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly returns: ReturnsResource;
}
export type { ReturnLineItemRequestInput } from '../declarations/ReturnLineItemRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { AddReturnLineItemResponse } from '../declarations/AddReturnLineItemResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReturnsAddLineItemResponse } from '../declarations/ReturnsAddLineItemResponse.js';
export type { ReturnsCancelResponse } from '../declarations/ReturnsCancelResponse.js';
export type { ReturnsCancelLineItemResponse } from '../declarations/ReturnsCancelLineItemResponse.js';
export type { ReturnsCompleteResponse } from '../declarations/ReturnsCompleteResponse.js';
export type { ReturnsCreateResponse } from '../declarations/ReturnsCreateResponse.js';
export type { AccessLinkResponse } from '../declarations/AccessLinkResponse.js';
export type { ReturnsCreateAccessLinkResponse } from '../declarations/ReturnsCreateAccessLinkResponse.js';
export type { CancelReturnDispositionResponse } from '../declarations/CancelReturnDispositionResponse.js';
export type { ReturnsCreateDispositionResponse } from '../declarations/ReturnsCreateDispositionResponse.js';
export type { ReturnInspectionLineItemRequestInput } from '../declarations/ReturnInspectionLineItemRequestInput.js';
export type { ReturnSourceSystemInput } from '../declarations/ReturnSourceSystemInput.js';
export type { CreateReturnInspectionResponse } from '../declarations/CreateReturnInspectionResponse.js';
export type { ReturnsCreateInspectionResponse } from '../declarations/ReturnsCreateInspectionResponse.js';
export type { ReturnReceiptLineItemRequestInput } from '../declarations/ReturnReceiptLineItemRequestInput.js';
export type { CreateReturnReceiptResponse } from '../declarations/CreateReturnReceiptResponse.js';
export type { ReturnsCreateReceiptResponse } from '../declarations/ReturnsCreateReceiptResponse.js';
export type { ReturnResolutionAdjustmentRequestInput } from '../declarations/ReturnResolutionAdjustmentRequestInput.js';
export type { ReturnResolutionLineItemRequestInput } from '../declarations/ReturnResolutionLineItemRequestInput.js';
export type { ReturnReplacementLineItemRequestInput } from '../declarations/ReturnReplacementLineItemRequestInput.js';
export type { CancelReturnResolutionResponse } from '../declarations/CancelReturnResolutionResponse.js';
export type { ReturnsCreateResolutionResponse } from '../declarations/ReturnsCreateResolutionResponse.js';
export type { ReturnLineDecisionInput } from '../declarations/ReturnLineDecisionInput.js';
export type { ReturnsDecideResponse } from '../declarations/ReturnsDecideResponse.js';
export type { ReturnsDeleteLineItemResponse } from '../declarations/ReturnsDeleteLineItemResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ReturnsGetResponse } from '../declarations/ReturnsGetResponse.js';
export type { GetReturnLineItemResponse } from '../declarations/GetReturnLineItemResponse.js';
export type { ReturnsGetLineItemResponse } from '../declarations/ReturnsGetLineItemResponse.js';
export type { ListReturnLineItemsResponse } from '../declarations/ListReturnLineItemsResponse.js';
export type { ReturnsListLineItemsResponse } from '../declarations/ReturnsListLineItemsResponse.js';
export type { ReturnLineItem } from '../declarations/ReturnLineItem.js';
export type { ListReturnsResponse } from '../declarations/ListReturnsResponse.js';
export type { ReturnsListResponse } from '../declarations/ReturnsListResponse.js';
export type { ReturnResource } from '../declarations/ReturnResource.js';
export type { ProcessExistingReturnLineItemRequestInput } from '../declarations/ProcessExistingReturnLineItemRequestInput.js';
export type { ReturnProcessReceiptRequestInput } from '../declarations/ReturnProcessReceiptRequestInput.js';
export type { ProcessExistingReturnResponse } from '../declarations/ProcessExistingReturnResponse.js';
export type { ReturnsProcessExistingResponse } from '../declarations/ReturnsProcessExistingResponse.js';
export type { ReturnsReopenResponse } from '../declarations/ReturnsReopenResponse.js';
export type { ReturnsUpdateResponse } from '../declarations/ReturnsUpdateResponse.js';
export type { ReturnsUpdateLineItemResponse } from '../declarations/ReturnsUpdateLineItemResponse.js';
export type { ReturnsWaiveLineInspectionResponse } from '../declarations/ReturnsWaiveLineInspectionResponse.js';
export type { ReturnsAddLineItemInput } from '../declarations/ReturnsAddLineItemInput.js';
export type { ReturnsCancelInput } from '../declarations/ReturnsCancelInput.js';
export type { ReturnsCancelLineItemInput } from '../declarations/ReturnsCancelLineItemInput.js';
export type { ReturnsCompleteInput } from '../declarations/ReturnsCompleteInput.js';
export type { ReturnsCreateInput } from '../declarations/ReturnsCreateInput.js';
export type { ReturnsCreateAccessLinkInput } from '../declarations/ReturnsCreateAccessLinkInput.js';
export type { ReturnsCreateDispositionInput } from '../declarations/ReturnsCreateDispositionInput.js';
export type { ReturnsCreateInspectionInput } from '../declarations/ReturnsCreateInspectionInput.js';
export type { ReturnsCreateReceiptInput } from '../declarations/ReturnsCreateReceiptInput.js';
export type { ReturnsCreateResolutionInput } from '../declarations/ReturnsCreateResolutionInput.js';
export type { ReturnsDecideInput } from '../declarations/ReturnsDecideInput.js';
export type { ReturnsDeleteLineItemInput } from '../declarations/ReturnsDeleteLineItemInput.js';
export type { ReturnsGetInput } from '../declarations/ReturnsGetInput.js';
export type { ReturnsGetLineItemInput } from '../declarations/ReturnsGetLineItemInput.js';
export type { ReturnsListLineItemsInput } from '../declarations/ReturnsListLineItemsInput.js';
export type { ReturnsListInput } from '../declarations/ReturnsListInput.js';
export type { ReturnsProcessExistingInput } from '../declarations/ReturnsProcessExistingInput.js';
export type { ReturnsReopenInput } from '../declarations/ReturnsReopenInput.js';
export type { ReturnsUpdateInput } from '../declarations/ReturnsUpdateInput.js';
export type { ReturnsUpdateLineItemInput } from '../declarations/ReturnsUpdateLineItemInput.js';
export type { ReturnsWaiveLineInspectionInput } from '../declarations/ReturnsWaiveLineInspectionInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { AccessLink } from '../declarations/AccessLink.js';
export type { ReturnDisposition } from '../declarations/ReturnDisposition.js';
export type { ReturnActor } from '../declarations/ReturnActor.js';
export type { ReturnInspection } from '../declarations/ReturnInspection.js';
export type { ReturnInspectionLineItem } from '../declarations/ReturnInspectionLineItem.js';
export type { ReturnReceipt } from '../declarations/ReturnReceipt.js';
export type { ReturnReceiptLineItem } from '../declarations/ReturnReceiptLineItem.js';
export type { ReturnUnverifiedItem } from '../declarations/ReturnUnverifiedItem.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { ReturnResolution } from '../declarations/ReturnResolution.js';
export type { ReturnResolutionAdjustment } from '../declarations/ReturnResolutionAdjustment.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { ReturnResolutionExecutionBlocker } from '../declarations/ReturnResolutionExecutionBlocker.js';
export type { ReturnResolutionLineItem } from '../declarations/ReturnResolutionLineItem.js';
export type { ExpandedPaymentIntentSummary } from '../declarations/ExpandedPaymentIntentSummary.js';
export type { PaymentSourceSummary } from '../declarations/PaymentSourceSummary.js';
export type { PaymentSourceAchDebitSummary } from '../declarations/PaymentSourceAchDebitSummary.js';
export type { PaymentSourceCardSummary } from '../declarations/PaymentSourceCardSummary.js';
export type { Refund } from '../declarations/Refund.js';
export type { RefundLineItemAllocation } from '../declarations/RefundLineItemAllocation.js';
export type { RefundLineItemAdjustmentRefund } from '../declarations/RefundLineItemAdjustmentRefund.js';
export type { RefundLineItemAdjustment } from '../declarations/RefundLineItemAdjustment.js';
export type { RefundAdjustmentReason } from '../declarations/RefundAdjustmentReason.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { RefundLineItemModifierAllocation } from '../declarations/RefundLineItemModifierAllocation.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { RefundTaxBreakdownRefund } from '../declarations/RefundTaxBreakdownRefund.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { PaymentRefund } from '../declarations/PaymentRefund.js';
export type { RefundTenderAllocation } from '../declarations/RefundTenderAllocation.js';
export type { RefundGiftCardDestination } from '../declarations/RefundGiftCardDestination.js';
export type { RefundUnissuedGiftCardRecovery } from '../declarations/RefundUnissuedGiftCardRecovery.js';
export type { ReturnReplacementLineItem } from '../declarations/ReturnReplacementLineItem.js';
export type { BundleComponent } from '../declarations/BundleComponent.js';
export type { ReturnLineItemEligibility } from '../declarations/ReturnLineItemEligibility.js';
export type { ReturnLineItemDecisionProposal } from '../declarations/ReturnLineItemDecisionProposal.js';
export type { ReturnPolicyAdjustmentProposal } from '../declarations/ReturnPolicyAdjustmentProposal.js';
export type { FulfillmentChargeLink } from '../declarations/FulfillmentChargeLink.js';
export type { DigitalFulfillmentDetails } from '../declarations/DigitalFulfillmentDetails.js';
export type { FulfillmentLineItem } from '../declarations/FulfillmentLineItem.js';
export type { OrderLineItemModifier } from '../declarations/OrderLineItemModifier.js';
export type { TextModifierRequest } from '../declarations/TextModifierRequest.js';
export type { DeliveryFulfillmentDetails } from '../declarations/DeliveryFulfillmentDetails.js';
export type { ExpandedPackageSummary } from '../declarations/ExpandedPackageSummary.js';
export type { PickupFulfillmentDetails } from '../declarations/PickupFulfillmentDetails.js';
export type { FulfillmentRecipient } from '../declarations/FulfillmentRecipient.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { ServiceFulfillmentDetails } from '../declarations/ServiceFulfillmentDetails.js';
export type { ExpandedShipmentSummary } from '../declarations/ExpandedShipmentSummary.js';
export type { Image } from '../declarations/Image.js';
export type { ReturnLineItemValue } from '../declarations/ReturnLineItemValue.js';
export type { BuyerAction } from '../declarations/BuyerAction.js';
export type { ReturnCompletionBlocker } from '../declarations/ReturnCompletionBlocker.js';
export type { ReturnFinancialSummary } from '../declarations/ReturnFinancialSummary.js';
export type { ReturnHandoffRequirement } from '../declarations/ReturnHandoffRequirement.js';
export type { ReturnHandoffDestination } from '../declarations/ReturnHandoffDestination.js';
export type { ReturnShipmentLineItemAllocation } from '../declarations/ReturnShipmentLineItemAllocation.js';
export type { ReturnPolicyEvaluation } from '../declarations/ReturnPolicyEvaluation.js';
export type { ReturnPolicyEvaluationLineItem } from '../declarations/ReturnPolicyEvaluationLineItem.js';
export type { ReturnProcessDecisionInput } from '../declarations/ReturnProcessDecisionInput.js';
export type { ReturnProcessDispositionRequestInput } from '../declarations/ReturnProcessDispositionRequestInput.js';
export type { ReturnProcessInspectionRequestInput } from '../declarations/ReturnProcessInspectionRequestInput.js';
export type { ReturnProcessResolutionRequestInput } from '../declarations/ReturnProcessResolutionRequestInput.js';
export type { ReturnProcessResult } from '../declarations/ReturnProcessResult.js';
export type { AddReturnLineItemRequestInput } from '../declarations/AddReturnLineItemRequestInput.js';
export type { CancelReturnRequestInput } from '../declarations/CancelReturnRequestInput.js';
export type { CancelReturnLineItemRequestInput } from '../declarations/CancelReturnLineItemRequestInput.js';
export type { CompleteReturnRequestInput } from '../declarations/CompleteReturnRequestInput.js';
export type { CreateReturnRequestInput } from '../declarations/CreateReturnRequestInput.js';
export type { CreateReturnDispositionRequestInput } from '../declarations/CreateReturnDispositionRequestInput.js';
export type { CreateReturnInspectionRequestInput } from '../declarations/CreateReturnInspectionRequestInput.js';
export type { CreateReturnReceiptRequestInput } from '../declarations/CreateReturnReceiptRequestInput.js';
export type { CreateReturnResolutionRequestInput } from '../declarations/CreateReturnResolutionRequestInput.js';
export type { DecideReturnRequestInput } from '../declarations/DecideReturnRequestInput.js';
export type { ProcessExistingReturnRequestInput } from '../declarations/ProcessExistingReturnRequestInput.js';
export type { ReopenReturnRequestInput } from '../declarations/ReopenReturnRequestInput.js';
export type { UpdateReturnRequestInput } from '../declarations/UpdateReturnRequestInput.js';
export type { UpdateReturnLineItemRequestInput } from '../declarations/UpdateReturnLineItemRequestInput.js';
export type { WaiveReturnLineInspectionRequestInput } from '../declarations/WaiveReturnLineInspectionRequestInput.js';
export { makeAddReturnLineItemResponse } from '../declarations/makeAddReturnLineItemResponse.js';
export { makeAccessLinkResponse } from '../declarations/makeAccessLinkResponse.js';
export { makeCancelReturnDispositionResponse } from '../declarations/makeCancelReturnDispositionResponse.js';
export { makeCreateReturnInspectionResponse } from '../declarations/makeCreateReturnInspectionResponse.js';
export { makeCreateReturnReceiptResponse } from '../declarations/makeCreateReturnReceiptResponse.js';
export { makeCancelReturnResolutionResponse } from '../declarations/makeCancelReturnResolutionResponse.js';
export { makeGetReturnLineItemResponse } from '../declarations/makeGetReturnLineItemResponse.js';
export { makeListReturnLineItemsResponse } from '../declarations/makeListReturnLineItemsResponse.js';
export { makeReturnLineItem } from '../declarations/makeReturnLineItem.js';
export { makeListReturnsResponse } from '../declarations/makeListReturnsResponse.js';
export { makeReturnResource } from '../declarations/makeReturnResource.js';
export { makeProcessExistingReturnResponse } from '../declarations/makeProcessExistingReturnResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeAccessLink } from '../declarations/makeAccessLink.js';
export { makeReturnDisposition } from '../declarations/makeReturnDisposition.js';
export { makeReturnActor } from '../declarations/makeReturnActor.js';
export { makeReturnInspection } from '../declarations/makeReturnInspection.js';
export { makeReturnInspectionLineItem } from '../declarations/makeReturnInspectionLineItem.js';
export { makeReturnReceipt } from '../declarations/makeReturnReceipt.js';
export { makeReturnReceiptLineItem } from '../declarations/makeReturnReceiptLineItem.js';
export { makeReturnUnverifiedItem } from '../declarations/makeReturnUnverifiedItem.js';
export { makeReturnResolution } from '../declarations/makeReturnResolution.js';
export { makeReturnResolutionAdjustment } from '../declarations/makeReturnResolutionAdjustment.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeReturnResolutionExecutionBlocker } from '../declarations/makeReturnResolutionExecutionBlocker.js';
export { makeReturnResolutionLineItem } from '../declarations/makeReturnResolutionLineItem.js';
export { makeExpandedPaymentIntentSummary } from '../declarations/makeExpandedPaymentIntentSummary.js';
export { makePaymentSourceSummary } from '../declarations/makePaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../declarations/makePaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../declarations/makePaymentSourceCardSummary.js';
export { makeRefund } from '../declarations/makeRefund.js';
export { makeRefundLineItemAllocation } from '../declarations/makeRefundLineItemAllocation.js';
export { makeRefundLineItemAdjustmentRefund } from '../declarations/makeRefundLineItemAdjustmentRefund.js';
export { makeRefundLineItemAdjustment } from '../declarations/makeRefundLineItemAdjustment.js';
export { makeRefundAdjustmentReason } from '../declarations/makeRefundAdjustmentReason.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeRefundLineItemModifierAllocation } from '../declarations/makeRefundLineItemModifierAllocation.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeRefundTaxBreakdownRefund } from '../declarations/makeRefundTaxBreakdownRefund.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makePaymentRefund } from '../declarations/makePaymentRefund.js';
export { makeRefundTenderAllocation } from '../declarations/makeRefundTenderAllocation.js';
export { makeRefundGiftCardDestination } from '../declarations/makeRefundGiftCardDestination.js';
export { makeRefundUnissuedGiftCardRecovery } from '../declarations/makeRefundUnissuedGiftCardRecovery.js';
export { makeReturnReplacementLineItem } from '../declarations/makeReturnReplacementLineItem.js';
export { makeBundleComponent } from '../declarations/makeBundleComponent.js';
export { makeReturnLineItemEligibility } from '../declarations/makeReturnLineItemEligibility.js';
export { makeReturnLineItemDecisionProposal } from '../declarations/makeReturnLineItemDecisionProposal.js';
export { makeReturnPolicyAdjustmentProposal } from '../declarations/makeReturnPolicyAdjustmentProposal.js';
export { makeFulfillmentChargeLink } from '../declarations/makeFulfillmentChargeLink.js';
export { makeDigitalFulfillmentDetails } from '../declarations/makeDigitalFulfillmentDetails.js';
export { makeFulfillmentLineItem } from '../declarations/makeFulfillmentLineItem.js';
export { makeOrderLineItemModifier } from '../declarations/makeOrderLineItemModifier.js';
export { makeTextModifierRequest } from '../declarations/makeTextModifierRequest.js';
export { makeDeliveryFulfillmentDetails } from '../declarations/makeDeliveryFulfillmentDetails.js';
export { makeExpandedPackageSummary } from '../declarations/makeExpandedPackageSummary.js';
export { makePickupFulfillmentDetails } from '../declarations/makePickupFulfillmentDetails.js';
export { makeFulfillmentRecipient } from '../declarations/makeFulfillmentRecipient.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeServiceFulfillmentDetails } from '../declarations/makeServiceFulfillmentDetails.js';
export { makeExpandedShipmentSummary } from '../declarations/makeExpandedShipmentSummary.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeReturnLineItemValue } from '../declarations/makeReturnLineItemValue.js';
export { makeBuyerAction } from '../declarations/makeBuyerAction.js';
export { makeReturnCompletionBlocker } from '../declarations/makeReturnCompletionBlocker.js';
export { makeReturnFinancialSummary } from '../declarations/makeReturnFinancialSummary.js';
export { makeReturnHandoffRequirement } from '../declarations/makeReturnHandoffRequirement.js';
export { makeReturnHandoffDestination } from '../declarations/makeReturnHandoffDestination.js';
export { makeReturnShipmentLineItemAllocation } from '../declarations/makeReturnShipmentLineItemAllocation.js';
export { makeReturnPolicyEvaluation } from '../declarations/makeReturnPolicyEvaluation.js';
export { makeReturnPolicyEvaluationLineItem } from '../declarations/makeReturnPolicyEvaluationLineItem.js';
export { makeReturnProcessResult } from '../declarations/makeReturnProcessResult.js';
