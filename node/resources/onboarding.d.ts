import type { WithResponseInfo } from '../runtime.js';
import type { APIKeyWithSecret } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { CreateAPIKeyResponse } from '../declarations/types-6.js';
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
    OnboardingStartResponse
} from '../declarations/types-35.js';
import type {
    OnboardingStartResult,
    OnboardingState,
    OnboardingStateResponse,
    OnboardingVerifyEmailParams,
    OnboardingVerifyEmailRequest,
    OnboardingVerifyEmailRequestInput,
    OnboardingVerifyEmailResponse,
    OnboardingVerifyEmailResult
} from '../declarations/types-36.js';
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
    OnboardingAdvanceParams,
    OnboardingCreateAPIKeyParams,
    OnboardingGetStateParams,
    OnboardingStartParams,
    OnboardingStartResponse,
    OnboardingAdvanceRequest,
    OnboardingAdvanceRequestInput,
    OnboardingProfile,
    OnboardingProfileRequest,
    OnboardingProfileRequestInput,
    OnboardingStartRequest,
    OnboardingStartRequestInput,
    NextAction,
    MoneyValue
} from '../declarations/types-35.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type {
    OnboardingState,
    OnboardingStateResponse,
    OnboardingStartResult,
    OnboardingVerifyEmailParams,
    OnboardingVerifyEmailResult,
    OnboardingVerifyEmailResponse,
    OnboardingVerifyEmailRequest,
    OnboardingVerifyEmailRequestInput
} from '../declarations/types-36.js';
export type { APIKeyWithSecret, AuthMode, APIKey, Address } from '../declarations/types-0.js';
export type { CreateAPIKeyResponse } from '../declarations/types-6.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ReadinessAction, ReadinessMerchantAccountSession, ReadinessRequirements, ReadinessAxis } from '../declarations/types-46.js';
export type { ResponseMeta, ResponseWarning, ResourceType } from '../declarations/types-48.js';
export type { DeveloperInitialAPIKeyRequestInput, DeveloperInitialAPIKeyRequest } from '../declarations/types-20.js';
export type { Merchant, MetadataMap, MerchantReadiness } from '../declarations/types-34.js';
export type { ImageAttachment } from '../declarations/types-25.js';
export type { ExpandedOrganizationSummary } from '../declarations/types-21.js';
export type { CapabilityReadiness } from '../declarations/types-4.js';
export type { User } from '../declarations/types-60.js';
export { makeDeveloperInitialAPIKeyRequest } from '../declarations/types-67.js';
export {
    makeMoneyValue,
    makeOnboardingAdvanceRequest,
    makeOnboardingProfileRequest,
    makeOnboardingStartRequest,
    makeOnboardingVerifyEmailRequest
} from '../declarations/types-69.js';
export interface OnboardingResource {
    /**
 * Submits whatever the caller currently knows, re-evaluates onboarding, reconciles onboarding
 * requirements, and returns the next step in the consolidated onboarding state machine. Send an
 * empty JSON object when the current next_step only asks to refresh onboarding requirements. The
 * credential selects the environment; the onboarding session token acts in the merchant's default
 * sandbox.
 *
 * `POST /v1/onboarding/advance`
 * @see https://developers.withflintpay.com/docs/api/onboarding#advanceOnboarding
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.advance({country: "US", profile: {support_email: "help@example.com",
 * website_url: "https://withflintpay.com"}, requested_capabilities: ["accept_card_payments",
 * "receive_payouts"]}, { idempotencyKey: idempotencyKey })
 */
    advance(params: OnboardingAdvanceParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<OnboardingState, OnboardingStateResponse>>;
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
 * Starts the consolidated onboarding flow by emailing a short-lived verification code and
 * returning a temporary verification token.
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
