import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    InventoryLevel,
    InventoryLevelListResponse,
    InventoryLevelResponse,
    InventoryLevelsGetInput,
    InventoryLevelsListInput,
    InventoryLevelsUpdateInput
} from '../declarations/types-26.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdateInventoryLevelRequestInput } from '../declarations/types-51.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    InventoryLevel,
    InventoryLevelResponse,
    InventoryLevelListResponse,
    InventoryLevelsGetInput,
    InventoryLevelsListInput,
    InventoryLevelsUpdateInput,
    InventoryItem
} from '../declarations/types-26.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { UpdateInventoryLevelRequestInput } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { MetadataMap } from '../declarations/types-32.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeUpdateInventoryLevelRequest } from '../declarations/types-77.js';
export interface InventoryLevelsResource {
    /**
 * Retrieve an inventory level's current quantities and version by ID.
 * @see reference/inventoryLevels.md#inventorylevelsget
 * GET /v1/inventory-levels/{inventory_level_id}
 * @example
 * client.inventoryLevels.get("example")
 */
    get(inventory_level_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"inventory_item">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryLevel>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryLevels.md#inventorylevelsget
     */
    getWithResponse(inventory_level_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"inventory_item">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryLevelResponse>>;
    /**
 * List inventory levels. Send expand=inventory_item to render each level's inventory item inline,
 * so a stock table needs no read per row. Filter by inventory_item_status to see only the levels
 * behind items that can be sold. Levels are strongly consistent individually, but pages may
 * reflect different committed instants. Default order: inventory_level_id ascending; this key
 * uniquely orders the results.
 * @see reference/inventoryLevels.md#inventorylevelslist
 * GET /v1/inventory-levels
 * @example
 * client.inventoryLevels.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "inventory_item_status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "has_available_quantity"?: InputValue<boolean>;
        "has_unavailable_condition"?: InputValue<boolean>;
        "has_shortage"?: InputValue<boolean>;
        "query"?: InputValue<string>;
        "min_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "max_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"inventory_item">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryLevelListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryLevels.md#inventorylevelslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "inventory_item_status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "has_available_quantity"?: InputValue<boolean>;
        "has_unavailable_condition"?: InputValue<boolean>;
        "has_shortage"?: InputValue<boolean>;
        "query"?: InputValue<string>;
        "min_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "max_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"inventory_item">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryLevelListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryLevels.md#inventorylevelslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "inventory_item_status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "has_available_quantity"?: InputValue<boolean>;
        "has_unavailable_condition"?: InputValue<boolean>;
        "has_shortage"?: InputValue<boolean>;
        "query"?: InputValue<string>;
        "min_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "max_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"inventory_item">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryLevelListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryLevels.md#inventorylevelslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "inventory_item_status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "has_available_quantity"?: InputValue<boolean>;
        "has_unavailable_condition"?: InputValue<boolean>;
        "has_shortage"?: InputValue<boolean>;
        "query"?: InputValue<string>;
        "min_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "max_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"inventory_item">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InventoryLevelListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryLevels.md#inventorylevelslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "inventory_item_status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "has_available_quantity"?: InputValue<boolean>;
        "has_unavailable_condition"?: InputValue<boolean>;
        "has_shortage"?: InputValue<boolean>;
        "query"?: InputValue<string>;
        "min_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "max_available_quantity"?: InputValue<`${bigint}` | bigint>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"inventory_item">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryLevel>;
    /**
 * Set one inventory level's safety_stock_quantity. expected_version is optional and enforced when
 * sent. The version changes on every quantity or claim change, including holds and commits, so
 * read the level immediately before a PATCH. Returns the updated inventory level. Idempotency is
 * scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the
 * canonical request body. To recover the command's effects after a lost response, read the
 * relevant resource or inventory movement list.
 * @see reference/inventoryLevels.md#inventorylevelsupdate
 * PATCH /v1/inventory-levels/{inventory_level_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryLevels.update("example", {safety_stock_quantity: "0"}, { idempotencyKey:
 * idempotencyKey })
 */
    update(inventory_level_id: InputValue<string>, params: (InputValue<UpdateInventoryLevelRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryLevel>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryLevels.md#inventorylevelsupdate
     */
    updateWithResponse(inventory_level_id: InputValue<string>, params: (InputValue<UpdateInventoryLevelRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryLevelResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryLevels: InventoryLevelsResource;
}
