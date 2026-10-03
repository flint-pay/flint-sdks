export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InventoryTransfer } from '../declarations/InventoryTransfer.js';
import type { InventoryTransferLineRequestInput } from '../declarations/InventoryTransferLineRequestInput.js';
import type { InventoryTransferListResponse } from '../declarations/InventoryTransferListResponse.js';
import type { InventoryTransferResponse } from '../declarations/InventoryTransferResponse.js';
import type { InventoryTransferResultResponse } from '../declarations/InventoryTransferResultResponse.js';
import type { InventoryTransfersCreateInput } from '../declarations/InventoryTransfersCreateInput.js';
import type { InventoryTransfersCreateResponse } from '../declarations/InventoryTransfersCreateResponse.js';
import type { InventoryTransfersListInput } from '../declarations/InventoryTransfersListInput.js';
import type { InventoryTransfersListResponse } from '../declarations/InventoryTransfersListResponse.js';
import type { InventoryTransfersTransitionInput } from '../declarations/InventoryTransfersTransitionInput.js';
import type { InventoryTransfersTransitionResponse } from '../declarations/InventoryTransfersTransitionResponse.js';
import type { InventoryTransfersUpdateInput } from '../declarations/InventoryTransfersUpdateInput.js';
import type { InventoryTransfersUpdateResponse } from '../declarations/InventoryTransfersUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InventoryTransfersResource {
    /**
 * Create a planned stock transfer between two Locations.
 * POST /v1/inventory-transfers
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.create({destination_location_id: "example", lines: [{inventory_item_id: "example", requested_quantity: "1"}], origin_location_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "destination_location_id": string; "external_reference"?: string; "lines": Array<InventoryTransferLineRequestInput>; "note"?: string; "origin_location_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryTransferResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "destination_location_id": string; "external_reference"?: string; "lines": Array<InventoryTransferLineRequestInput>; "note"?: string; "origin_location_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryTransfersCreateResponse>>;
    /**
 * List inventory transfers.
 * GET /v1/inventory-transfers
 * @example
 * client.inventoryTransfers.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "origin_location_id"?: InputValue<string>; "destination_location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "in_transit" | "partially_resolved" | "closed">; "idempotency_key"?: InputValue<string>; "external_reference"?: InputValue<string>; "query"?: InputValue<string>; "closed_reason"?: InputValue<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "departed_after"?: InputValue<string | globalThis.Date>; "departed_before"?: InputValue<string | globalThis.Date>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryTransferListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "origin_location_id"?: InputValue<string>; "destination_location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "in_transit" | "partially_resolved" | "closed">; "idempotency_key"?: InputValue<string>; "external_reference"?: InputValue<string>; "query"?: InputValue<string>; "closed_reason"?: InputValue<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "departed_after"?: InputValue<string | globalThis.Date>; "departed_before"?: InputValue<string | globalThis.Date>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryTransfersListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "origin_location_id"?: InputValue<string>; "destination_location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "in_transit" | "partially_resolved" | "closed">; "idempotency_key"?: InputValue<string>; "external_reference"?: InputValue<string>; "query"?: InputValue<string>; "closed_reason"?: InputValue<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "departed_after"?: InputValue<string | globalThis.Date>; "departed_before"?: InputValue<string | globalThis.Date>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryTransferListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "origin_location_id"?: InputValue<string>; "destination_location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "in_transit" | "partially_resolved" | "closed">; "idempotency_key"?: InputValue<string>; "external_reference"?: InputValue<string>; "query"?: InputValue<string>; "closed_reason"?: InputValue<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "departed_after"?: InputValue<string | globalThis.Date>; "departed_before"?: InputValue<string | globalThis.Date>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryTransfersListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "origin_location_id"?: InputValue<string>; "destination_location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "in_transit" | "partially_resolved" | "closed">; "idempotency_key"?: InputValue<string>; "external_reference"?: InputValue<string>; "query"?: InputValue<string>; "closed_reason"?: InputValue<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "departed_after"?: InputValue<string | globalThis.Date>; "departed_before"?: InputValue<string | globalThis.Date>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryTransfer>;
    /**
 * Run one action from supported_actions using cumulative line targets. Send expected_version to reject the request if the transfer changed after you read it. The response includes the updated transfer and its inventory effects.
 * POST /v1/inventory-transfers/{inventory_transfer_id}/transitions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.transition({inventory_transfer_id: "example", body: {action: "depart", provenance: {}, lines: [{inventory_transfer_line_id: "example", target_departed_quantity: "0"}]}}, { idempotencyKey: idempotencyKey })
 */
    transition(input: InventoryTransfersTransitionInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryTransferResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    transitionWithResponse(input: InventoryTransfersTransitionInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryTransfersTransitionResponse>>;
    /**
 * Update an open transfer's planning details.
 * PATCH /v1/inventory-transfers/{inventory_transfer_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_transfer_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "external_reference"?: string | null; "line_changes"?: Array<(({ "inventory_item_id": string; "operation": "add"; "physical_condition"?: "sellable" | "quality_control" | "damaged" | "quarantined"; "requested_quantity": string; }) | ({ "inventory_transfer_line_id": string; "operation": "update"; "requested_quantity": string; }) | ({ "inventory_transfer_line_id": string; "operation": "remove"; }))>; "note"?: string | null; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryTransferResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(inventory_transfer_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "external_reference"?: string | null; "line_changes"?: Array<(({ "inventory_item_id": string; "operation": "add"; "physical_condition"?: "sellable" | "quality_control" | "damaged" | "quarantined"; "requested_quantity": string; }) | ({ "inventory_transfer_line_id": string; "operation": "update"; "requested_quantity": string; }) | ({ "inventory_transfer_line_id": string; "operation": "remove"; }))>; "note"?: string | null; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryTransfersUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly inventoryTransfers: InventoryTransfersResource;
}
export type { InventoryTransferLineRequestInput } from '../declarations/InventoryTransferLineRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { InventoryTransferResponse } from '../declarations/InventoryTransferResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InventoryTransfersCreateResponse } from '../declarations/InventoryTransfersCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { InventoryTransferListResponse } from '../declarations/InventoryTransferListResponse.js';
export type { InventoryTransfersListResponse } from '../declarations/InventoryTransfersListResponse.js';
export type { InventoryTransfer } from '../declarations/InventoryTransfer.js';
export type { InventoryTransfersTransitionInput } from '../declarations/InventoryTransfersTransitionInput.js';
export type { InventoryTransferResultResponse } from '../declarations/InventoryTransferResultResponse.js';
export type { InventoryTransfersTransitionResponse } from '../declarations/InventoryTransfersTransitionResponse.js';
export type { InventoryTransfersUpdateResponse } from '../declarations/InventoryTransfersUpdateResponse.js';
export type { InventoryTransfersCreateInput } from '../declarations/InventoryTransfersCreateInput.js';
export type { InventoryTransfersListInput } from '../declarations/InventoryTransfersListInput.js';
export type { InventoryTransfersUpdateInput } from '../declarations/InventoryTransfersUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { InventoryTransferLine } from '../declarations/InventoryTransferLine.js';
export type { InventoryTransferTransitionRequestInput } from '../declarations/InventoryTransferTransitionRequestInput.js';
export type { InventoryTransferProvenanceRequestInput } from '../declarations/InventoryTransferProvenanceRequestInput.js';
export type { InventorySourceSystemRequestInput } from '../declarations/InventorySourceSystemRequestInput.js';
export type { InventoryTransferResult } from '../declarations/InventoryTransferResult.js';
export type { InventoryLevel } from '../declarations/InventoryLevel.js';
export type { CreateInventoryTransferRequestInput } from '../declarations/CreateInventoryTransferRequestInput.js';
export type { UpdateInventoryTransferRequestInput } from '../declarations/UpdateInventoryTransferRequestInput.js';
export { makeInventoryTransferResponse } from '../declarations/makeInventoryTransferResponse.js';
export { makeInventoryTransferListResponse } from '../declarations/makeInventoryTransferListResponse.js';
export { makeInventoryTransfer } from '../declarations/makeInventoryTransfer.js';
export { makeInventoryTransferResultResponse } from '../declarations/makeInventoryTransferResultResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeInventoryTransferLine } from '../declarations/makeInventoryTransferLine.js';
export { makeInventoryTransferResult } from '../declarations/makeInventoryTransferResult.js';
export { makeInventoryLevel } from '../declarations/makeInventoryLevel.js';
