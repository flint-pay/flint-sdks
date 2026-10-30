import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    InventoryLevel,
    InventoryLevelListResponse,
    InventoryLevelResponse,
    InventoryLevelsGetParams,
    InventoryLevelsListParams,
    InventoryLevelsUpdateParams
} from '../declarations/types-26.js';
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
    InventoryLevelsGetParams,
    InventoryLevel,
    InventoryLevelResponse,
    InventoryLevelsListParams,
    InventoryLevelListResponse,
    InventoryLevelsUpdateParams,
    InventoryItem
} from '../declarations/types-26.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateInventoryLevelRequestInput, UpdateInventoryLevelRequest } from '../declarations/types-58.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateInventoryLevelRequest } from '../declarations/types-74.js';
export interface InventoryLevelsResource {
    /**
 * Retrieve an inventory level's current quantities and version by ID.
 *
 * `GET /v1/inventory-levels/{inventory_level_id}`
 * @param inventory_level_id Flint inventory level ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryLevel
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryLevels.get("invl_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(inventory_level_id: InputValue<string>, params?: InventoryLevelsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryLevel, InventoryLevelResponse>>;
    /**
 * List inventory levels. Send expand=inventory_item to render each level's inventory item inline,
 * so a stock table needs no read per row. Filter by inventory_item_status to see only the levels
 * behind items that can be sold. Levels are strongly consistent individually, but pages may
 * reflect different committed instants. Default order: inventory_level_id ascending; this key
 * uniquely orders the results.
 *
 * `GET /v1/inventory-levels`
 * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryLevels
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryLevels.list()
 */
    list(params?: InventoryLevelsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryLevelListResponse, InventoryLevelListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryLevels
     */
    listPages(params?: InventoryLevelsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryLevelListResponse, InventoryLevelListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryLevels
     */
    listItems(params?: InventoryLevelsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryLevel>;
    /**
 * Set one inventory level's safety_stock_quantity. expected_version is optional and enforced when
 * sent. The version changes on every quantity or claim change, including holds and commits, so
 * read the level immediately before a PATCH. Returns the updated inventory level. Idempotency is
 * scoped to the authenticated merchant, environment, and endpoint. Its fingerprint includes the
 * canonical request body. To recover the command's effects after a lost response, read the
 * inventory level by ID.
 *
 * `PATCH /v1/inventory-levels/{inventory_level_id}`
 * @param inventory_level_id Flint inventory level ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#updateInventoryLevel
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryLevels.update("invl_01ARZ3NDEKTSV4RRFFQ69G5FAV", {safety_stock_quantity: 5}, {
 * idempotencyKey: idempotencyKey })
 */
    update(inventory_level_id: InputValue<string>, params: InventoryLevelsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryLevel, InventoryLevelResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryLevels: InventoryLevelsResource;
}
