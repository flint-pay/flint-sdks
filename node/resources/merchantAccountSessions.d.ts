export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { MerchantAccountSessionResponse } from '../declarations/MerchantAccountSessionResponse.js';
import type { MerchantAccountSessionsCreateInput } from '../declarations/MerchantAccountSessionsCreateInput.js';
import type { MerchantAccountSessionsCreateResponse } from '../declarations/MerchantAccountSessionsCreateResponse.js';
import type { MerchantAccountSessionsRefreshInput } from '../declarations/MerchantAccountSessionsRefreshInput.js';
import type { MerchantAccountSessionsRefreshResponse } from '../declarations/MerchantAccountSessionsRefreshResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export interface MerchantAccountSessionsResource {
    /**
 * Creates an embedded browser handoff for one or more allowlisted account components. An onboarding session is limited to the merchant's default sandbox unless sandbox_id in the JSON body names another sandbox of the same merchant. Live onboarding requires a live API key.
 * POST /v1/merchant-account-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantAccountSessions.create({components: ["account_onboarding"]}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "collection_strategy"?: "upfront" | "incremental"; "components": Array<"account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner">; "future_requirements"?: "omit" | "include"; "sandbox_id"?: string; "targeted_requirement_ids"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<MerchantAccountSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "collection_strategy"?: "upfront" | "incremental"; "components": Array<"account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner">; "future_requirements"?: "omit" | "include"; "sandbox_id"?: string; "targeted_requirement_ids"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<MerchantAccountSessionsCreateResponse>>;
    /**
 * Creates a fresh provider session from a signed launch token after rechecking the authenticated principal, merchant environment, account controller, and component grant. An onboarding session can refresh only sandbox launch tokens created by the same user with an onboarding session. The sandbox is pinned by the launch token, using the merchant's default sandbox unless sandbox_id named another sandbox of the same merchant at creation. Live onboarding requires a live API key, and refresh requires the same API key that created the launch token.
 * POST /v1/merchant-account-sessions/refresh
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantAccountSessions.refresh({launch_token: "example"}, { idempotencyKey: idempotencyKey })
 */
    refresh(params: (InputValue<{ "launch_token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<MerchantAccountSessionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    refreshWithResponse(params: (InputValue<{ "launch_token": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<MerchantAccountSessionsRefreshResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly merchantAccountSessions: MerchantAccountSessionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { MerchantAccountSessionResponse } from '../declarations/MerchantAccountSessionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { MerchantAccountSessionsCreateResponse } from '../declarations/MerchantAccountSessionsCreateResponse.js';
export type { MerchantAccountSessionsRefreshResponse } from '../declarations/MerchantAccountSessionsRefreshResponse.js';
export type { MerchantAccountSessionsCreateInput } from '../declarations/MerchantAccountSessionsCreateInput.js';
export type { MerchantAccountSessionsRefreshInput } from '../declarations/MerchantAccountSessionsRefreshInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { MerchantAccountSession } from '../declarations/MerchantAccountSession.js';
export type { MerchantAccountSessionStripeComponent } from '../declarations/MerchantAccountSessionStripeComponent.js';
export type { MerchantAccountSessionEffectivePolicy } from '../declarations/MerchantAccountSessionEffectivePolicy.js';
export type { OnboardingRequirements } from '../declarations/OnboardingRequirements.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { MerchantAccountSessionCreateRequestInput } from '../declarations/MerchantAccountSessionCreateRequestInput.js';
export type { MerchantAccountSessionRefreshRequestInput } from '../declarations/MerchantAccountSessionRefreshRequestInput.js';
export { makeMerchantAccountSessionResponse } from '../declarations/makeMerchantAccountSessionResponse.js';
export { makeMerchantAccountSession } from '../declarations/makeMerchantAccountSession.js';
export { makeMerchantAccountSessionStripeComponent } from '../declarations/makeMerchantAccountSessionStripeComponent.js';
export { makeMerchantAccountSessionEffectivePolicy } from '../declarations/makeMerchantAccountSessionEffectivePolicy.js';
export { makeOnboardingRequirements } from '../declarations/makeOnboardingRequirements.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
