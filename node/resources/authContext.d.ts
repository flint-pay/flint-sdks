import type { WithResponseInfo } from '../runtime.js';
import type { AuthContext, AuthContextGetParams, AuthContextResponse } from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-6.js';
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
export type { AuthContextGetParams, AuthContext, AuthContextResponse, AuthMode } from '../declarations/types-0.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { Credentials } from '../declarations/types-13.js';
export type { NextAction, MoneyValue } from '../declarations/types-37.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export type { DisputesAcceptParams } from '../declarations/types-22.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export interface AuthContextResource {
    /**
 * Returns non-secret metadata for an API key, CLI OAuth access token, workload access token, or
 * partner app token, including its merchant, environment, sandbox binding, and granted scopes. CLI
 * OAuth sessions include auth_type=oauth and a stable oauth_grant_id instead of api_key_id.
 * Multi-context tokens also include oauth_session_id, context_id, and the context name. A partner
 * app token reports auth_type=partner_app, the merchant it acts for (Flint-Merchant-Id with an
 * app-level token), the token's mode, the sandbox of the merchant's test grant, the grant's
 * current scopes, and the token's expires_at; it runs every partner app token check, so a missing
 * grant returns 403 environment_grant_required. No additional API scope is required.
 *
 * `GET /v1/auth-context`
 * @see https://developers.withflintpay.com/docs/api/api-keys#getAuthContext
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.authContext.get()
 */
    get(params?: AuthContextGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<AuthContext, AuthContextResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly authContext: AuthContextResource;
}
