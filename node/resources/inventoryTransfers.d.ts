import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    InventoryTransfer,
    InventoryTransferListResponse,
    InventoryTransferResponse,
    InventoryTransferResult,
    InventoryTransferResultResponse,
    InventoryTransfersCreateParams,
    InventoryTransfersGetParams,
    InventoryTransfersListParams,
    InventoryTransfersTransitionParams,
    InventoryTransfersUpdateParams
} from '../declarations/types-28.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    InventoryTransfersCreateParams,
    InventoryTransfer,
    InventoryTransferResponse,
    InventoryTransfersGetParams,
    InventoryTransfersListParams,
    InventoryTransferListResponse,
    InventoryTransfersTransitionParams,
    InventoryTransferResult,
    InventoryTransferResultResponse,
    InventoryTransfersUpdateParams,
    InventoryTransferLineRequestInput,
    InventoryTransferLine,
    InventoryTransferTransitionRequestInput,
    InventoryTransferTransitionRequestDepartInput,
    InventorySourceSystemRequestInput,
    InventoryTransferTransitionRequestReceiveInput,
    InventoryTransferTransitionRequestReturnToOriginInput,
    InventoryTransferTransitionRequestReportLossInput,
    InventoryTransferTransitionRequestCancelInput
} from '../declarations/types-28.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateInventoryTransferRequestInput } from '../declarations/types-8.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { InventoryProvenanceRequestInput, InventoryLevel, InventoryItem } from '../declarations/types-26.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { UpdateInventoryTransferRequestInput } from '../declarations/types-58.js';
export { makeCreateInventoryTransferRequest } from '../declarations/types-64.js';
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
} from '../declarations/types-68.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateInventoryTransferRequest } from '../declarations/types-74.js';
export interface InventoryTransfersResource {
    /**
 * Create a planned stock transfer between two Locations. Creates a draft and moves no stock, so
 * the Idempotency-Key is optional: each request without a key creates a separate draft. With a
 * key, idempotency is scoped to the authenticated merchant, environment, and endpoint, and the
 * fingerprint includes the canonical request body. To recover a keyed create after a lost
 * response, list inventory transfers with idempotency_key.
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
 * Retrieve an inventory transfer, its lines, and supported_actions by ID.
 *
 * `GET /v1/inventory-transfers/{inventory_transfer_id}`
 * @param inventory_transfer_id Flint inventory transfer ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryTransfer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryTransfers.get("invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV")
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
 * Run one action from supported_actions using cumulative line targets. Send expected_version to
 * reject the request if the transfer changed after you read it. The response includes the updated
 * transfer and its inventory effects. Stock-moving transitions return a result with
 * inventory_transfer as its primary resource and inventory_levels for the levels changed.
 * Idempotency is scoped to the authenticated merchant, environment, and endpoint. Its fingerprint
 * includes the canonical request body. To recover the command's effects after a lost response,
 * read the inventory transfer by ID.
 *
 * `POST /v1/inventory-transfers/{inventory_transfer_id}/transitions`
 * @param inventory_transfer_id Flint inventory transfer ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#transitionInventoryTransfer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryTransfers.transition("invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "depart",
 * expected_version: 2, lines: [{inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
 * target_departed_quantity: 4}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey:
 * idempotencyKey })
 */
    transition(inventory_transfer_id: InputValue<string>, params: InventoryTransfersTransitionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryTransferResult, InventoryTransferResultResponse>>;
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
