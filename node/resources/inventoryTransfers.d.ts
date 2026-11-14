import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { InventoryTransfer } from '../declarations/types-30.js';
import type {
    InventoryTransferListResponse,
    InventoryTransferResponse,
    InventoryTransferResult,
    InventoryTransferResultResponse,
    InventoryTransfersCancelParams,
    InventoryTransfersCreateParams,
    InventoryTransfersDepartParams,
    InventoryTransfersGetParams,
    InventoryTransfersListParams,
    InventoryTransfersReceiveParams,
    InventoryTransfersReportLossParams,
    InventoryTransfersReturnToOriginParams,
    InventoryTransfersUpdateParams
} from '../declarations/types-31.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    InventoryTransfersCancelParams,
    InventoryTransferResult,
    InventoryTransferResultResponse,
    InventoryTransfersCreateParams,
    InventoryTransferResponse,
    InventoryTransfersDepartParams,
    InventoryTransfersGetParams,
    InventoryTransfersListParams,
    InventoryTransferListResponse,
    InventoryTransfersReceiveParams,
    InventoryTransfersReportLossParams,
    InventoryTransfersReturnToOriginParams,
    InventoryTransfersUpdateParams,
    InventoryTransferLineRequestInput,
    InventoryTransferLine
} from '../declarations/types-31.js';
export type {
    RequestOptions,
    ResponseMeta,
    ResponseWarning,
    ResourceReference,
    ReportInventoryTransferLossRequestInput
} from '../declarations/types-54.js';
export type { InventoryTransfer, InventorySourceSystemRequestInput } from '../declarations/types-30.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CancelInventoryTransferRequestInput } from '../declarations/types-4.js';
export type { InventoryProvenanceRequestInput, InventoryLevel, InventoryItem } from '../declarations/types-29.js';
export type { AuthMode, BackorderPolicy } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap } from '../declarations/types-38.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession, ReceiveInventoryTransferRequestInput } from '../declarations/types-52.js';
export type { CreateInventoryTransferRequestInput } from '../declarations/types-10.js';
export type { DepartInventoryTransferRequestInput } from '../declarations/types-23.js';
export type { ReturnInventoryTransferToOriginRequestInput } from '../declarations/types-55.js';
export type { UpdateInventoryTransferRequestInput } from '../declarations/types-67.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeCancelInventoryTransferRequest } from '../declarations/types-71.js';
export { makeCreateInventoryTransferRequest } from '../declarations/types-73.js';
export { makeDepartInventoryTransferRequest } from '../declarations/types-76.js';
export {
    makeInventoryProvenanceRequest,
    makeInventorySourceSystemRequest,
    makeInventoryTransferLineRequest
} from '../declarations/types-77.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export {
    makeReceiveInventoryTransferRequest,
    makeReportInventoryTransferLossRequest,
    makeReturnInventoryTransferToOriginRequest
} from '../declarations/types-81.js';
export { makeUpdateInventoryTransferRequest } from '../declarations/types-84.js';
export interface InventoryTransfersResource {
    /**
 * Cancels requested quantity that hasn't departed. Call it only when cancel is in
 * supported_actions. Lines carry cumulative targets, not deltas. Returns a result with
 * inventory_transfer as its primary resource and inventory_levels for the levels changed.
 * Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint
 * includes the canonical request body. To recover the command's effects after a lost response,
 * read the inventory transfer by ID.
 *
 * `POST /v1/inventory-transfers/{inventory_transfer_id}/cancel`
 * @param inventory_transfer_id Flint inventory transfer ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#cancelInventoryTransfer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.cancel("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version: 2,
 * lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
 * target_canceled_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(inventory_transfer_id: InputValue<string>, params: InventoryTransfersCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryTransferResult, InventoryTransferResultResponse>>;
    /**
 * Create a planned stock transfer between two Locations. Creates a draft and moves no stock, so an
 * idempotency key is optional: each request without a key creates a separate draft. With a key, a
 * retry must send the same request body, and idempotency is scoped to the authenticated merchant,
 * environment, and endpoint. To recover a keyed create after a lost response, list inventory
 * transfers with idempotency_key.
 *
 * `POST /v1/inventory-transfers`
 * @see https://developers.withflintpay.com/docs/api/inventory#createInventoryTransfer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.create({destination_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX",
 * lines: [{inventory_item_id: "invi_01K1P6G4M7H2N8Q9R3S5T6V7WX", requested_quantity: 1}],
 * origin_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX"}, { idempotencyKey: idempotencyKey })
 */
    create(params: InventoryTransfersCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryTransfer, InventoryTransferResponse>>;
    /**
 * Takes stock off the origin location and puts it in transit. Call it only when depart is in
 * supported_actions. Lines carry cumulative targets, not deltas. Returns a result with
 * inventory_transfer as its primary resource and inventory_levels for the levels changed.
 * Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint
 * includes the canonical request body. To recover the command's effects after a lost response,
 * read the inventory transfer by ID.
 *
 * `POST /v1/inventory-transfers/{inventory_transfer_id}/depart`
 * @param inventory_transfer_id Flint inventory transfer ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#departInventoryTransfer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.depart("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version: 2,
 * lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
 * target_departed_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey:
 * idempotencyKey })
 */
    depart(inventory_transfer_id: InputValue<string>, params: InventoryTransfersDepartParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryTransferResult, InventoryTransferResultResponse>>;
    /**
 * Retrieve an inventory transfer, its lines, and supported_actions by ID.
 *
 * `GET /v1/inventory-transfers/{inventory_transfer_id}`
 * @param inventory_transfer_id Flint inventory transfer ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryTransfer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryTransfers.get("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP")
 */
    get(inventory_transfer_id: InputValue<string>, params?: InventoryTransfersGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryTransfer, InventoryTransferResponse>>;
    /**
 * List inventory transfers. Default order: inventory_transfer_id ascending; this key uniquely
 * orders the results.
 *
 * `GET /v1/inventory-transfers`
 * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryTransfers
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryTransfers.list()
 */
    list(params?: InventoryTransfersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryTransferListResponse, InventoryTransferListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryTransfers
     */
    listPages(params?: InventoryTransfersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryTransferListResponse, InventoryTransferListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryTransfers
     */
    listItems(params?: InventoryTransfersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryTransfer>;
    /**
 * Adds in-transit stock to the destination location. Optional condition targets split the received
 * quantity by condition. Call it only when receive is in supported_actions. Lines carry cumulative
 * targets, not deltas. Returns a result with inventory_transfer as its primary resource and
 * inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant,
 * environment, and endpoint. Its fingerprint includes the canonical request body. To recover the
 * command's effects after a lost response, read the inventory transfer by ID.
 *
 * `POST /v1/inventory-transfers/{inventory_transfer_id}/receive`
 * @param inventory_transfer_id Flint inventory transfer ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#receiveInventoryTransfer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.receive("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version: 2,
 * lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
 * target_received_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey:
 * idempotencyKey })
 */
    receive(inventory_transfer_id: InputValue<string>, params: InventoryTransfersReceiveParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryTransferResult, InventoryTransferResultResponse>>;
    /**
 * Records in-transit stock as lost. Call it only when report_loss is in supported_actions. Lines
 * carry cumulative targets, not deltas. Returns a result with inventory_transfer as its primary
 * resource and inventory_levels for the levels changed. Idempotency is scoped to the authenticated
 * merchant, environment, and endpoint. Its fingerprint includes the canonical request body. To
 * recover the command's effects after a lost response, read the inventory transfer by ID.
 *
 * `POST /v1/inventory-transfers/{inventory_transfer_id}/report-loss`
 * @param inventory_transfer_id Flint inventory transfer ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#reportInventoryTransferLoss
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.reportLoss("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version: 2,
 * lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", target_lost_quantity:
 * 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey: idempotencyKey })
 */
    reportLoss(inventory_transfer_id: InputValue<string>, params: InventoryTransfersReportLossParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryTransferResult, InventoryTransferResultResponse>>;
    /**
 * Puts in-transit stock back at the origin location. Call it only when return_to_origin is in
 * supported_actions. Lines carry cumulative targets, not deltas. Returns a result with
 * inventory_transfer as its primary resource and inventory_levels for the levels changed.
 * Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint
 * includes the canonical request body. To recover the command's effects after a lost response,
 * read the inventory transfer by ID.
 *
 * `POST /v1/inventory-transfers/{inventory_transfer_id}/return-to-origin`
 * @param inventory_transfer_id Flint inventory transfer ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#returnInventoryTransferToOrigin
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.returnToOrigin("invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP", {expected_version:
 * 2, lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
 * target_returned_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey:
 * idempotencyKey })
 */
    returnToOrigin(inventory_transfer_id: InputValue<string>, params: InventoryTransfersReturnToOriginParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryTransferResult, InventoryTransferResultResponse>>;
    /**
 * Update an open transfer's planning details. Sending lines replaces the owned collection
 * atomically and requires expected_version. For metadata-only edits, expected_version is optional
 * and enforced when sent. Omitted fields stay unchanged. Send external_reference_id: null to clear
 * it.
 *
 * `PATCH /v1/inventory-transfers/{inventory_transfer_id}`
 * @param inventory_transfer_id Flint inventory transfer ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#updateInventoryTransfer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.update("invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {note: "Transfer to the
 * main warehouse"}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_transfer_id: InputValue<string>, params: InventoryTransfersUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryTransfer, InventoryTransferResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryTransfers: InventoryTransfersResource;
}
