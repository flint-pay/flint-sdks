import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    MerchantAccountSession,
    MerchantAccountSessionCreateRequestInput,
    MerchantAccountSessionRefreshRequestInput,
    MerchantAccountSessionResponse,
    MerchantAccountSessionsCreateInput,
    MerchantAccountSessionsRefreshInput
} from '../declarations/types-30.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type {
    MerchantAccountSessionCreateRequestInput,
    MerchantAccountSession,
    MerchantAccountSessionResponse,
    MerchantAccountSessionRefreshRequestInput,
    MerchantAccountSessionsCreateInput,
    MerchantAccountSessionsRefreshInput,
    MerchantAccountSessionClientSession,
    MerchantAccountSessionStripe,
    MerchantAccountSessionStripeComponent,
    MerchantAccountSessionStripeCollectionOptions,
    MerchantAccountSessionStripeRequirements,
    MerchantAccountSessionEffectivePolicy,
    MerchantAccountSessionRefreshRequest
} from '../declarations/types-30.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { DisputeResponseSessionStripeAccountSession } from '../declarations/types-16.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export {
    makeMerchantAccountSessionCreateRequest,
    makeMerchantAccountSessionRefreshRequest,
    makeMoneyValue
} from '../declarations/types-68.js';
export interface MerchantAccountSessionsResource {
    /**
 * Creates an embedded browser handoff for one or more allowlisted account components. An
 * onboarding session is limited to the merchant's default sandbox unless sandbox_id in the JSON
 * body names another sandbox of the same merchant. Live onboarding requires a live API key. A
 * completed retry with the same Idempotency-Key creates a fresh launch session instead of
 * replaying a prior client secret.
 * @see reference/merchantAccountSessions.md#merchantaccountsessionscreate
 * POST /v1/merchant-account-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantAccountSessions.create({components: ["account_onboarding"]}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<MerchantAccountSessionCreateRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<MerchantAccountSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/merchantAccountSessions.md#merchantaccountsessionscreate
     */
    createWithResponse(params: (InputValue<MerchantAccountSessionCreateRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<MerchantAccountSessionResponse>>;
    /**
 * Creates a fresh provider session from a signed launch token after rechecking the authenticated
 * principal, merchant environment, account controller, and component grant. An onboarding session
 * can refresh only sandbox launch tokens created by the same user with an onboarding session. The
 * sandbox is pinned by the launch token, using the merchant's default sandbox unless sandbox_id
 * named another sandbox of the same merchant at creation. Live onboarding requires a live API key,
 * and refresh requires the same API key that created the launch token. A completed retry with the
 * same Idempotency-Key creates a fresh launch session instead of replaying a prior client secret.
 * @see reference/merchantAccountSessions.md#merchantaccountsessionsrefresh
 * POST /v1/merchant-account-sessions/refresh
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantAccountSessions.refresh({launch_token: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    refresh(params: (InputValue<MerchantAccountSessionRefreshRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<MerchantAccountSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/merchantAccountSessions.md#merchantaccountsessionsrefresh
     */
    refreshWithResponse(params: (InputValue<MerchantAccountSessionRefreshRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<MerchantAccountSessionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchantAccountSessions: MerchantAccountSessionsResource;
}
