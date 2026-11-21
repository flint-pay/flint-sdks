import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type {
    LicenseKeyActivation,
    LicenseKeyActivationListResponse,
    LicenseKeyActivationResponse,
    LicenseKeyActivationsCreateParams,
    LicenseKeyActivationsGetParams,
    LicenseKeyActivationsListParams,
    LicenseKeyActivationsReleaseParams
} from '../declarations/types-39.js';
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
    LicenseKeyActivationsCreateParams,
    LicenseKeyActivation,
    LicenseKeyActivationResponse,
    LicenseKeyActivationsGetParams,
    LicenseKeyActivationsListParams,
    LicenseKeyActivationListResponse,
    LicenseKeyActivationsReleaseParams
} from '../declarations/types-39.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { CreateLicenseKeyActivationRequestInput, CreateLicenseKeyActivationRequest } from '../declarations/types-11.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { NextAction, MoneyValue } from '../declarations/types-44.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { ReleaseLicenseKeyActivationRequestInput, ReleaseLicenseKeyActivationRequest } from '../declarations/types-61.js';
export type { DisputesAcceptParams } from '../declarations/types-26.js';
export { makeCreateLicenseKeyActivationRequest } from '../declarations/types-83.js';
export { makeMoneyValue } from '../declarations/types-88.js';
export { makeReleaseLicenseKeyActivationRequest } from '../declarations/types-91.js';
export interface LicenseKeyActivationsResource {
    /**
 * Registers a device for a key in one of the listed products. Returns 201 for a new activation or
 * 200 when the fingerprint already has an active activation. Returns 409 when the key is inactive
 * or has no slots. You can omit Authorization or send an API key with commerce.license_keys.write.
 * Without an API key, missing products, out-of-scope products, and unmatched keys return 404 at
 * key.
 *
 * `POST /v1/license-key-activations`
 * @see https://developers.withflintpay.com/docs/api/license-keys#createLicenseKeyActivation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeyActivations.create({key: "EXAMPLE-LICENSE-KEY-DO-NOT-USE", name: "Example
 * desktop", product_ids: ["prod_01KEZF7C00BVSHCNWVH528HB66"]}, { idempotencyKey: idempotencyKey })
 */
    create(params: LicenseKeyActivationsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKeyActivation, LicenseKeyActivationResponse>>;
    /**
 * Returns the device and its activation status.
 *
 * `GET /v1/license-key-activations/{license_key_activation_id}`
 * @param license_key_activation_id The activation ID. Must be a valid ID with prefix lka_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#getLicenseKeyActivation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.licenseKeyActivations.get("lka_01KEZF7C00NZEZVCZW3SRDMHTZ")
 */
    get(license_key_activation_id: InputValue<string>, params?: LicenseKeyActivationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<LicenseKeyActivation, LicenseKeyActivationResponse>>;
    /**
 * Lists activations for one issued license key, newest first by created_at and then by
 * license_key_activation_id, both descending. Default order: created_at descending, then
 * license_key_activation_id descending.
 *
 * `GET /v1/license-key-activations`
 * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeyActivations
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.licenseKeyActivations.list({license_key_id: "lk_01KEZF7C000QD7VJ83G43V0NSN"})
 */
    list(params: LicenseKeyActivationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<LicenseKeyActivationListResponse, LicenseKeyActivationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeyActivations
     */
    listPages(params: LicenseKeyActivationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<LicenseKeyActivationListResponse, LicenseKeyActivationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/license-keys#listLicenseKeyActivations
     */
    listItems(params: LicenseKeyActivationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<LicenseKeyActivation>;
    /**
 * Releases an activation and frees its slot. Send a merchant API key with
 * commerce.license_keys.write, or send both product_ids and the activation's own key. If a
 * merchant sends a key, it must belong to this activation. Returns 401 when neither form of
 * authority is present, 404 when the activation is unavailable to the caller, and 409 when it is
 * already released. For a request that proves authority with a license key, missing products,
 * out-of-scope products, and unmatched keys also return 404 at license_key_activation_id.
 *
 * `POST /v1/license-key-activations/{license_key_activation_id}/release`
 * @param license_key_activation_id The activation to release. Must be a valid ID with prefix lka_.
 * Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not
 * exist return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/license-keys#releaseLicenseKeyActivation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.licenseKeyActivations.release("lka_01KEZF7C00NZEZVCZW3SRDMHTZ", {key:
 * "EXAMPLE-LICENSE-KEY-DO-NOT-USE", product_ids: ["prod_01KEZF7C00BVSHCNWVH528HB66"]}, {
 * idempotencyKey: idempotencyKey })
 */
    release(license_key_activation_id: InputValue<string>, params?: LicenseKeyActivationsReleaseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<LicenseKeyActivation, LicenseKeyActivationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly licenseKeyActivations: LicenseKeyActivationsResource;
}
