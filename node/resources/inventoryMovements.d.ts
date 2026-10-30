import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    InventoryMovement,
    InventoryMovementListResponse,
    InventoryMovementResponse,
    InventoryMovementsGetParams,
    InventoryMovementsListParams
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
    InventoryMovementsGetParams,
    InventoryMovement,
    InventoryMovementResponse,
    InventoryMovementsListParams,
    InventoryMovementListResponse,
    InventoryItem,
    InventoryLevel,
    InventoryLevelsGetParams
} from '../declarations/types-26.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { InventorySourceSystem } from '../declarations/types-28.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface InventoryMovementsResource {
    /**
 * Retrieve an inventory movement and its stock changes by ID.
 *
 * `GET /v1/inventory-movements/{inventory_movement_id}`
 * @param inventory_movement_id Flint inventory movement ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryMovement
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryMovements.get("invm_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(inventory_movement_id: InputValue<string>, params?: InventoryMovementsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryMovement, InventoryMovementResponse>>;
    /**
 * List inventory movements, oldest recorded first. Send expand=inventory_item to render each
 * movement's inventory item inline, so a history table needs no read per row. Filter by
 * idempotency_key to recover the movements a command produced. Send sort_direction=desc to read
 * the newest movements first. Default order: created_at ascending, then inventory_movement_id
 * ascending.
 *
 * `GET /v1/inventory-movements`
 * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryMovements
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryMovements.list()
 */
    list(params?: InventoryMovementsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryMovementListResponse, InventoryMovementListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryMovements
     */
    listPages(params?: InventoryMovementsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryMovementListResponse, InventoryMovementListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryMovements
     */
    listItems(params?: InventoryMovementsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryMovement>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryMovements: InventoryMovementsResource;
}
