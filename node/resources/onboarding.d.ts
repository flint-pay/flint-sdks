import type { InputValue } from '../runtime.js';
import type { APIKeyWithSecret } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateAPIKeyResponse } from '../declarations/types-5.js';
import type { DeveloperInitialAPIKeyRequestInput } from '../declarations/types-15.js';
import type {
    OnboardingAdvanceInput,
    OnboardingAdvanceRequest,
    OnboardingAdvanceRequestInput,
    OnboardingCreateAPIKeyInput,
    OnboardingGetStateInput,
    OnboardingProfile,
    OnboardingProfileRequest,
    OnboardingProfileRequestInput,
    OnboardingStartFlowInput,
    OnboardingStartRequest,
    OnboardingStartRequestInput
} from '../declarations/types-31.js';
import type {
    OnboardingStartResponse,
    OnboardingStartResult,
    OnboardingState,
    OnboardingStateResponse,
    OnboardingVerifyEmailCodeInput,
    OnboardingVerifyEmailRequest,
    OnboardingVerifyEmailRequestInput,
    OnboardingVerifyEmailResponse,
    OnboardingVerifyEmailResult
} from '../declarations/types-32.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
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
    OnboardingAdvanceRequestInput,
    OnboardingStartRequestInput,
    OnboardingAdvanceRequest,
    OnboardingProfile,
    OnboardingProfileRequest,
    OnboardingProfileRequestInput,
    OnboardingStartRequest,
    OnboardingAdvanceInput,
    OnboardingCreateAPIKeyInput,
    OnboardingGetStateInput,
    OnboardingStartFlowInput,
    NextAction,
    NextActionMerchantAccountSession,
    MoneyValue,
    MerchantReadiness
} from '../declarations/types-31.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference, ResourceType } from '../declarations/types-40.js';
export type {
    OnboardingState,
    OnboardingStateResponse,
    OnboardingStartResult,
    OnboardingStartResponse,
    OnboardingVerifyEmailRequestInput,
    OnboardingVerifyEmailResult,
    OnboardingVerifyEmailResponse,
    OnboardingVerifyEmailRequest,
    OnboardingVerifyEmailCodeInput
} from '../declarations/types-32.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { DeveloperInitialAPIKeyRequestInput, DeveloperInitialAPIKeyRequest } from '../declarations/types-15.js';
export type { APIKeyWithSecret, AuthMode, APIKey, Address } from '../declarations/types-0.js';
export type { CreateAPIKeyResponse } from '../declarations/types-5.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { Credentials } from '../declarations/types-9.js';
export type { ReadinessAction, ReadinessMerchantAccountSession, ReadinessRequirements, ReadinessAxis } from '../declarations/types-39.js';
export type { Merchant } from '../declarations/types-30.js';
export type { ImageAttachment } from '../declarations/types-19.js';
export type { ExpandedOrganizationSummary } from '../declarations/types-16.js';
export type { CapabilityReadiness } from '../declarations/types-3.js';
export type { User } from '../declarations/types-50.js';
export { makeDeveloperInitialAPIKeyRequest } from '../declarations/types-66.js';
export {
    makeMoneyValue,
    makeOnboardingAdvanceRequest,
    makeOnboardingProfileRequest,
    makeOnboardingStartRequest,
    makeOnboardingVerifyEmailRequest
} from '../declarations/types-68.js';
export interface OnboardingResource {
    /**
 * Submits whatever the caller currently knows, re-evaluates onboarding, reconciles onboarding
 * requirements, and returns the next step in the consolidated onboarding state machine. Send an
 * empty JSON object when the current next_step only asks to refresh onboarding requirements. The
 * credential selects the environment; the onboarding session token acts in the merchant's default
 * sandbox.
 * @see reference/onboarding.md#onboardingadvance
 * POST /v1/onboarding/advance
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.advance({}, { idempotencyKey: idempotencyKey })
 */
    advance(params: (InputValue<OnboardingAdvanceRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<OnboardingState>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/onboarding.md#onboardingadvance
     */
    advanceWithResponse(params: (InputValue<OnboardingAdvanceRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<SdkResponse<OnboardingStateResponse>>;
    /**
 * Creates the first long-lived sandbox API key. The credential selects the environment; the
 * onboarding session token acts in the merchant's default sandbox.
 * @see reference/onboarding.md#onboardingcreateapikey
 * POST /v1/onboarding/api-key
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.createAPIKey({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    createAPIKey(params: (InputValue<DeveloperInitialAPIKeyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"onboarding">): Promise<APIKeyWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/onboarding.md#onboardingcreateapikey
     */
    createAPIKeyWithResponse(params: (InputValue<DeveloperInitialAPIKeyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"onboarding">): Promise<SdkResponse<CreateAPIKeyResponse>>;
    /**
 * Returns the consolidated onboarding state machine, including the primary next step for agents or
 * humans. This endpoint is read-only. The credential selects the environment; the onboarding
 * session token acts in the merchant's default sandbox.
 * @see reference/onboarding.md#onboardinggetstate
 * GET /v1/onboarding/state
 * @example
 * client.onboarding.getState()
 */
    getState(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<OnboardingState>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/onboarding.md#onboardinggetstate
     */
    getStateWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SdkResponse<OnboardingStateResponse>>;
    /**
 * Starts the consolidated onboarding flow by emailing a short-lived verification code and
 * returning a temporary verification token.
 * @see reference/onboarding.md#onboardingstartflow
 * POST /v1/onboarding/start
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.startFlow({email: "example", first_name: "example", last_name: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    startFlow(params: (InputValue<OnboardingStartRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<OnboardingStartResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/onboarding.md#onboardingstartflow
     */
    startFlowWithResponse(params: (InputValue<OnboardingStartRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<SdkResponse<OnboardingStartResponse>>;
    /**
 * Verifies the emailed code, provisions the Flint user and merchant if needed, and returns an
 * onboarding session token. The token expires at onboarding_session_expires_at and cannot be
 * refreshed. Verify the email again to get a new one. Read GET /v1/onboarding/state next.
 * @see reference/onboarding.md#onboardingverifyemailcode
 * POST /v1/onboarding/verify-email
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.verifyEmailCode({verification_code: "example", verification_token: "example"},
 * { idempotencyKey: idempotencyKey })
 */
    verifyEmailCode(params: (InputValue<OnboardingVerifyEmailRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<OnboardingVerifyEmailResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/onboarding.md#onboardingverifyemailcode
     */
    verifyEmailCodeWithResponse(params: (InputValue<OnboardingVerifyEmailRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<never>): Promise<SdkResponse<OnboardingVerifyEmailResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly onboarding: OnboardingResource;
}
