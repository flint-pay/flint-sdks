import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    MerchantAccountSession,
    MerchantAccountSessionResponse,
    MerchantAccountSessionsCreateParams,
    MerchantAccountSessionsRefreshParams
} from '../declarations/types-36.js';
import type { RequestOptions } from '../declarations/types-51.js';
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
    MerchantAccountSessionsCreateParams,
    MerchantAccountSession,
    MerchantAccountSessionResponse,
    MerchantAccountSessionsRefreshParams,
    MerchantAccountSessionCreateRequestInput,
    MerchantAccountSessionClientSession,
    MerchantAccountSessionStripe,
    MerchantAccountSessionStripeComponent,
    MerchantAccountSessionStripeCollectionOptions,
    MerchantAccountSessionStripeRequirements,
    MerchantAccountSessionEffectivePolicy,
    MerchantAccountSessionRefreshRequestInput,
    MerchantAccountSessionRefreshRequest
} from '../declarations/types-36.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { DisputeResponseSessionStripeAccountSession } from '../declarations/types-22.js';
export type { NextAction, MoneyValue } from '../declarations/types-37.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export { makeMerchantAccountSessionCreateRequest, makeMerchantAccountSessionRefreshRequest } from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export interface MerchantAccountSessionsResource {
    /**
 * Creates an embedded browser handoff for one or more allowlisted account components. The
 * credential selects the environment; the onboarding session token acts in the merchant's default
 * sandbox. A partner install token works in live mode only while its app's merchant_onboarding
 * platform capability is active; otherwise it gets 409 ACTION_NOT_ALLOWED with the reason its
 * platform status gives: platform_onboarding_required, platform_pending_review, platform_rejected,
 * or platform_capability_inactive. A same-key, same-input retry replays the encrypted original
 * result for 24 hours, including its original credentials and expiries. Replay may return an
 * expired credential. Use a new key for a new launch or refresh.
 *
 * `POST /v1/merchant-account-sessions`
 * @see
 * https://developers.withflintpay.com/docs/api/merchant-account-sessions#createMerchantAccountSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantAccountSessions.create({collection_strategy: "upfront", components:
 * ["account_onboarding"], future_requirements: "include"}, { idempotencyKey: idempotencyKey })
 */
    create(params: MerchantAccountSessionsCreateParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<MerchantAccountSession, MerchantAccountSessionResponse>>;
    /**
 * Creates a fresh provider session from a signed launch token after rechecking the authenticated
 * principal, merchant environment, account controller, and component grant. An onboarding session
 * can refresh only sandbox launch tokens created by the same user with an onboarding session. The
 * sandbox is pinned by the launch token, which is the merchant's default sandbox for an onboarding
 * session. Live onboarding requires a live API key or live CLI login. A partner install token
 * works in live mode only while its app's merchant_onboarding platform capability is active;
 * otherwise it gets 409 ACTION_NOT_ALLOWED with the reason its platform status gives:
 * platform_onboarding_required, platform_pending_review, platform_rejected, or
 * platform_capability_inactive. Refresh requires the same credential that created the launch
 * token. For an install token, that is any access token for the same environment grant and
 * consent; revoking the install or grant, or authorizing again, ends the launch token. A same-key,
 * same-input retry replays the encrypted original result for 24 hours, including its original
 * credentials and expiries. Replay may return an expired credential. Use a new key for a new
 * launch or refresh.
 *
 * `POST /v1/merchant-account-session-refreshes`
 * @see
 * https://developers.withflintpay.com/docs/api/merchant-account-sessions#refreshMerchantAccountSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchantAccountSessions.refresh({launch_token: "aslaunch_v1.example"}, { idempotencyKey:
 * idempotencyKey })
 */
    refresh(params: MerchantAccountSessionsRefreshParams, options?: RequestOptions<"merchant" | "onboarding">): Promise<WithResponseInfo<MerchantAccountSession, MerchantAccountSessionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchantAccountSessions: MerchantAccountSessionsResource;
}
