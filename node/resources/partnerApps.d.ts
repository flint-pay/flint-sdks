import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    PartnerApp,
    PartnerAppCredential,
    PartnerAppCredentialListResponse,
    PartnerAppCredentialResponse,
    PartnerAppInstall,
    PartnerAppInstallListResponse,
    PartnerAppInstallResponse,
    PartnerAppInstallWithEndedAccess,
    PartnerAppInstallWithEndedAccessResponse,
    PartnerAppListResponse,
    PartnerAppResponse,
    PartnerAppWithRotatedSecret,
    PartnerAppWithSecret,
    PartnerAppWithSecretResponse,
    PartnerAppsAcceptPlatformTermsParams,
    PartnerAppsCreateCredentialParams,
    PartnerAppsCreateParams
} from '../declarations/types-43.js';
import type {
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
} from '../declarations/types-44.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { RotatePartnerAppSecretResponse } from '../declarations/types-58.js';
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
    PartnerAppsAcceptPlatformTermsParams,
    PartnerApp,
    PartnerAppResponse,
    PartnerAppsCreateParams,
    PartnerAppWithSecret,
    PartnerAppWithSecretResponse,
    PartnerAppsCreateCredentialParams,
    PartnerAppCredential,
    PartnerAppCredentialResponse,
    PartnerAppInstall,
    PartnerAppInstallResponse,
    PartnerAppCredentialListResponse,
    PartnerAppInstallListResponse,
    PartnerAppListResponse,
    PartnerAppInstallWithEndedAccess,
    PartnerAppInstallWithEndedAccessResponse,
    PartnerAppWithRotatedSecret,
    PartnerAppMerchantActionRouting,
    PartnerAppPaymentSplits,
    PartnerAppPermissionManifestEntry,
    PartnerAppPlatform,
    PartnerAppPlatformCapability,
    PartnerAppPlatformCurrentTerms,
    PartnerAppPlatformLimits,
    PartnerAppPlatformUsage,
    PartnerAppPlatformReserve,
    PartnerAppPlatformTermsAcceptance,
    PartnerAppPlatformProfile,
    PartnerAppPaymentSplitsRequestInput,
    PartnerAppPermissionManifestEntryRequestInput,
    PartnerAppPlatformProfileRequestInput,
    PartnerAppCredentialPublicKeyRequestInput,
    PartnerAppCredentialJWKSURLRequestInput,
    PartnerAppCredentialWorkloadIdentityRequestInput,
    PartnerAppCredentialJWKSURL,
    PartnerAppCredentialPublicKey,
    PartnerAppCredentialWorkloadIdentity,
    PartnerAppMerchantReadiness,
    PartnerAppMerchantReadinessAxis,
    PartnerAppCredentialPublicKeyRequest
} from '../declarations/types-43.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type {
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
    PartnerEnvironmentGrant,
    PartnerEnvironmentGrantPaymentSplits
} from '../declarations/types-44.js';
export type {
    _SdkWithoutIdempotency,
    WorkloadIdentityClaimConditionRequestInput,
    WorkloadIdentityClaimCondition
} from '../declarations/types-69.js';
export type { RotatePartnerAppSecretResponse, RotatePartnerAppSecretRequestInput } from '../declarations/types-58.js';
export type { ClientOptions, CheckoutSessionsListCustomerVerificationsParams } from '../declarations/types-6.js';
export type { AcceptPartnerAppPlatformTermsRequestInput, AcceptPartnerAppPlatformTermsRequest } from '../declarations/types-0.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-38.js';
export type { ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-54.js';
export type { PlatformFeeCap, PlatformFeeCapRequestInput } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type {
    CreatePartnerAppRequestInput,
    CreatePartnerAppCredentialRequestInput,
    CreatePartnerAppCredentialPublicKeyRequestInput,
    CreatePartnerAppCredentialJWKSURLRequestInput,
    CreatePartnerAppCredentialWorkloadIdentityRequestInput
} from '../declarations/types-11.js';
export type { UpdatePartnerAppRequestInput } from '../declarations/types-67.js';
export { makeAcceptPartnerAppPlatformTermsRequest } from '../declarations/types-69.js';
export {
    makeCreatePartnerAppCredentialJWKSURLRequest,
    makeCreatePartnerAppCredentialPublicKeyRequest,
    makeCreatePartnerAppCredentialRequest,
    makeCreatePartnerAppCredentialWorkloadIdentityRequest,
    makeCreatePartnerAppRequest
} from '../declarations/types-73.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export {
    makePartnerAppCredentialJWKSURLRequest,
    makePartnerAppCredentialPublicKeyRequest,
    makePartnerAppCredentialWorkloadIdentityRequest,
    makePartnerAppPaymentSplitsRequest,
    makePartnerAppPermissionManifestEntryRequest,
    makePartnerAppPlatformProfileRequest
} from '../declarations/types-79.js';
export { makePlatformFeeCapRequest } from '../declarations/types-80.js';
export { makeRotatePartnerAppSecretRequest } from '../declarations/types-81.js';
export { makeUpdatePartnerAppRequest } from '../declarations/types-83.js';
export { makeWorkloadIdentityClaimConditionRequest } from '../declarations/types-84.js';
export interface PartnerAppsResource {
    /**
 * Records that the authenticated credential accepted the current version of Flint's platform terms
 * for the app: the signed-in user for a Dashboard session, or the API key. Flint also records the
 * time, IP address and user agent. supported_actions lists accept_platform_terms while the current
 * version isn't accepted. Accepting a version the app already accepted returns 409
 * ACTION_NOT_ALLOWED with reason already_applied. When this meets the app's last platform
 * requirement, platform.status becomes pending_review in the same write and Flint sends
 * partner_app.updated.
 *
 * `POST /v1/partner-apps/{partner_app_id}/accept-platform-terms`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#acceptPartnerAppPlatformTerms
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.acceptPlatformTerms("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV", {expected_version: 1,
 * platform_terms_version: "2026-11-12"}, { idempotencyKey: idempotencyKey })
 */
    acceptPlatformTerms(partner_app_id: InputValue<string>, params: PartnerAppsAcceptPlatformTermsParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerApp, PartnerAppResponse>>;
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
 * client.partnerApps.create({name: "example", permission_manifest: [], redirect_uris: []}, {
 * idempotencyKey: idempotencyKey })
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
 * client.partnerApps.createCredential("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV", {name: "Production
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
 * client.partnerApps.delete("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV", {}, { idempotencyKey:
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
 * client.partnerApps.deleteCredential("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV",
 * "pacr_01KEZF7C005RDK44XFG5WF94BB", {}, { idempotencyKey: idempotencyKey })
 */
    deleteCredential(partner_app_id: InputValue<string>, partner_app_credential_id: InputValue<string>, params?: PartnerAppsDeleteCredentialParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppCredential, PartnerAppCredentialResponse>>;
    /**
 * Returns a single partner app owned by the authenticated merchant. A live partner app token can
 * read its own app, without Flint-Merchant-Id or Flint-Sandbox-Id; another app's ID returns 404 as
 * an unknown ID does.
 *
 * `GET /v1/partner-apps/{partner_app_id}`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#getPartnerApp
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerApps.get("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV")
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
 * client.partnerApps.getCredential("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV",
 * "pacr_01KEZF7C005RDK44XFG5WF94BB")
 */
    getCredential(partner_app_id: InputValue<string>, partner_app_credential_id: InputValue<string>, params?: PartnerAppsGetCredentialParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PartnerAppCredential, PartnerAppCredentialResponse>>;
    /**
 * Returns a single install for the installing merchant, the partner app owner, or a live partner
 * app token for the app. A merchant-bound token reads only its merchant's install; other installs
 * return 404. For the app’s owner and its tokens, each active grant that can read the merchant
 * profile carries `merchant_readiness`, the installed merchant’s payments and payouts readiness in
 * that environment.
 *
 * `GET /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}`
 * @param partner_app_id Flint partner app ID.
 * @param partner_app_install_id Flint partner app install ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#getPartnerAppInstall
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerApps.getInstall("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV",
 * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ")
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
 * client.partnerApps.listCredentials("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV")
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
 * Returns installs for a partner app owned by the authenticated merchant. Each active grant that
 * can read the merchant profile carries `merchant_readiness`: whether the installed merchant can
 * take payments and receive payouts in that environment, and how many requirements are due. Use it
 * to find merchants who still need to finish onboarding without exchanging each install’s token. A
 * live partner app token can list its own app's installs, with the same filters and summaries as
 * the owner; a merchant-bound token lists at most its merchant's install. Default order:
 * partner_app_install_id ascending; this key uniquely orders the results.
 *
 * `GET /v1/partner-apps/{partner_app_id}/installs`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#listPartnerAppInstalls
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerApps.listInstalls("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV")
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
 * The installing merchant, the partner app owner, or a live partner app token for the app can
 * revoke a single test or live environment grant for an install. A live token can revoke a test
 * grant. A merchant-bound token can revoke only its merchant's grants; other installs return 404.
 * This revokes linked API keys and deletes linked webhook endpoints in that environment. Revoking
 * the last grant also revokes the install and ends its remaining links. Unlinked keys and
 * endpoints keep working.
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
 * client.partnerApps.revokeEnvironmentGrant("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV",
 * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ", "egrt_01KEZF7C00MQQDDB7YWGXV3MXY", {}, { idempotencyKey:
 * idempotencyKey })
 */
    revokeEnvironmentGrant(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, environment_grant_id: InputValue<string>, params?: PartnerAppsRevokeEnvironmentGrantParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppInstallWithEndedAccess, PartnerAppInstallWithEndedAccessResponse>>;
    /**
 * The installing merchant, the partner app owner, or a live partner app token for the app can
 * revoke an install and all of its environment grants. A merchant-bound token can revoke only its
 * merchant's install; other installs return 404. The owner and the app's tokens record revoked_by
 * partner_app, and a token records no revoked_by_user_id. This also revokes linked API keys and
 * deletes linked webhook endpoints. Unlinked keys and endpoints keep working. Reinstalling does
 * not restore ended access.
 *
 * `POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/revoke`
 * @param partner_app_id Flint partner app ID.
 * @param partner_app_install_id Flint partner app install ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#revokePartnerAppInstall
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.revokeInstall("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV",
 * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ", {}, { idempotencyKey: idempotencyKey })
 */
    revokeInstall(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: PartnerAppsRevokeInstallParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppInstallWithEndedAccess, PartnerAppInstallWithEndedAccessResponse>>;
    /**
 * Rotates an existing client secret, returned once. An app without a secret returns 409
 * ACTION_NOT_ALLOWED with reason secret_not_issued. Issue its first secret with
 * `client.partnerApps.update` and client_secret_enabled: true. The previous secret keeps working
 * until previous_secret_expires_at: 24 hours by default, or the time in expire_previous_secret_at,
 * up to 7 days. Send a time at or before now to stop the previous secret immediately, for example
 * when it leaked. Rotating again during an overlap ends the older secret at once.
 *
 * `POST /v1/partner-apps/{partner_app_id}/rotate-secret`
 * @param partner_app_id Flint partner app ID.
 * @see https://developers.withflintpay.com/docs/api/partner-apps#rotatePartnerAppSecret
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerApps.rotateSecret("papp_01KEZF7C00Y8VMXYZ1GNPP3WHV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    rotateSecret(partner_app_id: InputValue<string>, params?: PartnerAppsRotateSecretParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppWithRotatedSecret, RotatePartnerAppSecretResponse>>;
    /**
 * Updates a partner app owned by the authenticated merchant. Send only the fields to change.
 * permission_manifest replaces the whole manifest and requires expected_version. An existing
 * permission can drop scopes but not gain them; removing or narrowing a permission narrows
 * existing environment grants immediately, and tokens issued with the removed scopes stop working.
 * Adding a permission changes no install until the merchant authorizes again. Setting
 * client_secret_enabled to true issues a first secret when secret authentication is disabled; only
 * this response and its same-credential idempotent replay return that secret. Setting false ends
 * current and previous secrets immediately. A Dashboard session needs fresh identity verification
 * to enable secret authentication, including on replay.
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
    update(partner_app_id: InputValue<string>, params: PartnerAppsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppWithSecret, PartnerAppWithSecretResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly partnerApps: PartnerAppsResource;
}
