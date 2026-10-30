import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    PartnerApp,
    PartnerAppCredential,
    PartnerAppCredentialListResponse,
    PartnerAppCredentialResponse,
    PartnerAppInstall,
    PartnerAppInstallListResponse,
    PartnerAppInstallResponse,
    PartnerAppListResponse,
    PartnerAppResponse,
    PartnerAppWithRotatedSecret,
    PartnerAppWithSecret,
    PartnerAppWithSecretResponse
} from '../declarations/types-39.js';
import type {
    PartnerAppsCreateCredentialParams,
    PartnerAppsCreateParams,
    PartnerAppsDeleteCredentialParams,
    PartnerAppsDeleteParams,
    PartnerAppsGetCredentialParams,
    PartnerAppsGetInstallParams,
    PartnerAppsGetParams,
    PartnerAppsListCredentialsParams,
    PartnerAppsListInstallsParams,
    PartnerAppsListParams,
    PartnerAppsRevokeEnvironmentGrantParams,
    PartnerAppsRevokeInstallParams,
    PartnerAppsRotateSecretParams,
    PartnerAppsUpdateParams
} from '../declarations/types-40.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { RotatePartnerAppSecretResponse } from '../declarations/types-52.js';
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
    PartnerAppsCreateParams,
    PartnerAppsCreateCredentialParams,
    PartnerAppsDeleteParams,
    PartnerAppsDeleteCredentialParams,
    PartnerAppsGetParams,
    PartnerAppsGetCredentialParams,
    PartnerAppsGetInstallParams,
    PartnerAppsListCredentialsParams,
    PartnerAppsListInstallsParams,
    PartnerAppsListParams,
    PartnerAppsRevokeEnvironmentGrantParams,
    PartnerAppsRevokeInstallParams,
    PartnerAppsRotateSecretParams,
    PartnerAppsUpdateParams,
    PartnerEnvironmentGrant
} from '../declarations/types-40.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    PartnerAppWithSecret,
    PartnerAppWithSecretResponse,
    PartnerAppCredential,
    PartnerAppCredentialResponse,
    PartnerApp,
    PartnerAppResponse,
    PartnerAppInstall,
    PartnerAppInstallResponse,
    PartnerAppCredentialListResponse,
    PartnerAppInstallListResponse,
    PartnerAppListResponse,
    PartnerAppWithRotatedSecret,
    PartnerAppPermissionManifestEntryRequestInput,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppCredentialJWKSURL,
    PartnerAppCredentialPublicKey,
    PartnerAppCredentialWorkloadIdentity,
    PartnerAppPermissionManifestEntry,
    PartnerAppCredentialPublicKeyRequest
} from '../declarations/types-39.js';
export type {
    _SdkWithoutIdempotency,
    WorkloadIdentityClaimConditionRequestInput,
    WorkloadIdentityClaimCondition
} from '../declarations/types-61.js';
export type { RotatePartnerAppSecretResponse, RotatePartnerAppSecretRequestInput } from '../declarations/types-52.js';
export type { ClientOptions, CheckoutSessionsListDeliverySelectionsParams } from '../declarations/types-5.js';
export type {
    CreatePartnerAppRequestInput,
    CreatePartnerAppCredentialRequestInput,
    CreatePartnerAppCredentialPublicKeyRequestInput,
    CreatePartnerAppCredentialJWKSURLRequestInput,
    CreatePartnerAppCredentialWorkloadIdentityRequestInput
} from '../declarations/types-9.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdatePartnerAppRequestInput } from '../declarations/types-59.js';
export {
    makeCreatePartnerAppCredentialJWKSURLRequest,
    makeCreatePartnerAppCredentialPublicKeyRequest,
    makeCreatePartnerAppCredentialRequest,
    makeCreatePartnerAppCredentialWorkloadIdentityRequest,
    makeCreatePartnerAppRequest
} from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export {
    makePartnerAppCredentialJWKSURLRequest,
    makePartnerAppCredentialPublicKeyRequest,
    makePartnerAppCredentialWorkloadIdentityRequest,
    makePartnerAppPermissionManifestEntryRequest
} from '../declarations/types-70.js';
export { makeRotatePartnerAppSecretRequest } from '../declarations/types-72.js';
export { makeUpdatePartnerAppRequest } from '../declarations/types-74.js';
export { makeWorkloadIdentityClaimConditionRequest } from '../declarations/types-75.js';
export interface PartnerAppsResource {
    /**
 * Creates a partner app owned by the authenticated merchant. A live API key or a live dashboard
 * session is required.
 *
 * `POST /v1/partner-apps`
 * @see https://developers.withflintpay.com/docs/api/partner-apps#createPartnerApp
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.create({default_requested_permissions: ["manage_orders"], name: "Acme
 * Commerce Plugin", permission_manifest: [{description: "Read and update Flint orders for
 * installed merchants.", permission_id: "manage_orders", required_scopes: ["commerce.orders.read",
 * "commerce.orders.write"], title: "Manage orders"}, {description: "Read and update customer
 * records for installed merchants.", optional: true, permission_id: "manage_customers",
 * required_scopes: ["customers.read", "customers.write"], title: "Manage customers"},
 * {description: "Read product, variant, bundle, and SKU lookup catalog records.", optional: true,
 * permission_id: "read_catalog", required_scopes: ["commerce.products.read",
 * "commerce.bundles.read", "commerce.catalog.read"], title: "Read catalog"}, {description: "Create
 * and update bundle catalog records for installed merchants.", optional: true, permission_id:
 * "manage_bundles", required_scopes: ["commerce.bundles.write"], title: "Manage bundles"}],
 * redirect_uris: ["https://plugins.acme.com/flint/oauth/callback",
 * "http://localhost:3000/flint/oauth/callback"]}, { idempotencyKey: idempotencyKey })
 */
    create(params: PartnerAppsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppWithSecret, PartnerAppWithSecretResponse>>;
    /**
 * Registers an immutable public key, JWKS URL, or workload identity for client assertion
 * authentication. An app can have at most 20 active credentials. Dashboard callers need fresh
 * identity verification. Replace a credential by creating a new one, then removing the old one.
 *
 * `POST /v1/partner-apps/{partner_app_id}/credentials`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#createPartnerAppCredential
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.createCredential("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Production
 * signing key", public_key: {jwk: {crv: "P-256", kid: "production-key", kty: "EC", x:
 * "axfR8uEsQkf4vOblY6RA8ncDfYEt6zOg9KE5RdiYwpY", y:
 * "T-NC4v4af5uO5-tKfA-eFivOM1drMV7Oy7ZAaDe_UfU"}}, type: "public_key"}, { idempotencyKey:
 * idempotencyKey })
 */
    createCredential(partner_app_id: InputValue<string>, params: PartnerAppsCreateCredentialParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppCredential, PartnerAppCredentialResponse>>;
    /**
 * Archives a partner app (soft delete). The app stays readable with status archived; it cannot be
 * installed, exchange tokens, or receive events, and its client ID is never reused. Revoke every
 * active install first; pending installs are revoked with the app. Delete the app’s webhook
 * endpoints separately.
 *
 * `DELETE /v1/partner-apps/{partner_app_id}`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#deletePartnerApp
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.delete("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(partner_app_id: InputValue<string>, params?: PartnerAppsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerApp, PartnerAppResponse>>;
    /**
 * Soft-removes the credential and immediately stops its use for client authentication. The
 * credential remains readable. Removing an already removed credential returns it unchanged.
 *
 * `DELETE /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`
 * @param partner_app_id Flint partner app ID.
 * @param partner_app_credential_id Flint partner app credential ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#deletePartnerAppCredential
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.deleteCredential("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "pacr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    deleteCredential(partner_app_id: InputValue<string>, partner_app_credential_id: InputValue<string>, params?: PartnerAppsDeleteCredentialParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppCredential, PartnerAppCredentialResponse>>;
    /**
 * Returns a single partner app owned by the authenticated merchant.
 *
 * `GET /v1/partner-apps/{partner_app_id}`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#getPartnerApp
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerApps.get("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(partner_app_id: InputValue<string>, params?: PartnerAppsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PartnerApp, PartnerAppResponse>>;
    /**
 * Returns a credential, including a removed credential.
 *
 * `GET /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`
 * @param partner_app_id Flint partner app ID.
 * @param partner_app_credential_id Flint partner app credential ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#getPartnerAppCredential
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerApps.getCredential("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "pacr_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getCredential(partner_app_id: InputValue<string>, partner_app_credential_id: InputValue<string>, params?: PartnerAppsGetCredentialParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PartnerAppCredential, PartnerAppCredentialResponse>>;
    /**
 * Returns a single install for the installing merchant or the partner app owner.
 *
 * `GET /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}`
 * @param partner_app_id Flint partner app ID.
 * @param partner_app_install_id Flint partner app install ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#getPartnerAppInstall
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerApps.getInstall("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getInstall(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: PartnerAppsGetInstallParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PartnerAppInstall, PartnerAppInstallResponse>>;
    /**
 * Lists active and removed credentials, ordered by partner_app_credential_id ascending. Default
 * order: partner_app_credential_id ascending; this key uniquely orders the results.
 *
 * `GET /v1/partner-apps/{partner_app_id}/credentials`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerAppCredentials
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerApps.listCredentials("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listCredentials(partner_app_id: InputValue<string>, params?: PartnerAppsListCredentialsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PartnerAppCredentialListResponse, PartnerAppCredentialListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerAppCredentials
     */
    listCredentialsPages(partner_app_id: InputValue<string>, params?: PartnerAppsListCredentialsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PartnerAppCredentialListResponse, PartnerAppCredentialListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerAppCredentials
     */
    listCredentialsItems(partner_app_id: InputValue<string>, params?: PartnerAppsListCredentialsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PartnerAppCredential>;
    /**
 * Returns installs for a partner app owned by the authenticated merchant. Default order:
 * partner_app_install_id ascending; this key uniquely orders the results.
 *
 * `GET /v1/partner-apps/{partner_app_id}/installs`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerAppInstalls
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerApps.listInstalls("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listInstalls(partner_app_id: InputValue<string>, params?: PartnerAppsListInstallsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PartnerAppInstallListResponse, PartnerAppInstallListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerAppInstalls
     */
    listInstallsPages(partner_app_id: InputValue<string>, params?: PartnerAppsListInstallsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PartnerAppInstallListResponse, PartnerAppInstallListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerAppInstalls
     */
    listInstallsItems(partner_app_id: InputValue<string>, params?: PartnerAppsListInstallsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PartnerAppInstall>;
    /**
 * Returns partner apps owned by the authenticated merchant. Default order: partner_app_id
 * ascending; this key uniquely orders the results.
 *
 * `GET /v1/partner-apps`
 * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerApps
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerApps.list()
 */
    list(params?: PartnerAppsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PartnerAppListResponse, PartnerAppListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerApps
     */
    listPages(params?: PartnerAppsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PartnerAppListResponse, PartnerAppListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerApps
     */
    listItems(params?: PartnerAppsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PartnerApp>;
    /**
 * The installing merchant or partner app owner can revoke a single test or live environment grant
 * for an install.
 *
 * `POST
 * /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke`
 * @param partner_app_id Flint partner app ID.
 * @param partner_app_install_id Flint partner app install ID.
 * @param environment_grant_id Flint environment grant ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#revokePartnerAppEnvironmentGrant
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.revokeEnvironmentGrant("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV", "egrt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    revokeEnvironmentGrant(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, environment_grant_id: InputValue<string>, params?: PartnerAppsRevokeEnvironmentGrantParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppInstall, PartnerAppInstallResponse>>;
    /**
 * The installing merchant or partner app owner can revoke an install and all of its environment
 * grants.
 *
 * `POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/revoke`
 * @param partner_app_id Flint partner app ID.
 * @param partner_app_install_id Flint partner app install ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#revokePartnerAppInstall
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.revokeInstall("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    revokeInstall(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: PartnerAppsRevokeInstallParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppInstall, PartnerAppInstallResponse>>;
    /**
 * Issues a new client secret, returned once. The previous secret keeps working until
 * previous_secret_expires_at: 24 hours by default, or the time in expire_previous_secret_at, up to
 * 7 days. Send a time at or before now to stop the previous secret immediately, for example when
 * it leaked. Rotating again during an overlap ends the older secret at once.
 *
 * `POST /v1/partner-apps/{partner_app_id}/rotate-secret`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#rotatePartnerAppSecret
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.rotateSecret("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    rotateSecret(partner_app_id: InputValue<string>, params?: PartnerAppsRotateSecretParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppWithRotatedSecret, RotatePartnerAppSecretResponse>>;
    /**
 * Updates a partner app owned by the authenticated merchant. Send only the fields to change.
 * permission_manifest replaces the whole manifest and requires expected_version. An existing
 * permission can drop scopes but not gain them; removing or narrowing a permission narrows
 * existing environment grants immediately, and tokens issued with the removed scopes stop working.
 * Adding a permission changes no install until the merchant authorizes again.
 *
 * `PATCH /v1/partner-apps/{partner_app_id}`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#updatePartnerApp
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.update("papp_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Example integration"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(partner_app_id: InputValue<string>, params: PartnerAppsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerApp, PartnerAppResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly partnerApps: PartnerAppsResource;
}
