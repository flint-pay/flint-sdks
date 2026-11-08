import type { WithResponseInfo } from '../runtime.js';
import type { APIKeyWithSecret } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { CreateAPIKeyResponse } from '../declarations/types-7.js';
import type {
    OnboardingAdvanceParams,
    OnboardingAdvanceRequest,
    OnboardingAdvanceRequestInput,
    OnboardingCreateAPIKeyParams,
    OnboardingGetStateParams,
    OnboardingProfile,
    OnboardingProfileRequest,
    OnboardingProfileRequestInput,
    OnboardingStartParams,
    OnboardingStartRequest,
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
} from '../declarations/types-38.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
    OnboardingCreateAPIKeyParams,
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
    OnboardingStartRequest,
    OnboardingStartRequestInput,
    OnboardingVerifyEmailRequest,
    OnboardingVerifyEmailRequestInput
} from '../declarations/types-38.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { APIKeyWithSecret, AuthMode, APIKey, Address } from '../declarations/types-0.js';
export type { CreateAPIKeyResponse } from '../declarations/types-7.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { Credentials } from '../declarations/types-13.js';
export type { ReadinessAction, ReadinessMerchantAccountSession, ReadinessRequirements, ReadinessAxis } from '../declarations/types-49.js';
export type { NextAction, MoneyValue } from '../declarations/types-37.js';
export type { DeveloperInitialAPIKeyRequestInput, DisputesAcceptParams, DeveloperInitialAPIKeyRequest } from '../declarations/types-22.js';
export type { Merchant, MetadataMap, MerchantReadiness } from '../declarations/types-36.js';
export type { ImageAttachment } from '../declarations/types-27.js';
export type { CapabilityReadiness } from '../declarations/types-4.js';
export type { User } from '../declarations/types-65.js';
export { makeDeveloperInitialAPIKeyRequest } from '../declarations/types-72.js';
export {
    makeMoneyValue,
    makeOnboardingAdvanceRequest,
    makeOnboardingProfileRequest,
    makeOnboardingStartRequest,
    makeOnboardingVerifyEmailRequest
} from '../declarations/types-75.js';
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
 * Creates the first long-lived sandbox API key. The credential selects the environment; the
 * onboarding session token acts in the merchant's default sandbox.
 *
 * `POST /v1/onboarding/api-key`
 * @see https://developers.withflintpay.com/docs/api/onboarding#createOnboardingAPIKey
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.createAPIKey({name: "First backend integration", scopes:
 * ["commerce.orders.read", "commerce.orders.write", "customers.read", "customers.write"]}, {
 * idempotencyKey: idempotencyKey })
 */
    createAPIKey(params: OnboardingCreateAPIKeyParams, options?: RequestOptions<"onboarding">): Promise<WithResponseInfo<APIKeyWithSecret, CreateAPIKeyResponse>>;
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
