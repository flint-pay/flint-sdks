import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { MerchantSignup, MerchantSignupListResponse } from '../declarations/types-37.js';
import type {
    MerchantSignupResponse,
    MerchantSignupWithAuthorizationCodes,
    MerchantSignupWithAuthorizationCodesResponse,
    MerchantSignupsCancelParams,
    MerchantSignupsCreateParams,
    MerchantSignupsGetParams,
    MerchantSignupsListParams,
    MerchantSignupsResendCodeParams,
    MerchantSignupsRotateAuthorizationCodesParams,
    MerchantSignupsVerifyParams
} from '../declarations/types-38.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    MerchantSignupsCancelParams,
    MerchantSignupResponse,
    MerchantSignupsCreateParams,
    MerchantSignupsGetParams,
    MerchantSignupsListParams,
    MerchantSignupsResendCodeParams,
    MerchantSignupsRotateAuthorizationCodesParams,
    MerchantSignupWithAuthorizationCodes,
    MerchantSignupWithAuthorizationCodesResponse,
    MerchantSignupsVerifyParams,
    MerchantSignupVersionRequestInput,
    MerchantSignupTerms,
    MerchantSignupTermsAcceptance,
    MerchantSignupTermsAcceptanceRequestInput,
    MerchantSignupTermsAcceptanceRequest
} from '../declarations/types-38.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type {
    MerchantSignup,
    MerchantSignupListResponse,
    MerchantSignupOwner,
    MerchantSignupPermission,
    MerchantSignupOwnerRequestInput
} from '../declarations/types-37.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { PlatformFeeCap } from '../declarations/types-49.js';
export type { MoneyValue, NextAction } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { CreateMerchantSignupRequestInput } from '../declarations/types-10.js';
export type { VerifyMerchantSignupRequestInput } from '../declarations/types-69.js';
export { makeCreateMerchantSignupRequest } from '../declarations/types-73.js';
export {
    makeMerchantSignupOwnerRequest,
    makeMerchantSignupTermsAcceptanceRequest,
    makeMerchantSignupVersionRequest,
    makeMoneyValue
} from '../declarations/types-78.js';
export { makeVerifyMerchantSignupRequest } from '../declarations/types-85.js';
export interface MerchantSignupsResource {
    /**
 * Cancels a `pending` signup and voids its code, so a code email still queued is never sent. A
 * canceled signup returns 409 ACTION_NOT_ALLOWED with reason already_applied; any other status,
 * including a signup Flint is completing after verify, returns reason unsupported_state with
 * current_status. Live only: test credentials get 403 FORBIDDEN with reason live_mode_required,
 * and a key linked to a partner app install gets 403 FORBIDDEN with reason linked_key_not_allowed.
 * Partner app tokens can't call it.
 *
 * `POST /v1/merchant-signups/{merchant_signup_id}/cancel`
 * @param merchant_signup_id ID of the merchant signup.
 * @see https://developers.withflintpay.com/docs/api/merchant-signups#cancelMerchantSignup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantSignups.cancel("msu_01KEZF7C00SRGYRMBPKRKW8V9J", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(merchant_signup_id: InputValue<string>, params?: MerchantSignupsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<MerchantSignup, MerchantSignupResponse>>;
    /**
 * Starts creating a merchant for an owner: Flint emails the owner a code that names your app, the
 * business, the permissions and fee cap you request, and Flint's merchant terms. Show the owner
 * Flint's terms checkbox in your form, collect the code, and send both to verify. Flint checks, in
 * order and before any email: the partner app is yours and active (404 RESOURCE_NOT_FOUND at
 * partner_app_id, or 409 ACTION_NOT_ALLOWED with reason unsupported_state for a deleted app);
 * every requested_permission_ids value is in the manifest (400 INVALID_VALUE at that item); the
 * app has a merchant_action_url, and its name and permission titles hold no link (409
 * ACTION_NOT_ALLOWED with reason configuration_required); the app's live create_merchants
 * capability; then the quotas. Until create_merchants is active, modes including live are refused
 * with 409 ACTION_NOT_ALLOWED, capability create_merchants, param modes and the capability's
 * inactive reason, and an owner outside your merchant's team is refused the same way with param
 * owner.email. Quotas: 20 signups per app per UTC day before create_merchants is active and 1,000
 * after (409 LIMIT_REACHED with reason merchant_signups, limit and resets_at); 3 codes per owner
 * mailbox per 15 minutes across every app (429 RATE_LIMIT_EXCEEDED with Retry-After) and 10 per 24
 * hours (409 LIMIT_REACHED with reason verification_codes). Plus-addresses count as their mailbox.
 * The response never says whether the email already has a Flint login. Live only: test credentials
 * get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app install gets
 * 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it.
 *
 * `POST /v1/merchant-signups`
 * @see https://developers.withflintpay.com/docs/api/merchant-signups#createMerchantSignup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantSignups.create({business_name: "Tidewater Yoga", code_challenge:
 * "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM", code_challenge_method: "S256",
 * external_reference_id: "studio_8812", modes: ["test", "live"], owner: {email:
 * "maya@tidewateryoga.example", first_name: "Maya", last_name: "Okafor"}, partner_app_id:
 * "papp_01KEZF7C00D8DXK5AXR7NPRJ0J", requested_permission_ids: ["setup_payments", "sell"],
 * sandbox_initial_onboarding: "not_started"}, { idempotencyKey: idempotencyKey })
 */
    create(params: MerchantSignupsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<MerchantSignup, MerchantSignupResponse>>;
    /**
 * Returns one of your partner apps' signups. A completed signup stays readable, including the
 * owner's name and email, after the merchant disconnects the app. Live only: test credentials get
 * 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app install gets 403
 * FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it.
 *
 * `GET /v1/merchant-signups/{merchant_signup_id}`
 * @param merchant_signup_id ID of the merchant signup.
 * @see https://developers.withflintpay.com/docs/api/merchant-signups#getMerchantSignup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.merchantSignups.get("msu_01KEZF7C00SRGYRMBPKRKW8V9J")
 */
    get(merchant_signup_id: InputValue<string>, params?: MerchantSignupsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<MerchantSignup, MerchantSignupResponse>>;
    /**
 * Lists the signups of your partner apps, newest first, then by `merchant_signup_id`. A merchant
 * that owns no app gets an empty list. Live only: test credentials get 403 FORBIDDEN with reason
 * live_mode_required, and a key linked to a partner app install gets 403 FORBIDDEN with reason
 * linked_key_not_allowed. Partner app tokens can't call it. Default order: created_at descending,
 * then merchant_signup_id descending.
 *
 * `GET /v1/merchant-signups`
 * @see https://developers.withflintpay.com/docs/api/merchant-signups#listMerchantSignups
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.merchantSignups.list()
 */
    list(params?: MerchantSignupsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<MerchantSignupListResponse, MerchantSignupListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/merchant-signups#listMerchantSignups
     */
    listPages(params?: MerchantSignupsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<MerchantSignupListResponse, MerchantSignupListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/merchant-signups#listMerchantSignups
     */
    listItems(params?: MerchantSignupsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<MerchantSignup>;
    /**
 * Emails the owner a new code for a `pending` signup. The new code replaces the old one and resets
 * the attempt count; a code email still queued for the old code is never sent. A signup sends at
 * most 3 codes (409 LIMIT_REACHED with reason verification_codes and limit 3), within the
 * per-mailbox send caps of create. The app's create_merchants capability is checked again, so a
 * paused platform sends no more codes. Any other status returns 409 ACTION_NOT_ALLOWED with reason
 * unsupported_state. It is a message operation, not a lifecycle action, so supported_actions never
 * lists it. Live only: test credentials get 403 FORBIDDEN with reason live_mode_required, and a
 * key linked to a partner app install gets 403 FORBIDDEN with reason linked_key_not_allowed.
 * Partner app tokens can't call it.
 *
 * `POST /v1/merchant-signups/{merchant_signup_id}/resend-code`
 * @param merchant_signup_id ID of the merchant signup.
 * @see https://developers.withflintpay.com/docs/api/merchant-signups#resendMerchantSignupCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantSignups.resendCode("msu_01KEZF7C00SRGYRMBPKRKW8V9J", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    resendCode(merchant_signup_id: InputValue<string>, params?: MerchantSignupsResendCodeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<MerchantSignup, MerchantSignupResponse>>;
    /**
 * Mints new authorization codes for a completed signup's grants that were never exchanged, bound
 * to the signup's code_challenge, and supersedes the earlier ones. Use it when the verify response
 * was lost or the codes expired before you exchanged them. It works only within 24 hours of
 * completed_at and while nothing else has happened to the install: any revoke, or an authorization
 * of the app on the consent screen, ends it for good. Refused with 409 ACTION_NOT_ALLOWED: reason
 * already_applied once every grant has been exchanged (mint partner app tokens with
 * grant_type=client_credentials instead), unsupported_state when the signup isn't completed, and
 * not_offered once the window or the install's state ends rotation; the owner then reauthorizes on
 * the consent screen. An idempotent replay returns the signup without the codes. It is a code
 * rotation, not a lifecycle action, so supported_actions never lists it. Live only: test
 * credentials get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app
 * install gets 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it.
 *
 * `POST /v1/merchant-signups/{merchant_signup_id}/rotate-authorization-codes`
 * @param merchant_signup_id ID of the merchant signup.
 * @see
 * https://developers.withflintpay.com/docs/api/merchant-signups#rotateMerchantSignupAuthorizationCodes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantSignups.rotateAuthorizationCodes("msu_01KEZF7C00SRGYRMBPKRKW8V9J", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    rotateAuthorizationCodes(merchant_signup_id: InputValue<string>, params?: MerchantSignupsRotateAuthorizationCodesParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<MerchantSignupWithAuthorizationCodes, MerchantSignupWithAuthorizationCodesResponse>>;
    /**
 * Uses the owner's code and their acceptance of Flint's merchant terms, then creates the merchant,
 * installs the app on it in the signup's modes, and returns one authorization code per mode.
 * Exchange each at `client.oauth.exchangeToken` with the code_verifier for the signup's
 * code_challenge and without redirect_uri, within 5 minutes. Checks, in order, before any effect:
 * the signup is pending (409 ACTION_NOT_ALLOWED with reason already_applied when completed,
 * unsupported_state with current_status otherwise); the app's create_merchants capability again;
 * the attempt caps (409 LIMIT_REACHED with reason verification_attempts: 5 wrong codes use up a
 * code, and wrong codes for one owner mailbox are capped at 10 per 24 hours and 30 per 7 days,
 * with resets_at); the code. A wrong, expired or replaced code is 400 INVALID_REQUEST with
 * INVALID_VALUE at verification_code. After the code matches, an owner Flint can't use is refused
 * with 409 ACTION_NOT_ALLOWED and reason owner_identity_conflict (the owner contacts Flint
 * support, then you resend a code or start a new signup), and an owner who already owns 10 active
 * merchants with 409 LIMIT_REACHED and reason owned_merchants. Completion is resumable. Once the
 * code is used, Flint finishes creating the merchant even if this request fails; a failure returns
 * 503 SERVICE_UNAVAILABLE. Send verify again, with the same Idempotency-Key or a new one and the
 * same code, to wait for or continue the same completion and get the result. An idempotent replay
 * returns the signup without the codes: mint new ones with rotate-authorization-codes. Live only:
 * test credentials get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner
 * app install gets 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call
 * it.
 *
 * `POST /v1/merchant-signups/{merchant_signup_id}/verify`
 * @param merchant_signup_id ID of the merchant signup.
 * @see https://developers.withflintpay.com/docs/api/merchant-signups#verifyMerchantSignup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantSignups.verify("msu_01KEZF7C00SRGYRMBPKRKW8V9J", {expected_version: 1,
 * terms_acceptance: {ip_address: "203.0.113.7", merchant_terms_version: "2026-10-01", user_agent:
 * "Mozilla/5.0 (Macintosh; Intel Mac OS X 15_1) AppleWebKit/605.1.15"}, verification_code:
 * "K7QM-4TXD"}, { idempotencyKey: idempotencyKey })
 */
    verify(merchant_signup_id: InputValue<string>, params: MerchantSignupsVerifyParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<MerchantSignupWithAuthorizationCodes, MerchantSignupWithAuthorizationCodesResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchantSignups: MerchantSignupsResource;
}
