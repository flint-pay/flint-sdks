import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    InventoryItem,
    InventoryItemListResponse,
    InventoryItemResponse,
    InventoryItemsCreateParams,
    InventoryItemsDeleteParams,
    InventoryItemsGetParams,
    InventoryItemsListParams,
    InventoryItemsUpdateParams
} from '../declarations/types-29.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    InventoryItemsCreateParams,
    InventoryItem,
    InventoryItemResponse,
    InventoryItemsDeleteParams,
    InventoryItemsGetParams,
    InventoryItemsListParams,
    InventoryItemListResponse,
    InventoryItemsUpdateParams
} from '../declarations/types-29.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateInventoryItemRequestInput } from '../declarations/types-10.js';
export type { CreateInventoryBackorderPolicyRequestInput } from '../declarations/types-9.js';
export type { MetadataRequestInput, NextAction, MoneyValue } from '../declarations/types-38.js';
export type { AuthMode, BackorderPolicy } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-37.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdateInventoryItemRequestInput } from '../declarations/types-66.js';
export type {
    InventoryBackorderPolicyRequestInput,
    InventoryAllocationPoliciesDeleteParams,
    InventoryBackorderPolicyRequest
} from '../declarations/types-28.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeCreateInventoryBackorderPolicyRequest, makeCreateInventoryItemRequest } from '../declarations/types-72.js';
export { makeInventoryBackorderPolicyRequest } from '../declarations/types-77.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-78.js';
export { makeUpdateInventoryItemRequest } from '../declarations/types-83.js';
export interface InventoryItemsResource {
    /**
 * Create an inventory item. SKU and barcode are searchable attributes, not identity: they are not
 * required to be unique. Idempotency is scoped to the authenticated merchant, environment, and
 * endpoint. Its fingerprint includes the canonical request body. To recover the command's effects
 * after a lost response, list inventory items by the external_reference_id, sku, or barcode you
 * supplied, then read the matching item.
 *
 * `POST /v1/inventory-items`
 * @see https://developers.withflintpay.com/docs/api/inventory#createInventoryItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryItems.create({barcode: "0781234567890", name: "Ceramic mug, 12oz", sku:
 * "mug-12-white", status: "active"}, { idempotencyKey: idempotencyKey })
 */
    create(params: InventoryItemsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryItem, InventoryItemResponse>>;
    /**
 * Retire an inventory item. The item is archived: it stays readable by ID and appears in lists
 * only when you filter by status archived.
 *
 * `DELETE /v1/inventory-items/{inventory_item_id}`
 * @param inventory_item_id Flint inventory item ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#deleteInventoryItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryItems.delete("invi_01KEZF7C00A6YEM25MTHW2MPZY", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(inventory_item_id: InputValue<string>, params?: InventoryItemsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryItem, InventoryItemResponse>>;
    /**
 * Retrieve an inventory item by ID, including archived items.
 *
 * `GET /v1/inventory-items/{inventory_item_id}`
 * @param inventory_item_id Flint inventory item ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryItems.get("invi_01KEZF7C00A6YEM25MTHW2MPZY")
 */
    get(inventory_item_id: InputValue<string>, params?: InventoryItemsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryItem, InventoryItemResponse>>;
    /**
 * List inventory items. Archived items are excluded unless you filter by status archived. Default
 * order: inventory_item_id ascending; this key uniquely orders the results.
 *
 * `GET /v1/inventory-items`
 * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryItems
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryItems.list()
 */
    list(params?: InventoryItemsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryItemListResponse, InventoryItemListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryItems
     */
    listPages(params?: InventoryItemsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryItemListResponse, InventoryItemListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryItems
     */
    listItems(params?: InventoryItemsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryItem>;
    /**
 * Update an inventory item. Accepts status active or inactive. Send sku or barcode as null to
 * clear. expected_version is optional and enforced when sent. Idempotency is scoped to the
 * authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, read the inventory item by
 * ID.
 *
 * `PATCH /v1/inventory-items/{inventory_item_id}`
 * @param inventory_item_id Flint inventory item ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#updateInventoryItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryItems.update("invi_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Ceramic mug"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(inventory_item_id: InputValue<string>, params: InventoryItemsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryItem, InventoryItemResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryItems: InventoryItemsResource;
}
