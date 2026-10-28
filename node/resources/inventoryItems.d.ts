import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateInventoryItemRequestInput } from '../declarations/types-7.js';
import type {
    InventoryItem,
    InventoryItemListResponse,
    InventoryItemResponse,
    InventoryItemsCreateInput,
    InventoryItemsGetInput,
    InventoryItemsListInput,
    InventoryItemsRemoveInput,
    InventoryItemsUpdateInput
} from '../declarations/types-26.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdateInventoryItemRequestInput } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CreateInventoryItemRequestInput } from '../declarations/types-7.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    InventoryItem,
    InventoryItemResponse,
    InventoryItemListResponse,
    InventoryItemsCreateInput,
    InventoryItemsRemoveInput,
    InventoryItemsGetInput,
    InventoryItemsListInput,
    InventoryItemsUpdateInput
} from '../declarations/types-26.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { UpdateInventoryItemRequestInput } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeCreateInventoryItemRequest } from '../declarations/types-67.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeUpdateInventoryItemRequest } from '../declarations/types-77.js';
export interface InventoryItemsResource {
    /**
 * Create an inventory item. SKU and barcode are searchable attributes, not identity: they are not
 * required to be unique. Idempotency is scoped to the authenticated merchant, environment, and
 * endpoint. Its fingerprint includes the canonical request body. To recover the command's effects
 * after a lost response, read the relevant resource or inventory movement list.
 * @see reference/inventoryItems.md#inventoryitemscreate
 * POST /v1/inventory-items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryItems.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateInventoryItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryItems.md#inventoryitemscreate
     */
    createWithResponse(params: (InputValue<CreateInventoryItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryItemResponse>>;
    /**
 * Retire an inventory item. The item is archived: it stays readable by ID and appears in lists
 * only when you filter by status archived.
 * @see reference/inventoryItems.md#inventoryitemsremove
 * DELETE /v1/inventory-items/{inventory_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryItems.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(inventory_item_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryItems.md#inventoryitemsremove
     */
    removeWithResponse(inventory_item_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryItemResponse>>;
    /**
 * Retrieve an inventory item by ID, including archived items.
 * @see reference/inventoryItems.md#inventoryitemsget
 * GET /v1/inventory-items/{inventory_item_id}
 * @example
 * client.inventoryItems.get("example")
 */
    get(inventory_item_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryItems.md#inventoryitemsget
     */
    getWithResponse(inventory_item_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryItemResponse>>;
    /**
 * List inventory items. Archived items are excluded unless you filter by status archived. Default
 * order: inventory_item_id ascending; this key uniquely orders the results.
 * @see reference/inventoryItems.md#inventoryitemslist
 * GET /v1/inventory-items
 * @example
 * client.inventoryItems.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sku"?: InputValue<string>;
        "barcode"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryItemListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryItems.md#inventoryitemslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sku"?: InputValue<string>;
        "barcode"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryItemListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryItems.md#inventoryitemslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sku"?: InputValue<string>;
        "barcode"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryItemListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryItems.md#inventoryitemslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sku"?: InputValue<string>;
        "barcode"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InventoryItemListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryItems.md#inventoryitemslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "sku"?: InputValue<string>;
        "barcode"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryItem>;
    /**
 * Update an inventory item. Accepts status active or inactive. Send sku or barcode as null to
 * clear. expected_version is optional and enforced when sent. Idempotency is scoped to the
 * authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, read the relevant resource
 * or inventory movement list.
 * @see reference/inventoryItems.md#inventoryitemsupdate
 * PATCH /v1/inventory-items/{inventory_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryItems.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_item_id: InputValue<string>, params: (InputValue<UpdateInventoryItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryItems.md#inventoryitemsupdate
     */
    updateWithResponse(inventory_item_id: InputValue<string>, params: (InputValue<UpdateInventoryItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryItemResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryItems: InventoryItemsResource;
}
