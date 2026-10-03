export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateAPIKeyResponse } from '../declarations/CreateAPIKeyResponse.js';
import type { OnboardingAdvanceInput } from '../declarations/OnboardingAdvanceInput.js';
import type { OnboardingAdvanceRequest } from '../declarations/OnboardingAdvanceRequest.js';
import type { OnboardingAdvanceRequestInput } from '../declarations/OnboardingAdvanceRequestInput.js';
import type { OnboardingAdvanceResponse } from '../declarations/OnboardingAdvanceResponse.js';
import type { OnboardingCreateAPIKeyInput } from '../declarations/OnboardingCreateAPIKeyInput.js';
import type { OnboardingCreateAPIKeyResponse } from '../declarations/OnboardingCreateAPIKeyResponse.js';
import type { OnboardingExternalAction } from '../declarations/OnboardingExternalAction.js';
import type { OnboardingExternalActionInput } from '../declarations/OnboardingExternalActionInput.js';
import type { OnboardingGetStateInput } from '../declarations/OnboardingGetStateInput.js';
import type { OnboardingGetStateResponse } from '../declarations/OnboardingGetStateResponse.js';
import type { OnboardingLaunchRecommendedPolicy } from '../declarations/OnboardingLaunchRecommendedPolicy.js';
import type { OnboardingLaunchRecommendedPolicyInput } from '../declarations/OnboardingLaunchRecommendedPolicyInput.js';
import type { OnboardingLaunchReference } from '../declarations/OnboardingLaunchReference.js';
import type { OnboardingLaunchReferenceInput } from '../declarations/OnboardingLaunchReferenceInput.js';
import type { OnboardingNextStep } from '../declarations/OnboardingNextStep.js';
import type { OnboardingNextStepInput } from '../declarations/OnboardingNextStepInput.js';
import type { OnboardingProfile } from '../declarations/OnboardingProfile.js';
import type { OnboardingProfileInput } from '../declarations/OnboardingProfileInput.js';
import type { OnboardingProfileRequest } from '../declarations/OnboardingProfileRequest.js';
import type { OnboardingProfileRequestInput } from '../declarations/OnboardingProfileRequestInput.js';
import type { OnboardingRequirements } from '../declarations/OnboardingRequirements.js';
import type { OnboardingRequirementsInput } from '../declarations/OnboardingRequirementsInput.js';
import type { OnboardingStartFlowInput } from '../declarations/OnboardingStartFlowInput.js';
import type { OnboardingStartFlowResponse } from '../declarations/OnboardingStartFlowResponse.js';
import type { OnboardingStartRequest } from '../declarations/OnboardingStartRequest.js';
import type { OnboardingStartRequestInput } from '../declarations/OnboardingStartRequestInput.js';
import type { OnboardingStartResponse } from '../declarations/OnboardingStartResponse.js';
import type { OnboardingStartResponseInput } from '../declarations/OnboardingStartResponseInput.js';
import type { OnboardingStartResult } from '../declarations/OnboardingStartResult.js';
import type { OnboardingStartResultInput } from '../declarations/OnboardingStartResultInput.js';
import type { OnboardingState } from '../declarations/OnboardingState.js';
import type { OnboardingStateInput } from '../declarations/OnboardingStateInput.js';
import type { OnboardingStateResponse } from '../declarations/OnboardingStateResponse.js';
import type { OnboardingStateResponseInput } from '../declarations/OnboardingStateResponseInput.js';
import type { OnboardingVerifyEmailCodeInput } from '../declarations/OnboardingVerifyEmailCodeInput.js';
import type { OnboardingVerifyEmailCodeResponse } from '../declarations/OnboardingVerifyEmailCodeResponse.js';
import type { OnboardingVerifyEmailRequest } from '../declarations/OnboardingVerifyEmailRequest.js';
import type { OnboardingVerifyEmailRequestInput } from '../declarations/OnboardingVerifyEmailRequestInput.js';
import type { OnboardingVerifyEmailResponse } from '../declarations/OnboardingVerifyEmailResponse.js';
import type { OnboardingVerifyEmailResponseInput } from '../declarations/OnboardingVerifyEmailResponseInput.js';
import type { OnboardingVerifyEmailResult } from '../declarations/OnboardingVerifyEmailResult.js';
import type { OnboardingVerifyEmailResultInput } from '../declarations/OnboardingVerifyEmailResultInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface OnboardingResource {
    /**
 * Submits whatever the caller currently knows, re-evaluates onboarding, reconciles onboarding requirements, and returns the next step in the consolidated onboarding state machine. Send an empty JSON object when the current next_step only asks to refresh onboarding requirements.
 * POST /v1/onboarding/advance
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.advance({body: {}}, { idempotencyKey: idempotencyKey })
 */
    advance(input: OnboardingAdvanceInput, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<OnboardingStateResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    advanceWithResponse(input: OnboardingAdvanceInput, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<OnboardingAdvanceResponse>>;
    /**
 * Creates the first long-lived external API key and exits onboarding.
 * POST /v1/onboarding/api-key
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.createAPIKey({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    createAPIKey(params: (InputValue<{ "name": string; "sandbox_id"?: string; "scopes"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"onboarding">): Promise<_SdkPayloadAt<CreateAPIKeyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createAPIKeyWithResponse(params: (InputValue<{ "name": string; "sandbox_id"?: string; "scopes"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"onboarding">): Promise<SdkResponse<OnboardingCreateAPIKeyResponse>>;
    /**
 * Returns the consolidated onboarding state machine, including the primary next step for agents or humans. This endpoint is read-only.
 * GET /v1/onboarding/state
 * @example
 * client.onboarding.getState()
 */
    getState(params?: { "sandbox_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<_SdkPayloadAt<OnboardingStateResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getStateWithResponse(params?: { "sandbox_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<SdkResponse<OnboardingGetStateResponse>>;
    /**
 * Starts the consolidated onboarding flow by emailing a short-lived verification code and returning a temporary verification token.
 * POST /v1/onboarding/start
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.startFlow({email: "example", first_name: "example", last_name: "example"}, { idempotencyKey: idempotencyKey })
 */
    startFlow(params: (InputValue<{ "email": string; "first_name": string; "last_name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<never>): Promise<_SdkPayloadAt<OnboardingStartResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    startFlowWithResponse(params: (InputValue<{ "email": string; "first_name": string; "last_name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<never>): Promise<SdkResponse<OnboardingStartFlowResponse>>;
    /**
 * Verifies the emailed code, provisions the Flint user and merchant if needed, and returns a short-lived session token for the rest of onboarding.
 * POST /v1/onboarding/verify-email
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.onboarding.verifyEmailCode({verification_code: "example", verification_token: "example"}, { idempotencyKey: idempotencyKey })
 */
    verifyEmailCode(params: (InputValue<{ "merchant_id"?: string; "verification_code": string; "verification_token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<never>): Promise<_SdkPayloadAt<OnboardingVerifyEmailResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    verifyEmailCodeWithResponse(params: (InputValue<{ "merchant_id"?: string; "verification_code": string; "verification_token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<never>): Promise<SdkResponse<OnboardingVerifyEmailCodeResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly onboarding: OnboardingResource;
}
export type { OnboardingAdvanceInput } from '../declarations/OnboardingAdvanceInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { OnboardingStateResponse } from '../declarations/OnboardingStateResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { OnboardingAdvanceResponse } from '../declarations/OnboardingAdvanceResponse.js';
export type { CreateAPIKeyResponse } from '../declarations/CreateAPIKeyResponse.js';
export type { OnboardingCreateAPIKeyResponse } from '../declarations/OnboardingCreateAPIKeyResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { OnboardingGetStateResponse } from '../declarations/OnboardingGetStateResponse.js';
export type { OnboardingStartResponse } from '../declarations/OnboardingStartResponse.js';
export type { OnboardingStartFlowResponse } from '../declarations/OnboardingStartFlowResponse.js';
export type { OnboardingVerifyEmailResponse } from '../declarations/OnboardingVerifyEmailResponse.js';
export type { OnboardingVerifyEmailCodeResponse } from '../declarations/OnboardingVerifyEmailCodeResponse.js';
export type { OnboardingAdvanceRequest } from '../declarations/OnboardingAdvanceRequest.js';
export type { OnboardingAdvanceRequestInput } from '../declarations/OnboardingAdvanceRequestInput.js';
export type { OnboardingExternalAction } from '../declarations/OnboardingExternalAction.js';
export type { OnboardingExternalActionInput } from '../declarations/OnboardingExternalActionInput.js';
export type { OnboardingLaunchRecommendedPolicy } from '../declarations/OnboardingLaunchRecommendedPolicy.js';
export type { OnboardingLaunchRecommendedPolicyInput } from '../declarations/OnboardingLaunchRecommendedPolicyInput.js';
export type { OnboardingLaunchReference } from '../declarations/OnboardingLaunchReference.js';
export type { OnboardingLaunchReferenceInput } from '../declarations/OnboardingLaunchReferenceInput.js';
export type { OnboardingNextStep } from '../declarations/OnboardingNextStep.js';
export type { OnboardingNextStepInput } from '../declarations/OnboardingNextStepInput.js';
export type { OnboardingProfile } from '../declarations/OnboardingProfile.js';
export type { OnboardingProfileInput } from '../declarations/OnboardingProfileInput.js';
export type { OnboardingProfileRequest } from '../declarations/OnboardingProfileRequest.js';
export type { OnboardingProfileRequestInput } from '../declarations/OnboardingProfileRequestInput.js';
export type { OnboardingRequirements } from '../declarations/OnboardingRequirements.js';
export type { OnboardingRequirementsInput } from '../declarations/OnboardingRequirementsInput.js';
export type { OnboardingStartRequest } from '../declarations/OnboardingStartRequest.js';
export type { OnboardingStartRequestInput } from '../declarations/OnboardingStartRequestInput.js';
export type { OnboardingStartResponseInput } from '../declarations/OnboardingStartResponseInput.js';
export type { OnboardingStartResult } from '../declarations/OnboardingStartResult.js';
export type { OnboardingStartResultInput } from '../declarations/OnboardingStartResultInput.js';
export type { OnboardingState } from '../declarations/OnboardingState.js';
export type { OnboardingStateInput } from '../declarations/OnboardingStateInput.js';
export type { OnboardingStateResponseInput } from '../declarations/OnboardingStateResponseInput.js';
export type { OnboardingVerifyEmailRequest } from '../declarations/OnboardingVerifyEmailRequest.js';
export type { OnboardingVerifyEmailRequestInput } from '../declarations/OnboardingVerifyEmailRequestInput.js';
export type { OnboardingVerifyEmailResponseInput } from '../declarations/OnboardingVerifyEmailResponseInput.js';
export type { OnboardingVerifyEmailResult } from '../declarations/OnboardingVerifyEmailResult.js';
export type { OnboardingVerifyEmailResultInput } from '../declarations/OnboardingVerifyEmailResultInput.js';
export type { OnboardingCreateAPIKeyInput } from '../declarations/OnboardingCreateAPIKeyInput.js';
export type { OnboardingGetStateInput } from '../declarations/OnboardingGetStateInput.js';
export type { OnboardingStartFlowInput } from '../declarations/OnboardingStartFlowInput.js';
export type { OnboardingVerifyEmailCodeInput } from '../declarations/OnboardingVerifyEmailCodeInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { APIKeyWithSecret } from '../declarations/APIKeyWithSecret.js';
export type { MerchantAccountSessionStripeLaunch } from '../declarations/MerchantAccountSessionStripeLaunch.js';
export type { MerchantAccountSessionStripeComponentLaunch } from '../declarations/MerchantAccountSessionStripeComponentLaunch.js';
export type { MerchantAccountSessionStripeComponentProps } from '../declarations/MerchantAccountSessionStripeComponentProps.js';
export type { MerchantAccountSessionStripeCollectionOptions } from '../declarations/MerchantAccountSessionStripeCollectionOptions.js';
export type { MerchantAccountSessionStripeRequirements } from '../declarations/MerchantAccountSessionStripeRequirements.js';
export type { MerchantAccountSessionStripeLaunchInput } from '../declarations/MerchantAccountSessionStripeLaunchInput.js';
export type { MerchantAccountSessionStripeComponentLaunchInput } from '../declarations/MerchantAccountSessionStripeComponentLaunchInput.js';
export type { MerchantAccountSessionStripeComponentPropsInput } from '../declarations/MerchantAccountSessionStripeComponentPropsInput.js';
export type { MerchantAccountSessionStripeCollectionOptionsInput } from '../declarations/MerchantAccountSessionStripeCollectionOptionsInput.js';
export type { MerchantAccountSessionStripeRequirementsInput } from '../declarations/MerchantAccountSessionStripeRequirementsInput.js';
export type { ResponseMetaInput } from '../declarations/ResponseMetaInput.js';
export type { ResponseWarningInput } from '../declarations/ResponseWarningInput.js';
export type { NextActionInput } from '../declarations/NextActionInput.js';
export type { Merchant } from '../declarations/Merchant.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { Banner } from '../declarations/Banner.js';
export type { Image } from '../declarations/Image.js';
export type { User } from '../declarations/User.js';
export type { MerchantInput } from '../declarations/MerchantInput.js';
export type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
export type { ImageInput } from '../declarations/ImageInput.js';
export type { UserInput } from '../declarations/UserInput.js';
export type { DeveloperInitialAPIKeyRequestInput } from '../declarations/DeveloperInitialAPIKeyRequestInput.js';
export { makeOnboardingStateResponse } from '../declarations/makeOnboardingStateResponse.js';
export { makeCreateAPIKeyResponse } from '../declarations/makeCreateAPIKeyResponse.js';
export { makeOnboardingStartResponse } from '../declarations/makeOnboardingStartResponse.js';
export { makeOnboardingVerifyEmailResponse } from '../declarations/makeOnboardingVerifyEmailResponse.js';
export { makeOnboardingAdvanceRequest } from '../declarations/makeOnboardingAdvanceRequest.js';
export { makeOnboardingExternalAction } from '../declarations/makeOnboardingExternalAction.js';
export { makeOnboardingLaunchRecommendedPolicy } from '../declarations/makeOnboardingLaunchRecommendedPolicy.js';
export { makeOnboardingLaunchReference } from '../declarations/makeOnboardingLaunchReference.js';
export { makeOnboardingNextStep } from '../declarations/makeOnboardingNextStep.js';
export { makeOnboardingProfile } from '../declarations/makeOnboardingProfile.js';
export { makeOnboardingProfileRequest } from '../declarations/makeOnboardingProfileRequest.js';
export { makeOnboardingRequirements } from '../declarations/makeOnboardingRequirements.js';
export { makeOnboardingStartRequest } from '../declarations/makeOnboardingStartRequest.js';
export { makeOnboardingStartResult } from '../declarations/makeOnboardingStartResult.js';
export { makeOnboardingState } from '../declarations/makeOnboardingState.js';
export { makeOnboardingVerifyEmailRequest } from '../declarations/makeOnboardingVerifyEmailRequest.js';
export { makeOnboardingVerifyEmailResult } from '../declarations/makeOnboardingVerifyEmailResult.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeAPIKeyWithSecret } from '../declarations/makeAPIKeyWithSecret.js';
export { makeMerchantAccountSessionStripeLaunch } from '../declarations/makeMerchantAccountSessionStripeLaunch.js';
export { makeMerchantAccountSessionStripeComponentLaunch } from '../declarations/makeMerchantAccountSessionStripeComponentLaunch.js';
export { makeMerchantAccountSessionStripeComponentProps } from '../declarations/makeMerchantAccountSessionStripeComponentProps.js';
export { makeMerchantAccountSessionStripeCollectionOptions } from '../declarations/makeMerchantAccountSessionStripeCollectionOptions.js';
export { makeMerchantAccountSessionStripeRequirements } from '../declarations/makeMerchantAccountSessionStripeRequirements.js';
export { makeMerchant } from '../declarations/makeMerchant.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeBanner } from '../declarations/makeBanner.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeUser } from '../declarations/makeUser.js';
