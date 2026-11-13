import type { WithResponseInfo } from '../runtime.js';
import type { AccessLink, AccessLinkResponse } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    OnboardingAdvanceParams,
    OnboardingAdvanceRequest,
    OnboardingAdvanceRequestInput,
    OnboardingCreateAccessLinkParams,
    OnboardingGetStateParams,
    OnboardingProfile,
    OnboardingProfileRequest,
    OnboardingProfileRequestInput,
    OnboardingSessionAuthContext,
    OnboardingStartParams,
    OnboardingStartRequestInput,
    OnboardingStartResponse,
    OnboardingStartResult,
    OnboardingState,
    OnboardingStateResponse,
    OnboardingVerifyEmailParams,
    OnboardingVerifyEmailRequest,
    OnboardingVerifyEmailRequestInput,
    OnboardingVerifyEmailResponse,
    OnboardingVerifyEmailResult
} from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-53.js';
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
    OnboardingAdvanceParams,
    OnboardingState,
    OnboardingStateResponse,
    OnboardingCreateAccessLinkParams,
    OnboardingGetStateParams,
    OnboardingStartParams,
    OnboardingStartResult,
    OnboardingStartResponse,
    OnboardingVerifyEmailParams,
    OnboardingVerifyEmailResult,
    OnboardingVerifyEmailResponse,
    OnboardingAdvanceRequest,
    OnboardingAdvanceRequestInput,
    OnboardingProfile,
    OnboardingProfileRequest,
    OnboardingProfileRequestInput,
    OnboardingSessionAuthContext,
    OnboardingStartRequestInput,
    OnboardingVerifyEmailRequest,
    OnboardingVerifyEmailRequestInput
} from '../declarations/types-39.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { AccessLink, AccessLinkResponse, Address } from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ReadinessAction, ReadinessMerchantAccountSession, ReadinessRequirements, ReadinessAxis } from '../declarations/types-52.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { NextAction, MoneyValue } from '../declarations/types-38.js';
export type { CreateOnboardingAccessLinkRequestInput, CreateOnboardingAccessLinkRequest } from '../declarations/types-10.js';
export type { Merchant } from '../declarations/types-36.js';
export type { ImageAttachment } from '../declarations/types-27.js';
export type { MetadataMap, MerchantReadiness } from '../declarations/types-37.js';
export type { CapabilityReadiness } from '../declarations/types-4.js';
export type { User } from '../declarations/types-68.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeCreateOnboardingAccessLinkRequest } from '../declarations/types-73.js';
export {
    makeMoneyValue,
    makeOnboardingAdvanceRequest,
    makeOnboardingProfileRequest,
    makeOnboardingStartRequest,
    makeOnboardingVerifyEmailRequest
} from '../declarations/types-78.js';
export interface OnboardingResource {
    /**
 * Submits whatever the caller currently knows, re-evaluates onboarding, reconciles onboarding
 * requirements, and returns the next step in the consolidated onboarding state machine. Send an
 * empty JSON object when the current next_step only asks to refresh onboarding requirements. The
 * credential selects the environment; the onboarding session token acts in the merchant's default
 * sandbox. A partner install token can't send profile.email, and in live mode works only while its
 * app's merchant_onboarding platform capability is active; otherwise it gets 409
 * ACTION_NOT_ALLOWED with the reason its platform status gives: platform_onboarding_required,
 * platform_pending_review, platform_rejected, or platform_capability_inactive.
 *
 * `POST /v1/onboarding/advance`
 * @see https://developers.withflintpay.com/docs/api/onboarding#advanceOnboarding
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.advance(undefined, { idempotencyKey: idempotencyKey })
 */
    advance(params?: OnboardingAdvanceParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<OnboardingState, OnboardingStateResponse>>;
    /**
 * Creates a link into Flint-hosted onboarding for the authenticated merchant environment, for
 * products that don't embed Connect.js. The page opens Account Onboarding and Notification Banner
 * in the credential's mode, names the business, and for a partner app install token names the app.
 * The link opens once, within 5 minutes, into a browser session of at most an hour, and every
 * refresh of the page rechecks the credential that created it: revoking the API key, CLI login, or
 * install, or authorizing the app again, ends the page. When the person exits or finishes, or
 * opens a used or expired link, the page offers one action: back to return_url. The url is a
 * bearer credential that lets whoever opens it enter identity and bank details for the merchant.
 * Create it only for a person you just authenticated and authorized for this merchant, redirect
 * them to it at once, and never email or log it. Takes the credentials of
 * `client.merchantAccountSessions.create`. A partner app install token works in live mode only
 * while its app's merchant_onboarding platform capability is active; otherwise it gets 409
 * ACTION_NOT_ALLOWED with the reason its platform status gives: platform_onboarding_required,
 * platform_pending_review, platform_rejected, or platform_capability_inactive. A same-key,
 * same-input retry replays the original link for 24 hours without extending its lifetime or
 * replenishing its open. Use a new key for a new link.
 *
 * `POST /v1/onboarding/access-links`
 * @see
 * https://developers.withflintpay.com/docs/api/merchant-account-sessions#createOnboardingAccessLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.createAccessLink({return_url: "https://classboard.example/settings/payments"},
 * { idempotencyKey: idempotencyKey })
 */
    createAccessLink(params: OnboardingCreateAccessLinkParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<AccessLink, AccessLinkResponse>>;
    /**
 * Returns the consolidated onboarding state machine, including the primary next step for agents or
 * humans. This endpoint is read-only. The credential selects the environment; the onboarding
 * session token acts in the merchant's default sandbox.
 *
 * `GET /v1/onboarding/state`
 * @see https://developers.withflintpay.com/docs/api/onboarding#getOnboardingState
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.onboarding.getState()
 */
    getState(params?: OnboardingGetStateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<WithResponseInfo<OnboardingState, OnboardingStateResponse>>;
    /**
 * Starts the consolidated onboarding flow by accepting a verification email for asynchronous
 * delivery and returning a temporary verification token. Success does not confirm email delivery.
 *
 * `POST /v1/onboarding/start`
 * @see https://developers.withflintpay.com/docs/api/onboarding#startOnboarding
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.start({email: "owner@example.com", first_name: "Jane", last_name: "Doe"}, {
 * idempotencyKey: idempotencyKey })
 */
    start(params: OnboardingStartParams, options?: RequestOptions<never>): Promise<WithResponseInfo<OnboardingStartResult, OnboardingStartResponse>>;
    /**
 * Verifies the emailed code, provisions the Flint user and merchant if needed, and returns an
 * onboarding session token. The token expires at onboarding_session_expires_at and cannot be
 * refreshed. Verify the email again to get a new one. Read `client.onboarding.getState` next.
 *
 * `POST /v1/onboarding/verify-email`
 * @see https://developers.withflintpay.com/docs/api/onboarding#verifyOnboardingEmail
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.verifyEmail({verification_code: "482193", verification_token: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    verifyEmail(params: OnboardingVerifyEmailParams, options?: RequestOptions<never>): Promise<WithResponseInfo<OnboardingVerifyEmailResult, OnboardingVerifyEmailResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly onboarding: OnboardingResource;
}
