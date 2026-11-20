import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { LicenseKey, LicenseKeyListResponse } from '../declarations/types-39.js';
import type {
    LicenseKeyResponse,
    LicenseKeyValidation,
    LicenseKeyValidationResponse,
    LicenseKeyWithKey,
    LicenseKeyWithKeyResponse,
    LicenseKeysDisableParams,
    LicenseKeysGetParams,
    LicenseKeysListParams,
    LicenseKeysLookupParams,
    LicenseKeysReinstateParams,
    LicenseKeysResendParams,
    LicenseKeysRevealParams,
    LicenseKeysRotateKeyParams,
    LicenseKeysUpdateParams,
    LicenseKeysValidateParams
} from '../declarations/types-40.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
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
    LicenseKeysDisableParams,
    LicenseKeyResponse,
    LicenseKeysGetParams,
    LicenseKeysListParams,
    LicenseKeyWithKey,
    LicenseKeysLookupParams,
    LicenseKeysReinstateParams,
    LicenseKeysResendParams,
    LicenseKeysRevealParams,
    LicenseKeyWithKeyResponse,
    LicenseKeysRotateKeyParams,
    LicenseKeysUpdateParams,
    LicenseKeysValidateParams,
    LicenseKeyValidation,
    LicenseKeyValidationResponse,
    LicenseKeyRestriction,
    LookupLicenseKeyRequestInput,
    LicenseKeyVersionRequestInput,
    LookupLicenseKeyRequest
} from '../declarations/types-40.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference, ResendLicenseKeyRequestInput } from '../declarations/types-62.js';
export type { LicenseKey, LicenseKeyListResponse, LicenseKeyActivation } from '../declarations/types-39.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { DisableLicenseKeyRequestInput } from '../declarations/types-25.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { ExpandedCustomerSummary, ExpandedOrderSummary } from '../declarations/types-26.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-43.js';
export type { CheckoutBuyerContact } from '../declarations/types-6.js';
export type { DeferredPromotion } from '../declarations/types-17.js';
export type { PricingAmounts } from '../declarations/types-56.js';
export type { MoneyValue, NextAction } from '../declarations/types-44.js';
export type { OrderSettlementAmounts } from '../declarations/types-47.js';
export type { SettlementAmounts } from '../declarations/types-68.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { RevealLicenseKeyRequestInput } from '../declarations/types-66.js';
export type { UpdateLicenseKeyRequestInput } from '../declarations/types-76.js';
export type { ValidateLicenseKeyRequestInput, ValidateLicenseKeyRequest } from '../declarations/types-78.js';
export { makeDisableLicenseKeyRequest } from '../declarations/types-86.js';
export {
    makeLicenseKeyVersionRequest,
    makeLookupLicenseKeyRequest,
    makeMetadataMap,
    makeMetadataPatchRequest
} from '../declarations/types-88.js';
export { makeMoneyValue } from '../declarations/types-89.js';
export { makeResendLicenseKeyRequest } from '../declarations/types-91.js';
export { makeRevealLicenseKeyRequest } from '../declarations/types-92.js';
export { makeUpdateLicenseKeyRequest } from '../declarations/types-94.js';
export { makeValidateLicenseKeyRequest } from '../declarations/types-95.js';
export interface LicenseKeysResource {
    /**
 * Adds a merchant restriction, including when another cause already disables the key. A second
 * merchant restriction returns 409 ACTION_NOT_ALLOWED with reason already_applied.
 *
 * `POST /v1/license-keys/{license_key_id}/disable`
 * @param license_key_id The license key ID. Must be a valid ID with prefix lk_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#disableLicenseKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeys.disable("lk_01KEZF7C000QD7VJ83G43V0NSN", {expected_version: 1}, {
 * idempotencyKey: idempotencyKey })
 */
    disable(license_key_id: InputValue<string>, params?: LicenseKeysDisableParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKey, LicenseKeyResponse>>;
    /**
 * Returns the license key's details and its last four characters when assigned.
 *
 * `GET /v1/license-keys/{license_key_id}`
 * @param license_key_id The license key ID. Must be a valid ID with prefix lk_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#getLicenseKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.licenseKeys.get("lk_01KEZF7C000QD7VJ83G43V0NSN")
 */
    get(license_key_id: InputValue<string>, params?: LicenseKeysGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<LicenseKey, LicenseKeyResponse>>;
    /**
 * Lists issued license keys. With the checkout credential, send its paid order's order_id. Only
 * pagination parameters are also accepted. The paying credential receives the assigned key. A
 * credential from a launch URL a merchant reads or requests after payment receives masked results
 * only. Default order: created_at descending, then license_key_id descending.
 *
 * `GET /v1/license-keys`
 * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeys
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.licenseKeys.list({order_id: "ord_01KEZF7C0054GQKJ142A8X367A"})
 */
    list(params?: LicenseKeysListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<LicenseKeyListResponse, LicenseKeyListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeys
     */
    listPages(params?: LicenseKeysListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<WithResponseInfo<LicenseKeyListResponse, LicenseKeyListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeys
     */
    listItems(params?: LicenseKeysListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<LicenseKeyWithKey>;
    /**
 * Finds a license key by its full value in your merchant and environment, regardless of status. A
 * malformed key returns 400 INVALID_REQUEST with detail INVALID_VALUE at key. An unknown key
 * returns 404 RESOURCE_NOT_FOUND at key.
 *
 * `POST /v1/license-keys/lookup`
 * @see https://developers.withflintpay.com/docs/api/license-keys#lookupLicenseKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.licenseKeys.lookup({key: "EXAMPLE-LICENSE-KEY-DO-NOT-USE"})
 */
    lookup(params: LicenseKeysLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<LicenseKey, LicenseKeyResponse>>;
    /**
 * Lifts all restrictions currently in force. Any ongoing cause stays overridden until it ends.
 * With no restrictions in force the action returns 409 ACTION_NOT_ALLOWED with reason
 * already_applied.
 *
 * `POST /v1/license-keys/{license_key_id}/reinstate`
 * @param license_key_id The license key ID. Must be a valid ID with prefix lk_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#reinstateLicenseKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeys.reinstate("lk_01KEZF7C000QD7VJ83G43V0NSN", {expected_version: 1}, {
 * idempotencyKey: idempotencyKey })
 */
    reinstate(license_key_id: InputValue<string>, params?: LicenseKeysReinstateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKey, LicenseKeyResponse>>;
    /**
 * Queues an email to the buyer address on file and returns the unchanged license key resource.
 * Flint accepts one resend per key every 60 seconds. A sooner request returns 429 with
 * Retry-After.
 *
 * `POST /v1/license-keys/{license_key_id}/resend`
 * @param license_key_id The license key ID. Must be a valid ID with prefix lk_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#resendLicenseKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeys.resend("lk_01KEZF7C000QD7VJ83G43V0NSN", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    resend(license_key_id: InputValue<string>, params?: LicenseKeysResendParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKey, LicenseKeyResponse>>;
    /**
 * Returns the full key formatted for display. A key awaiting assignment returns 409
 * ACTION_NOT_ALLOWED with reason status_not_reached. Each successful call is audited. Within 24
 * hours the original credential can replay the result with its key.
 *
 * `POST /v1/license-keys/{license_key_id}/reveal`
 * @param license_key_id The license key ID. Must be a valid ID with prefix lk_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#revealLicenseKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeys.reveal("lk_01KEZF7C000QD7VJ83G43V0NSN", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    reveal(license_key_id: InputValue<string>, params?: LicenseKeysRevealParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKeyWithKey, LicenseKeyWithKeyResponse>>;
    /**
 * Replaces a generated key, invalidates the old string and releases every active installation. The
 * response contains the new key. No email is sent. Within 24 hours the original credential can
 * replay the result with its key while the key's version is unchanged. A pool key returns 409
 * ACTION_NOT_ALLOWED with reason not_offered.
 *
 * `POST /v1/license-keys/{license_key_id}/rotate-key`
 * @param license_key_id The license key ID. Must be a valid ID with prefix lk_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#rotateLicenseKeyKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeys.rotateKey("lk_01KEZF7C000QD7VJ83G43V0NSN", {expected_version: 1}, {
 * idempotencyKey: idempotencyKey })
 */
    rotateKey(license_key_id: InputValue<string>, params?: LicenseKeysRotateKeyParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKeyWithKey, LicenseKeyWithKeyResponse>>;
    /**
 * Changes the activation limit, expiry, or metadata. A lower limit leaves existing installations
 * active. Send null for an unlimited limit or to clear expiry. Only an assigned order key can have
 * an expiry.
 *
 * `PATCH /v1/license-keys/{license_key_id}`
 * @param license_key_id The license key ID. Must be a valid ID with prefix lk_. Malformed IDs
 * return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return
 * 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#updateLicenseKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeys.update("lk_01KEZF7C000QD7VJ83G43V0NSN", {activation_limit: 2,
 * expected_version: 1}, { idempotencyKey: idempotencyKey })
 */
    update(license_key_id: InputValue<string>, params: LicenseKeysUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKey, LicenseKeyResponse>>;
    /**
 * Checks whether a key can be used for one of the listed products. You can omit Authorization or
 * send a merchant API key with commerce.license_keys.read. API key calls use the read rate-limit
 * class. Every product must belong to the same merchant and environment. An invalid key returns
 * 200 with is_valid set to false. A product outside the selected merchant or environment returns
 * 404 at its index in product_ids.
 *
 * `POST /v1/license-keys/validate`
 * @see https://developers.withflintpay.com/docs/api/license-keys#validateLicenseKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.licenseKeys.validate({key: "EXAMPLE-LICENSE-KEY-DO-NOT-USE", product_ids:
 * ["prod_01KEZF7C00BVSHCNWVH528HB66"]})
 */
    validate(params: LicenseKeysValidateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<LicenseKeyValidation, LicenseKeyValidationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly licenseKeys: LicenseKeysResource;
}
