import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type {
    LicenseKeyPool,
    LicenseKeyPoolAdditions,
    LicenseKeyPoolAdditionsResponse,
    LicenseKeyPoolKey,
    LicenseKeyPoolKeyListResponse,
    LicenseKeyPoolListResponse,
    LicenseKeyPoolRemovals,
    LicenseKeyPoolRemovalsResponse,
    LicenseKeyPoolResponse,
    LicenseKeyPoolsCreateKeysParams,
    LicenseKeyPoolsCreateParams,
    LicenseKeyPoolsDeleteParams,
    LicenseKeyPoolsGetParams,
    LicenseKeyPoolsListKeysParams,
    LicenseKeyPoolsListParams,
    LicenseKeyPoolsRemoveKeysParams,
    LicenseKeyPoolsUpdateParams
} from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
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
    LicenseKeyPoolsCreateParams,
    LicenseKeyPool,
    LicenseKeyPoolResponse,
    LicenseKeyPoolsCreateKeysParams,
    LicenseKeyPoolAdditions,
    LicenseKeyPoolAdditionsResponse,
    LicenseKeyPoolsDeleteParams,
    LicenseKeyPoolsGetParams,
    LicenseKeyPoolsListKeysParams,
    LicenseKeyPoolKeyListResponse,
    LicenseKeyPoolKey,
    LicenseKeyPoolsListParams,
    LicenseKeyPoolListResponse,
    LicenseKeyPoolsRemoveKeysParams,
    LicenseKeyPoolRemovals,
    LicenseKeyPoolRemovalsResponse,
    LicenseKeyPoolsUpdateParams,
    LicenseKeyPoolKeyAddition,
    LicenseKeyPoolKeyRemoval
} from '../declarations/types-39.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-79.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { CreateLicenseKeyPoolRequestInput, CreateLicenseKeyPoolKeysRequestInput } from '../declarations/types-11.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-43.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-44.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { RemoveLicenseKeyPoolKeysRequestInput } from '../declarations/types-61.js';
export type { UpdateLicenseKeyPoolRequestInput } from '../declarations/types-76.js';
export type { DisputesAcceptParams } from '../declarations/types-26.js';
export { makeCreateLicenseKeyPoolKeysRequest, makeCreateLicenseKeyPoolRequest } from '../declarations/types-82.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-88.js';
export { makeRemoveLicenseKeyPoolKeysRequest } from '../declarations/types-90.js';
export { makeUpdateLicenseKeyPoolRequest } from '../declarations/types-93.js';
export interface LicenseKeyPoolsResource {
    /**
 * Creates an empty pool.
 *
 * `POST /v1/license-key-pools`
 * @see https://developers.withflintpay.com/docs/api/license-keys#createLicenseKeyPool
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeyPools.create({name: "Example software keys"}, { idempotencyKey: idempotencyKey
 * })
 */
    create(params: LicenseKeyPoolsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKeyPool, LicenseKeyPoolResponse>>;
    /**
 * Records the seller's authorization to sell the uploaded keys. Newly added keys fill pending
 * licenses oldest first before increasing available stock. Keys already present in any of your
 * pools in this environment are returned as existing. The response is 201 when any key was added
 * and 200 when all were already present.
 *
 * `POST /v1/license-key-pools/{license_key_pool_id}/keys`
 * @param license_key_pool_id The license key pool ID. Must be a valid ID with prefix lkp_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#createLicenseKeyPoolKeys
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeyPools.createKeys("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {keys:
 * ["EXAMPLE-LICENSE-KEY-DO-NOT-USE"], seller_authorization_confirmed: true}, { idempotencyKey:
 * idempotencyKey })
 */
    createKeys(license_key_pool_id: InputValue<string>, params: LicenseKeyPoolsCreateKeysParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKeyPoolAdditions, LicenseKeyPoolAdditionsResponse>>;
    /**
 * Archives the pool and returns its final quantities. A pool cannot be archived while a variant
 * uses it, an order can still receive keys from it, or it has held or pending keys. Available keys
 * are removed only when explicitly requested.
 *
 * `DELETE /v1/license-key-pools/{license_key_pool_id}`
 * @param license_key_pool_id The license key pool ID. Must be a valid ID with prefix lkp_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#deleteLicenseKeyPool
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeyPools.delete("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(license_key_pool_id: InputValue<string>, params?: LicenseKeyPoolsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKeyPool, LicenseKeyPoolResponse>>;
    /**
 * Returns the pool and its current quantities. Archived pools remain readable.
 *
 * `GET /v1/license-key-pools/{license_key_pool_id}`
 * @param license_key_pool_id The license key pool ID. Must be a valid ID with prefix lkp_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#getLicenseKeyPool
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.licenseKeyPools.get("lkp_01KEZF7C00AQV1X2DPWG2NXS7H")
 */
    get(license_key_pool_id: InputValue<string>, params?: LicenseKeyPoolsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<LicenseKeyPool, LicenseKeyPoolResponse>>;
    /**
 * Lists masked keys by created_at ascending, then license_key_pool_key_id ascending, which gives
 * upload order. Default order: created_at ascending, then license_key_pool_key_id ascending.
 *
 * `GET /v1/license-key-pools/{license_key_pool_id}/keys`
 * @param license_key_pool_id The license key pool ID. Must be a valid ID with prefix lkp_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeyPoolKeys
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.licenseKeyPools.listKeys("lkp_01KEZF7C00AQV1X2DPWG2NXS7H")
 */
    listKeys(license_key_pool_id: InputValue<string>, params?: LicenseKeyPoolsListKeysParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<LicenseKeyPoolKeyListResponse, LicenseKeyPoolKeyListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeyPoolKeys
     */
    listKeysPages(license_key_pool_id: InputValue<string>, params?: LicenseKeyPoolsListKeysParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<LicenseKeyPoolKeyListResponse, LicenseKeyPoolKeyListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeyPoolKeys
     */
    listKeysItems(license_key_pool_id: InputValue<string>, params?: LicenseKeyPoolsListKeysParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<LicenseKeyPoolKey>;
    /**
 * Lists pools by created_at descending, then license_key_pool_id descending. Include archived in
 * the status filter to see archived pools. Default order: created_at descending, then
 * license_key_pool_id descending.
 *
 * `GET /v1/license-key-pools`
 * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeyPools
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.licenseKeyPools.list()
 */
    list(params?: LicenseKeyPoolsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<LicenseKeyPoolListResponse, LicenseKeyPoolListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeyPools
     */
    listPages(params?: LicenseKeyPoolsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<LicenseKeyPoolListResponse, LicenseKeyPoolListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeyPools
     */
    listItems(params?: LicenseKeyPoolsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<LicenseKeyPool>;
    /**
 * Removes available keys and reports an outcome for each selector in request order. This bulk
 * route replaces per-key deletion so a publisher's recall can select keys by value and remove
 * stock even when other entries have sold or are held.
 *
 * `POST /v1/license-key-pools/{license_key_pool_id}/keys/remove`
 * @param license_key_pool_id The license key pool ID. Must be a valid ID with prefix lkp_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#removeLicenseKeyPoolKeys
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeyPools.removeKeys("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {license_key_pool_key_ids:
 * ["lkpk_01KEZF7C004XWT0EAW2ZQGG93S"]}, { idempotencyKey: idempotencyKey })
 */
    removeKeys(license_key_pool_id: InputValue<string>, params: LicenseKeyPoolsRemoveKeysParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKeyPoolRemovals, LicenseKeyPoolRemovalsResponse>>;
    /**
 * Updates the pool's settings. An empty JSON object returns the current pool. Enabling public
 * validation requires every key that has not been removed to have at least 16 characters.
 *
 * `PATCH /v1/license-key-pools/{license_key_pool_id}`
 * @param license_key_pool_id The license key pool ID. Must be a valid ID with prefix lkp_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#updateLicenseKeyPool
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeyPools.update("lkp_01KEZF7C00AQV1X2DPWG2NXS7H", {expected_version: 1, name:
 * "Example desktop keys"}, { idempotencyKey: idempotencyKey })
 */
    update(license_key_pool_id: InputValue<string>, params: LicenseKeyPoolsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKeyPool, LicenseKeyPoolResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly licenseKeyPools: LicenseKeyPoolsResource;
}
