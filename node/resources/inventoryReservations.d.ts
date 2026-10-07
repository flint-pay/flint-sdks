export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InventoryAssignmentInput } from '../declarations/InventoryAssignmentInput.js';
import type { InventoryReservation } from '../declarations/InventoryReservation.js';
import type { InventoryReservationListResponse } from '../declarations/InventoryReservationListResponse.js';
import type { InventoryReservationOwnerInput } from '../declarations/InventoryReservationOwnerInput.js';
import type { InventoryReservationProvenanceInput } from '../declarations/InventoryReservationProvenanceInput.js';
import type { InventoryReservationResultResponse } from '../declarations/InventoryReservationResultResponse.js';
import type { InventoryReservationsCommitInput } from '../declarations/InventoryReservationsCommitInput.js';
import type { InventoryReservationsCommitResponse } from '../declarations/InventoryReservationsCommitResponse.js';
import type { InventoryReservationsConsumeInput } from '../declarations/InventoryReservationsConsumeInput.js';
import type { InventoryReservationsConsumeResponse } from '../declarations/InventoryReservationsConsumeResponse.js';
import type { InventoryReservationsCreateInput } from '../declarations/InventoryReservationsCreateInput.js';
import type { InventoryReservationsCreateResponse } from '../declarations/InventoryReservationsCreateResponse.js';
import type { InventoryReservationsListInput } from '../declarations/InventoryReservationsListInput.js';
import type { InventoryReservationsListResponse } from '../declarations/InventoryReservationsListResponse.js';
import type { InventoryReservationsReleaseInput } from '../declarations/InventoryReservationsReleaseInput.js';
import type { InventoryReservationsReleaseResponse } from '../declarations/InventoryReservationsReleaseResponse.js';
import type { InventoryRoutingDemandInput } from '../declarations/InventoryRoutingDemandInput.js';
import type { InventoryRoutingSourceRequestInput } from '../declarations/InventoryRoutingSourceRequestInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InventoryReservationsResource {
    /**
 * Move held quantity to committed. Lines carry cumulative targets, so resending an applied target is a successful no-op.
 * POST /v1/inventory-reservations/{inventory_reservation_id}/commit
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.commit("example", {lines: []}, { idempotencyKey: idempotencyKey })
 */
    commit(inventory_reservation_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "lines": Array<{ "inventory_reservation_line_id": string; "target_committed_quantity": string; }>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryReservationResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    commitWithResponse(inventory_reservation_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "lines": Array<{ "inventory_reservation_line_id": string; "target_committed_quantity": string; }>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryReservationsCommitResponse>>;
    /**
 * Consume committed quantity, permanently removing it from stock. Cumulative targets; consumed quantity is terminal.
 * POST /v1/inventory-reservations/{inventory_reservation_id}/consume
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.consume("example", {lines: [], provenance: {}}, { idempotencyKey: idempotencyKey })
 */
    consume(inventory_reservation_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "lines": Array<{ "inventory_reservation_line_id": string; "target_consumed_quantity": string; }>; "provenance": InventoryReservationProvenanceInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryReservationResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    consumeWithResponse(inventory_reservation_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "lines": Array<{ "inventory_reservation_line_id": string; "target_consumed_quantity": string; }>; "provenance": InventoryReservationProvenanceInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryReservationsConsumeResponse>>;
    /**
 * Route standalone merchant demand and hold stock in one atomic command. A provisional hold lasts at most 15 minutes.
 * POST /v1/inventory-reservations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.create({demands: [], inventory_routing_source: {type: "fixed_location", location_id: "example"}, owner: {expires_at: "2026-01-01T00:00:00Z", key: "example"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "assignments"?: Array<InventoryAssignmentInput>; "demands": Array<InventoryRoutingDemandInput>; "destination_fingerprint"?: string; "inventory_routing_source": InventoryRoutingSourceRequestInput; "owner": InventoryReservationOwnerInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryReservationResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "assignments"?: Array<InventoryAssignmentInput>; "demands": Array<InventoryRoutingDemandInput>; "destination_fingerprint"?: string; "inventory_routing_source": InventoryRoutingSourceRequestInput; "owner": InventoryReservationOwnerInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryReservationsCreateResponse>>;
    /**
 * List inventory reservations.
 * GET /v1/inventory-reservations
 * @example
 * client.inventoryReservations.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "closed">; "owner_type"?: InputValue<"merchant">; "owner_key"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "has_at_risk_quantity"?: InputValue<boolean>; "closed_reason"?: InputValue<"consumed" | "released" | "expired" | "reallocated" | "mixed">; "owner_expires_after"?: InputValue<string | globalThis.Date>; "owner_expires_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryReservationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "closed">; "owner_type"?: InputValue<"merchant">; "owner_key"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "has_at_risk_quantity"?: InputValue<boolean>; "closed_reason"?: InputValue<"consumed" | "released" | "expired" | "reallocated" | "mixed">; "owner_expires_after"?: InputValue<string | globalThis.Date>; "owner_expires_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryReservationsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "closed">; "owner_type"?: InputValue<"merchant">; "owner_key"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "has_at_risk_quantity"?: InputValue<boolean>; "closed_reason"?: InputValue<"consumed" | "released" | "expired" | "reallocated" | "mixed">; "owner_expires_after"?: InputValue<string | globalThis.Date>; "owner_expires_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryReservationListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "closed">; "owner_type"?: InputValue<"merchant">; "owner_key"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "has_at_risk_quantity"?: InputValue<boolean>; "closed_reason"?: InputValue<"consumed" | "released" | "expired" | "reallocated" | "mixed">; "owner_expires_after"?: InputValue<string | globalThis.Date>; "owner_expires_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryReservationsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "closed">; "owner_type"?: InputValue<"merchant">; "owner_key"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "has_at_risk_quantity"?: InputValue<boolean>; "closed_reason"?: InputValue<"consumed" | "released" | "expired" | "reallocated" | "mixed">; "owner_expires_after"?: InputValue<string | globalThis.Date>; "owner_expires_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryReservation>;
    /**
 * Release held or committed quantity back to available. Cumulative targets; released quantity is terminal.
 * POST /v1/inventory-reservations/{inventory_reservation_id}/release
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.release("example", {lines: []}, { idempotencyKey: idempotencyKey })
 */
    release(inventory_reservation_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "lines": Array<{ "inventory_reservation_line_id": string; "target_released_from_committed_quantity"?: string; "target_released_from_held_quantity"?: string; }>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryReservationResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    releaseWithResponse(inventory_reservation_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "lines": Array<{ "inventory_reservation_line_id": string; "target_released_from_committed_quantity"?: string; "target_released_from_held_quantity"?: string; }>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryReservationsReleaseResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly inventoryReservations: InventoryReservationsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { InventoryReservationResultResponse } from '../declarations/InventoryReservationResultResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InventoryReservationsCommitResponse } from '../declarations/InventoryReservationsCommitResponse.js';
export type { InventoryReservationProvenanceInput } from '../declarations/InventoryReservationProvenanceInput.js';
export type { InventoryReservationsConsumeResponse } from '../declarations/InventoryReservationsConsumeResponse.js';
export type { InventoryAssignmentInput } from '../declarations/InventoryAssignmentInput.js';
export type { InventoryRoutingDemandInput } from '../declarations/InventoryRoutingDemandInput.js';
export type { InventoryRoutingSourceRequestInput } from '../declarations/InventoryRoutingSourceRequestInput.js';
export type { InventoryReservationOwnerInput } from '../declarations/InventoryReservationOwnerInput.js';
export type { InventoryReservationsCreateResponse } from '../declarations/InventoryReservationsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { InventoryReservationListResponse } from '../declarations/InventoryReservationListResponse.js';
export type { InventoryReservationsListResponse } from '../declarations/InventoryReservationsListResponse.js';
export type { InventoryReservation } from '../declarations/InventoryReservation.js';
export type { InventoryReservationsReleaseResponse } from '../declarations/InventoryReservationsReleaseResponse.js';
export type { InventoryReservationsCommitInput } from '../declarations/InventoryReservationsCommitInput.js';
export type { InventoryReservationsConsumeInput } from '../declarations/InventoryReservationsConsumeInput.js';
export type { InventoryReservationsCreateInput } from '../declarations/InventoryReservationsCreateInput.js';
export type { InventoryReservationsListInput } from '../declarations/InventoryReservationsListInput.js';
export type { InventoryReservationsReleaseInput } from '../declarations/InventoryReservationsReleaseInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { InventoryReservationResult } from '../declarations/InventoryReservationResult.js';
export type { InventoryLevel } from '../declarations/InventoryLevel.js';
export type { InventoryItem } from '../declarations/InventoryItem.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { InventorySourceSystemRequestInput } from '../declarations/InventorySourceSystemRequestInput.js';
export type { InventoryActionRequired } from '../declarations/InventoryActionRequired.js';
export type { InventoryRoutingSource } from '../declarations/InventoryRoutingSource.js';
export type { ReservationLine } from '../declarations/ReservationLine.js';
export type { InventoryReservationOwner } from '../declarations/InventoryReservationOwner.js';
export type { CommitInventoryReservationRequestInput } from '../declarations/CommitInventoryReservationRequestInput.js';
export type { ConsumeInventoryReservationRequestInput } from '../declarations/ConsumeInventoryReservationRequestInput.js';
export type { CreateInventoryReservationRequestInput } from '../declarations/CreateInventoryReservationRequestInput.js';
export type { ReleaseInventoryReservationRequestInput } from '../declarations/ReleaseInventoryReservationRequestInput.js';
export { makeInventoryReservationResultResponse } from '../declarations/makeInventoryReservationResultResponse.js';
export { makeInventoryReservationListResponse } from '../declarations/makeInventoryReservationListResponse.js';
export { makeInventoryReservation } from '../declarations/makeInventoryReservation.js';
export { makeInventoryReservationResult } from '../declarations/makeInventoryReservationResult.js';
export { makeInventoryLevel } from '../declarations/makeInventoryLevel.js';
export { makeInventoryItem } from '../declarations/makeInventoryItem.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeInventoryActionRequired } from '../declarations/makeInventoryActionRequired.js';
export { makeInventoryRoutingSource } from '../declarations/makeInventoryRoutingSource.js';
export { makeReservationLine } from '../declarations/makeReservationLine.js';
export { makeInventoryReservationOwner } from '../declarations/makeInventoryReservationOwner.js';
