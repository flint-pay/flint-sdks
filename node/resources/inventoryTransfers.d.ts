import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateInventoryTransferRequestInput } from '../declarations/types-7.js';
import type { InventoryTransfer, InventoryTransferListResponse } from '../declarations/types-25.js';
import type {
    InventoryTransferResponse,
    InventoryTransferResult,
    InventoryTransferResultResponse,
    InventoryTransfersCreateInput,
    InventoryTransfersGetInput,
    InventoryTransfersListInput,
    InventoryTransfersTransitionInput,
    InventoryTransfersUpdateInput
} from '../declarations/types-26.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { UpdateInventoryTransferRequestInput } from '../declarations/types-48.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type { CreateInventoryTransferRequestInput } from '../declarations/types-7.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    InventoryTransfer,
    InventoryTransferListResponse,
    InventoryTransferLineRequestInput,
    InventoryTransferLine,
    InventoryProvenanceRequestInput,
    InventorySourceSystemRequestInput
} from '../declarations/types-25.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type {
    InventoryTransferResponse,
    InventoryTransfersTransitionInput,
    InventoryTransferResult,
    InventoryTransferResultResponse,
    InventoryTransfersCreateInput,
    InventoryTransfersGetInput,
    InventoryTransfersListInput,
    InventoryTransfersUpdateInput,
    InventoryTransferTransitionRequestInput,
    InventoryTransferTransitionRequestDepartInput,
    InventoryTransferTransitionRequestReceiveInput,
    InventoryTransferTransitionRequestReturnToOriginInput,
    InventoryTransferTransitionRequestReportLossInput,
    InventoryTransferTransitionRequestCancelInput
} from '../declarations/types-26.js';
export type { UpdateInventoryTransferRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export type { InventoryLevel, InventoryItem } from '../declarations/types-24.js';
export { makeCreateInventoryTransferRequest } from '../declarations/types-63.js';
export {
    makeInventoryProvenanceRequest,
    makeInventorySourceSystemRequest,
    makeInventoryTransferLineRequest,
    makeInventoryTransferTransitionRequest,
    makeInventoryTransferTransitionRequestCancel,
    makeInventoryTransferTransitionRequestDepart,
    makeInventoryTransferTransitionRequestReceive,
    makeInventoryTransferTransitionRequestReportLoss,
    makeInventoryTransferTransitionRequestReturnToOrigin
} from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateInventoryTransferRequest } from '../declarations/types-72.js';
export interface InventoryTransfersResource {
    /**
 * Create a planned stock transfer between two Locations. Idempotency is scoped to the
 * authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, read the relevant resource
 * or inventory movement list.
 * @see reference/inventoryTransfers.md#inventorytransferscreate
 * POST /v1/inventory-transfers
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.create({destination_location_id: "example", lines:
 * [{inventory_item_id: "example", requested_quantity: "1"}], origin_location_id: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateInventoryTransferRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryTransfer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryTransfers.md#inventorytransferscreate
     */
    createWithResponse(params: (InputValue<CreateInventoryTransferRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryTransferResponse>>;
    /**
 * Retrieve an inventory transfer, its lines, and supported_actions by ID.
 * @see reference/inventoryTransfers.md#inventorytransfersget
 * GET /v1/inventory-transfers/{inventory_transfer_id}
 * @example
 * client.inventoryTransfers.get("example")
 */
    get(inventory_transfer_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryTransfer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryTransfers.md#inventorytransfersget
     */
    getWithResponse(inventory_transfer_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryTransferResponse>>;
    /**
 * List inventory transfers.
 * @see reference/inventoryTransfers.md#inventorytransferslist
 * GET /v1/inventory-transfers
 * @example
 * client.inventoryTransfers.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "origin_location_id"?: InputValue<string>;
        "destination_location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "in_transit" | "partially_resolved" | "closed">>;
        "idempotency_key"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "closed_reason"?: InputValue<Array<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "departed_after"?: InputValue<string | globalThis.Date>;
        "departed_before"?: InputValue<string | globalThis.Date>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryTransferListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryTransfers.md#inventorytransferslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "origin_location_id"?: InputValue<string>;
        "destination_location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "in_transit" | "partially_resolved" | "closed">>;
        "idempotency_key"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "closed_reason"?: InputValue<Array<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "departed_after"?: InputValue<string | globalThis.Date>;
        "departed_before"?: InputValue<string | globalThis.Date>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryTransferListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryTransfers.md#inventorytransferslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "origin_location_id"?: InputValue<string>;
        "destination_location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "in_transit" | "partially_resolved" | "closed">>;
        "idempotency_key"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "closed_reason"?: InputValue<Array<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "departed_after"?: InputValue<string | globalThis.Date>;
        "departed_before"?: InputValue<string | globalThis.Date>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryTransferListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryTransfers.md#inventorytransferslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "origin_location_id"?: InputValue<string>;
        "destination_location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "in_transit" | "partially_resolved" | "closed">>;
        "idempotency_key"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "closed_reason"?: InputValue<Array<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "departed_after"?: InputValue<string | globalThis.Date>;
        "departed_before"?: InputValue<string | globalThis.Date>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryTransferListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryTransfers.md#inventorytransferslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "origin_location_id"?: InputValue<string>;
        "destination_location_id"?: InputValue<string>;
        "status"?: InputValue<Array<"draft" | "in_transit" | "partially_resolved" | "closed">>;
        "idempotency_key"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "closed_reason"?: InputValue<Array<"received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "departed_after"?: InputValue<string | globalThis.Date>;
        "departed_before"?: InputValue<string | globalThis.Date>;
        "received_after"?: InputValue<string | globalThis.Date>;
        "received_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryTransfer>;
    /**
 * Run one action from supported_actions using cumulative line targets. Send expected_version to
 * reject the request if the transfer changed after you read it. The response includes the updated
 * transfer and its inventory effects. Stock-moving transitions return a result with
 * inventory_transfer as its primary resource and inventory_levels for the levels changed.
 * Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint
 * includes the canonical request body. To recover the command's effects after a lost response,
 * read the relevant resource or inventory movement list.
 * @see reference/inventoryTransfers.md#inventorytransferstransition
 * POST /v1/inventory-transfers/{inventory_transfer_id}/transitions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.transition({inventory_transfer_id: "example", body: {action: "depart",
 * lines: [{inventory_transfer_line_id: "example", target_departed_quantity: "0"}]}}, {
 * idempotencyKey: idempotencyKey })
 */
    transition(input: InventoryTransfersTransitionInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<InventoryTransferResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryTransfers.md#inventorytransferstransition
     */
    transitionWithResponse(input: InventoryTransfersTransitionInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryTransferResultResponse>>;
    /**
 * Update an open transfer's planning details. Sending lines replaces the owned collection
 * atomically and requires expected_version. For metadata-only edits, expected_version is optional
 * and enforced when sent. Omitted fields stay unchanged. Send external_reference_id: null to clear
 * it.
 * @see reference/inventoryTransfers.md#inventorytransfersupdate
 * PATCH /v1/inventory-transfers/{inventory_transfer_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_transfer_id: InputValue<string>, params: (InputValue<UpdateInventoryTransferRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<InventoryTransfer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryTransfers.md#inventorytransfersupdate
     */
    updateWithResponse(inventory_transfer_id: InputValue<string>, params: (InputValue<UpdateInventoryTransferRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryTransferResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryTransfers: InventoryTransfersResource;
}
